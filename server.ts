import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { WebSocketServer } from "ws";
import http from "http";

async function startServer() {
  const app = express();
  const server = http.createServer(app);
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini
  const genAI = new GoogleGenAI({ 
    apiKey: process.env.GEMINI_API_KEY || "",
    httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
  });

  // API Route: Check Grammar/Sentence
  app.post("/api/check-sentence", async (req, res) => {
    const { sentence, context } = req.body;
    try {
      const response = await genAI.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analyze this Arabic sentence based on "${context}". Is it grammatically correct? Give feedback in Indonesian.
        Sentence: ${sentence}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: "object" as any,
            properties: {
              correct: { type: "boolean" as any },
              feedback: { type: "string" as any },
              correction: { type: "string" as any }
            },
            required: ["correct", "feedback"]
          }
        }
      });
      res.json(JSON.parse(response.text));
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Gagal menganalisis kalimat." });
    }
  });

  // WebSocket for Multiplayer Games
  const wss = new WebSocketServer({ server });
  let gameState = {
    players: [] as any[],
    questions: [] as any[],
    currentIndex: -1,
    scores: { p1: 0, p2: 0 },
    status: "waiting" // waiting, playing, finished
  };

  wss.on("connection", (ws) => {
    // Assign player slot
    let playerSlot = -1;
    if (gameState.players.length < 2) {
      playerSlot = gameState.players.length + 1;
      gameState.players.push(ws);
      ws.send(JSON.stringify({ type: "ASSIGN_PLAYER", playerSlot }));
    } else {
      ws.send(JSON.stringify({ type: "ROOM_FULL" }));
    }

    ws.on("message", (data) => {
      const message = JSON.parse(data.toString());

      if (message.type === "START_GAME") {
        gameState.questions = message.questions; // Client sends generated questions
        gameState.currentIndex = 0;
        gameState.scores = { p1: 0, p2: 0 };
        gameState.status = "playing";
        broadcast({ 
          type: "GAME_STARTED", 
          question: gameState.questions[0],
          round: 1
        });
      }

      if (message.type === "SUBMIT_ANSWER") {
        const { slot, isCorrect } = message;
        if (gameState.status !== "playing") return;

        if (isCorrect) {
          // Point to whoever is faster
          if (slot === 1) gameState.scores.p1++;
          else gameState.scores.p2++;

          gameState.currentIndex++;

          if (gameState.currentIndex >= 10) {
            gameState.status = "finished";
            broadcast({ 
              type: "GAME_OVER", 
              scores: gameState.scores,
              winner: gameState.scores.p1 > gameState.scores.p2 ? "Pemain 1" : (gameState.scores.p2 > gameState.scores.p1 ? "Pemain 2" : "Seri")
            });
          } else {
            broadcast({ 
              type: "NEXT_ROUND", 
              question: gameState.questions[gameState.currentIndex],
              round: gameState.currentIndex + 1,
              scores: gameState.scores
            });
          }
        }
      }

      if (message.type === "RESET_ROOM") {
        gameState.status = "waiting";
        gameState.currentIndex = -1;
        gameState.scores = { p1: 0, p2: 0 };
        broadcast({ type: "ROOM_RESET" });
      }
    });

    ws.on("close", () => {
      gameState.players = gameState.players.filter(p => p !== ws);
      if (gameState.players.length === 0) {
        gameState.status = "waiting";
        gameState.currentIndex = -1;
      }
    });
  });

  function broadcast(msg: any) {
    wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(JSON.stringify(msg));
      }
    });
  }

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
