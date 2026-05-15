import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, GraduationCap, Gamepad2, Brain, Languages, ArrowLeft, ArrowRight, CheckCircle2, XCircle, Beaker, ScrollText } from 'lucide-react';
import { chapters, allSentences} from './data';
import { Chapter, MufrodatItem, SentenceTask, Material } from './types';

// --- Components ---

const MaterialView = ({ materials }: { materials: Material[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!materials || materials.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-20 text-center">
        <ScrollText size={64} className="text-emerald-100 mb-6" />
        <h3 className="text-2xl font-bold text-emerald-900 mb-2">Belum ada materi teori</h3>
        <p className="text-emerald-600">Bab ini berfokus pada pelatihan kosakata dan latihan interaktif.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 py-4">
      <div className="lg:w-1/3 flex flex-col gap-3">
        <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-2 px-2">Daftar Topik</p>
        {materials.map((m, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`text-left p-5 rounded-2xl transition-all border-2 ${
              activeIndex === i 
              ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg' 
              : 'bg-white border-emerald-50 text-emerald-900 hover:border-emerald-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${activeIndex === i ? 'bg-white text-emerald-600' : 'bg-emerald-100 text-emerald-600'}`}>
                {i + 1}
              </span>
              <span className="font-bold flex-1">{m.title}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="lg:w-2/3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-emerald-50/50 rounded-[2.5rem] p-10 border border-emerald-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white rounded-2xl text-emerald-600 shadow-sm">
                <ScrollText size={24} />
              </div>
              <h3 className="text-3xl font-display font-bold text-emerald-900">{materials[activeIndex].title}</h3>
            </div>

            <div className="prose prose-emerald max-w-none">
              <div className="whitespace-pre-wrap text-emerald-900 text-lg leading-relaxed font-normal">
                {materials[activeIndex].content.split('\n').map((line, i) => (
                   <div key={i} className={line.startsWith('-') ? 'ml-4 flex gap-2' : 'mb-4'}>
                     {line.startsWith('-') && <span className="text-amber-500 mt-1.5">•</span>}
                     <span>{line.startsWith('-') ? line.substring(1).trim() : line}</span>
                   </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const Navbar = ({ onHome, chapterTitle }: { onHome: () => void, chapterTitle?: string }) => (
  <header className="h-20 border-b border-emerald-100 bg-white flex items-center justify-between px-8 sticky top-0 z-40">
    <div className="flex flex-col">
      <h2 className="text-emerald-900 font-bold text-lg">{chapterTitle || "Dashboard Belajar"}</h2>
      <p className="text-emerald-500 text-sm italic">Linguistic Curriculum Developer: AI Tutor</p>
    </div>
    <div className="flex items-center gap-4">
      <button 
        onClick={onHome}
        className="px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-bold text-sm hover:bg-amber-200 transition-colors"
      >
        Dashboard
      </button>
      <div className="w-10 h-10 rounded-full bg-emerald-200 border-2 border-emerald-500 overflow-hidden">
        <div className="w-full h-full bg-emerald-600 flex items-center justify-center text-white font-bold">U</div>
      </div>
    </div>
  </header>
);

const Sidebar = ({ onChapterSelect, activeChapterId, collapsed, setCollapsed }: { onChapterSelect: (c: Chapter) => void, activeChapterId?: number, collapsed: boolean, setCollapsed: (c: boolean) => void }) => (
  <aside className={`${collapsed ? 'w-20' : 'w-72'} bg-emerald-700 flex flex-col justify-between h-screen sticky top-0 transition-all duration-300 z-50 overflow-hidden`}>
    <div className="flex flex-col h-full">
      <div className={`p-6 border-b border-emerald-600 flex items-center ${collapsed ? 'justify-center' : 'justify-between'} mb-6`}>
        {!collapsed && (
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.location.assign("/")}>
            <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold text-emerald-900 font-arabic">أ</span>
            </div>
            <h1 className="text-white font-black text-lg tracking-tight">AL-ARABI AI</h1>
          </div>
        )}
        <button onClick={() => setCollapsed(!collapsed)} className="p-2 hover:bg-emerald-600 rounded-xl text-emerald-100 transition-colors">
          {collapsed ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto px-4 space-y-2 no-scrollbar pb-6 text-left">
        {!collapsed && <p className="text-emerald-300/50 text-[10px] font-bold uppercase tracking-widest mb-4 ml-2">KURIKULUM</p>}
        {chapters.map((chapter) => (
          <div 
            key={chapter.id}
            onClick={() => onChapterSelect(chapter)}
            className={`p-3 rounded-xl flex items-center gap-3 cursor-pointer transition-all ${
              activeChapterId === chapter.id 
              ? 'bg-emerald-600 border border-emerald-500 text-white shadow-lg' 
              : 'text-emerald-100 hover:bg-emerald-600/30'
            }`}
          >
            <span className="text-lg opacity-80 shrink-0">{chapter.id === 1 ? '📚' : chapter.id > 3 ? '⚖️' : '🌱'}</span>
            {!collapsed && <span className="font-medium text-sm truncate">Bab {chapter.id}: {chapter.title.split(': ')[1]}</span>}
          </div>
        ))}
      </nav>
      
      {!collapsed && (
        <div className="p-4 border-t border-emerald-600 bg-emerald-800/50">
          <p className="text-emerald-300 text-[10px] font-bold uppercase mb-2 tracking-widest">PROGRES BELAJAR</p>
          <div className="w-full bg-emerald-900 rounded-full h-1.5 mb-2">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              className="bg-amber-400 h-1.5 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.5)]"
            ></motion.div>
          </div>
          <p className="text-white text-[10px] font-bold">Lvl. 12 • 1,240 XP</p>
        </div>
      )}
    </div>
  </aside>
);

interface ChapterCardProps {
  chapter: Chapter;
  onClick: () => void;
}

const ChapterCard = ({ chapter, onClick }: ChapterCardProps) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
  >
    <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
    <div className="relative z-10">
      <div className="h-14 w-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
        <BookOpen size={28} />
      </div>
      <h3 className="font-display font-bold text-2xl mb-3 text-gray-900 leading-tight">{chapter.title}</h3>
      <p className="text-gray-500 text-base leading-relaxed">{chapter.description}</p>
    </div>
  </motion.div>
);


const Flashcard = ({ mufrodat }: { mufrodat: MufrodatItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const item = mufrodat[currentIndex];

  return (
    <div className="flex flex-col items-center gap-12 py-12">
      <div 
        className="w-full max-w-lg h-80 relative group cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ perspective: "1500px" }}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
          className="w-full h-full relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div 
            className="absolute inset-0 bg-white border-2 border-emerald-100 rounded-[3rem] flex flex-col items-center justify-center p-12 shadow-xl overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="absolute top-8 left-8 text-emerald-200 font-black text-6xl opacity-20 uppercase tracking-tighter">ARABIC</div>
            <span className="text-8xl font-arabic font-bold mb-6 text-emerald-900 drop-shadow-sm select-none" dir="rtl">{item.arabic}</span>
            <span className="text-emerald-500 text-xs font-bold uppercase tracking-[0.3em] bg-emerald-50 px-4 py-1.5 rounded-full">{item.type}</span>
            <p className="mt-8 text-emerald-400/60 text-[10px] font-bold uppercase tracking-widest">Klik untuk membalik</p>
          </div>
          {/* Back */}
          <div 
            className="absolute inset-0 bg-emerald-700 rounded-[3rem] flex flex-col items-center justify-center p-12 shadow-2xl text-white"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
             <div className="absolute top-8 left-8 text-white/5 font-black text-6xl opacity-20 uppercase tracking-tighter">MEANING</div>
            <span className="text-5xl font-display font-bold text-center leading-tight mb-4">{item.indonesian}</span>
            <div className="w-12 h-1 bg-amber-400 rounded-full opacity-50"></div>
          </div>
        </motion.div>
      </div>
      
      <div className="flex gap-6 items-center">
        <button 
          onClick={() => {
            setIsFlipped(false);
            setCurrentIndex((prev) => (prev > 0 ? prev - 1 : mufrodat.length - 1));
          }}
          className="p-4 bg-emerald-100/50 text-emerald-700 border border-emerald-100 rounded-2xl hover:bg-emerald-600 hover:text-white hover:shadow-lg transition-all"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="bg-white px-6 py-2 rounded-full border border-emerald-100 shadow-sm font-mono text-sm font-bold text-emerald-800">
          {currentIndex + 1} / {mufrodat.length}
        </div>
        <button 
          onClick={() => {
            setIsFlipped(false);
            setCurrentIndex((prev) => (prev < mufrodat.length - 1 ? prev + 1 : 0));
          }}
          className="p-4 bg-emerald-100/50 text-emerald-700 border border-emerald-100 rounded-2xl hover:bg-emerald-600 hover:text-white hover:shadow-lg transition-all"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

const ScrambledExercise = ({ sentences }: { sentences?: SentenceTask[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledIndices, setShuffledIndices] = useState<number[]>([]);
  const [shuffledWords, setShuffledWords] = useState<{id: string, word: string}[]>([]);
  const [selectedWords, setSelectedWords] = useState<{id: string, word: string}[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const sourceList = (sentences && sentences.length > 0) ? sentences : allSentences;

  useEffect(() => {
    const indices = Array.from({ length: sourceList.length }, (_, i) => i);
    setShuffledIndices(indices.sort(() => Math.random() - 0.5));
  }, [sourceList]);

  const task = sourceList[shuffledIndices[currentIndex] ?? 0];

  useEffect(() => {
    if (task) {
      const wordsWithIds = task.arabic.map((w, i) => ({ id: `${currentIndex}-${w}-${i}`, word: w }));
      setShuffledWords([...wordsWithIds].sort(() => Math.random() - 0.5));
      setSelectedWords([]);
      setIsCorrect(null);
    }
  }, [currentIndex, task]);

  const checkResult = () => {
    const result = selectedWords.map(w => w.word).join(" ") === task.arabic.join(" ");
    setIsCorrect(result);
    if (result) {
      setTimeout(() => {
        if (currentIndex < shuffledIndices.length - 1) {
          setCurrentIndex(prev => prev + 1);
        } else {
          // Reshuffle when finished
          setShuffledIndices(prev => [...prev].sort(() => Math.random() - 0.5));
          setCurrentIndex(0);
        }
      }, 1000);
    }
  };

  const selectWord = (item: {id: string, word: string}) => {
    setSelectedWords([...selectedWords, item]);
    setIsCorrect(null);
  };

  const removeWord = (index: number) => {
    setSelectedWords(prev => prev.filter((_, i) => i !== index));
    setIsCorrect(null);
  };

  return (
    <div className="flex flex-col items-center gap-10 py-12 w-full max-w-2xl mx-auto">
      <div className="text-center">
        <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Latihan Nahwu {currentIndex + 1}/{sourceList.length}</div>
        <h3 className="font-display font-bold text-3xl mb-2 text-emerald-900">Susunlah Kalimat Sempurna</h3>
        <p className="text-emerald-600/70 text-lg font-medium italic">"{task?.indonesian}"</p>
      </div>

      {/* Answer Area - Arabic is RTL, flex-row flows Right-to-Left naturally with dir="rtl" */}
      <div className="w-full bg-emerald-50/50 border-2 border-dashed border-emerald-200 rounded-[2.5rem] p-10 flex flex-wrap gap-4 justify-center min-h-[140px] shadow-inner relative overflow-hidden" dir="rtl">
        <div className="absolute top-4 right-6 text-[10px] font-bold text-emerald-200 uppercase tracking-widest">Tempat Jawaban</div>
        <AnimatePresence mode="popLayout">
          {selectedWords.map((item, i) => (
            <motion.div 
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              key={item.id} 
              className="bg-emerald-600 shadow-lg text-white px-6 py-3 rounded-2xl text-2xl font-arabic font-bold cursor-pointer hover:bg-emerald-700 active:scale-95 transition-all"
              onClick={() => removeWord(i)}
            >
              {item.word}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Shuffled Options - Natural RTL flow */}
      <div className="flex flex-wrap gap-4 justify-center" dir="rtl">
        {shuffledWords.map((item) => {
          const isSelected = selectedWords.some(sw => sw.id === item.id);
          return (
            <motion.div 
              layout
              key={item.id} 
              className={`bg-white border-2 border-emerald-100 px-6 py-3 rounded-2xl text-2xl font-arabic font-bold cursor-pointer hover:border-amber-400 hover:text-amber-700 shadow-sm hover:shadow-md transition-all active:scale-95 ${isSelected ? 'opacity-0 pointer-events-none' : ''}`}
              style={{ visibility: isSelected ? 'hidden' : 'visible' }}
              onClick={() => selectWord(item)}
            >
              {item.word}
            </motion.div>
          )
        })}
      </div>

      <div className="w-full flex gap-4">
        <button 
          onClick={() => setSelectedWords([])}
          className="flex-1 bg-white text-emerald-700 py-5 rounded-2xl font-bold border-2 border-emerald-100 hover:bg-emerald-50 transition-colors"
        >
          Reset
        </button>
        <button 
          onClick={checkResult}
          disabled={selectedWords.length === 0}
          className="flex-[2] bg-emerald-600 text-white py-5 rounded-2xl font-bold hover:bg-emerald-700 disabled:bg-gray-300 disabled:shadow-none transition-all shadow-xl shadow-emerald-200 text-lg"
        >
          Cek Jawaban ✨
        </button>
      </div>

      <AnimatePresence>
        {isCorrect !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`w-full flex items-center justify-center gap-3 p-6 rounded-[2rem] border-2 ${isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'}`}
          >
            {isCorrect ? <CheckCircle2 className="text-emerald-600" size={28} /> : <XCircle className="text-rose-600" size={28} />}
            <span className="font-bold text-xl">{isCorrect ? 'Muntaz! Susunanmu sempurna.' : 'Sedikit lagi, perhatikan harakatnya!'}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-8 mt-4">
        <button 
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))} 
          className="text-emerald-600 underline text-sm font-bold flex items-center gap-1"
        >
          <ArrowLeft size={14} /> Kembali
        </button>
        <button 
          onClick={() => setCurrentIndex(prev => (prev + 1) % sourceList.length)} 
          className="text-emerald-600 underline text-sm font-bold flex items-center gap-1"
        >
          Loncati <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

const SentenceLab = ({ context }: { context: string }) => {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/check-sentence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sentence: input, context })
      });
      const data = await res.json();
      setFeedback(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-emerald-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[5rem] -z-10"></div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-600">
             <Brain size={32} />
          </div>
          <div>
            <h3 className="font-display font-bold text-2xl text-emerald-900">Lab Kalimat AI</h3>
            <p className="text-emerald-500 text-xs font-medium">Asisten Linguistik Digital Anda</p>
          </div>
        </div>
        
        <p className="text-gray-500 mb-8 text-sm leading-relaxed">Tulis kalimat Bahasa Arab menggunakan kosa kata yang baru saja dipelajari. AI Tutor akan menganalisis tata bahasa dan memberikan masukan instan.</p>
        
        <div className="relative group">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tulis kalimatmu di sini... (Contoh: أَنَا تَعْبٌ)"
            className="w-full h-48 p-6 bg-emerald-50/30 border-2 border-emerald-100 rounded-3xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none text-3xl font-arabic mb-6 transition-all"
            dir="rtl"
          />
          <div className="absolute bottom-10 left-6 text-[10px] font-bold text-emerald-300 uppercase tracking-widest pointer-events-none group-focus-within:opacity-0 transition-opacity">Arabic Text Area</div>
        </div>

        <button 
          onClick={analyze}
          disabled={loading}
          className="w-full bg-emerald-900 text-amber-400 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-emerald-800 disabled:opacity-50 flex justify-center items-center gap-3 shadow-xl shadow-emerald-100 transition-all active:scale-95"
        >
          {loading ? (
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}><Brain size={20}/></motion.div>
          ) : <Brain size={20} />}
          {loading ? "Menganalisis..." : "Kirim ke AI Tutor"}
        </button>

        <AnimatePresence>
          {feedback && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className={`mt-10 p-8 rounded-3xl border-2 ${feedback.correct ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-xl ${feedback.correct ? 'bg-emerald-200 text-emerald-700' : 'bg-amber-200 text-amber-700'}`}>
                  {feedback.correct ? <CheckCircle2 size={24}/> : <Brain size={24}/>}
                </div>
                <span className="font-display font-bold text-xl text-emerald-900">{feedback.correct ? "Kalimat Sempurna!" : "Saran Perbaikan"}</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{feedback.feedback}</p>
              {feedback.correction && (
                <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm">
                  <p className="text-[10px] font-bold text-emerald-300 uppercase mb-2 tracking-widest">Koreksi:</p>
                  <p className="font-arabic font-bold text-3xl text-emerald-700 text-right leading-loose" dir="rtl">
                    {feedback.correction}
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const TranslationPractice = ({ mufrodat }: { mufrodat: MufrodatItem[] }) => {
  const [current, setCurrent] = useState<MufrodatItem | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const nextQuestion = () => {
    const target = mufrodat[Math.floor(Math.random() * mufrodat.length)];
    const others = mufrodat
      .filter(m => m.arabic !== target.arabic)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(m => m.indonesian);
    
    setCurrent(target);
    setOptions([target.indonesian, ...others].sort(() => 0.5 - Math.random()));
    setFeedback(null);
  };

  useEffect(() => {
    nextQuestion();
  }, [mufrodat]);

  const handleAnswer = (ans: string) => {
    if (ans === current?.indonesian) {
      setFeedback(true);
      setScore(s => s + 1);
      setTimeout(nextQuestion, 800);
    } else {
      setFeedback(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-12 text-center">
      <div className="mb-12 flex justify-center items-center gap-4">
        <span className="text-[10px] font-black text-emerald-700 bg-white border border-emerald-100 px-4 py-2 rounded-full uppercase tracking-widest shadow-sm">
           Poin Kognitif: <span className="text-amber-600">{score * 10}</span>
        </span>
      </div>
      
      <div className="mb-16">
        <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-[0.4em] mb-4 block">Apa arti kata ini?</span>
        <h3 className="text-8xl font-arabic font-bold text-emerald-900 drop-shadow-sm" dir="rtl">{current?.arabic}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {options.map((opt, i) => (
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            key={i}
            onClick={() => handleAnswer(opt)}
            className={`p-8 rounded-3xl border-2 font-display font-bold text-xl transition-all shadow-sm ${
              feedback && opt === current?.indonesian 
              ? 'bg-emerald-600 border-emerald-600 text-white shadow-emerald-200' 
              : feedback === false && opt !== current?.indonesian && 'opacity-60 grayscale'
            } ${
              !feedback ? 'bg-white border-emerald-50 text-emerald-900 hover:border-amber-400' : ''
            }`}
          >
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

const MultiplayerView = ({ mufrodat, sentences }: { mufrodat: MufrodatItem[], sentences?: SentenceTask[] }) => {
  const [gameStatus, setGameStatus] = useState<'waiting' | 'countdown' | 'playing' | 'ended'>('waiting');
  const [countdown, setCountdown] = useState(3);
  const [currentQuestion, setCurrentQuestion] = useState<any>(null);
  const [round, setRound] = useState(1);
  const [scores, setScores] = useState({ p1: 0, p2: 0 });
  const [winner, setWinner] = useState<string | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [scrambleTask, setScrambleTask] = useState<{ id: string, word: string }[]>([]);
  const [p1Selection, setP1Selection] = useState<{ id: string, word: string }[]>([]);
  const [p2Selection, setP2Selection] = useState<{ id: string, word: string }[]>([]);
  const [sessionQuestions, setSessionQuestions] = useState<any[]>([]);

  const generateSession = () => {
    const session = [];
    
    // Gabungkan semua mufrodat dari semua bab untuk pilihan jawaban pengecoh (distractors)
    const globalMufrodat = chapters.flatMap(c => c.mufrodat);
    
    // Pool lokal untuk soal (prioritas bab ini)
    let localMufrodatPool = [...mufrodat].sort(() => 0.5 - Math.random());
    let localSentencePool = (sentences && sentences.length > 0) ? [...sentences] : [...allSentences];
    localSentencePool.sort(() => 0.5 - Math.random());

    for (let i = 0; i < 10; i++) {
      const isScramble = i % 3 === 0;
      
      if (isScramble && localSentencePool.length > 0) {
        const s = localSentencePool.pop()!;
        session.push({ type: 'scramble', arabic: s.arabic, indonesian: s.indonesian });
      } else {
        // Jika pool mufrodat habis (karena bab hanya punya < 7 kata), reset pool
        if (localMufrodatPool.length === 0) {
          localMufrodatPool = [...mufrodat].sort(() => 0.5 - Math.random());
        }

        const target = localMufrodatPool.pop()!;
        
        // Ambil pengecoh dari pool global agar selalu berupa kata asli bahasa arab, bukan "Salah 1"
        const others = globalMufrodat
          .filter(m => m.indonesian !== target.indonesian)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map(m => m.indonesian);

        session.push({ 
          type: 'choice', 
          arabic: target.arabic, 
          indonesian: target.indonesian,
          options: [target.indonesian, ...others].sort(() => 0.5 - Math.random())
        });
      }
    }
    return session;
  };

  const setupQuestion = (q: any) => {
    if (!q) return; // Guard agar tidak crash
    setCurrentQuestion(q);
    setP1Selection([]);
    setP2Selection([]);
    if (q.type === 'choice') {
      setOptions(q.options || []);
    } else if (q.type === 'scramble') {
      const words = q.arabic.map((w: string, i: number) => ({ id: `q-${i}`, word: w }));
      setScrambleTask([...words].sort(() => 0.5 - Math.random()));
    }
  };

  const startNewGame = () => {
    const session = generateSession();
    setSessionQuestions(session);
    setGameStatus('countdown');
    setCountdown(3);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameStatus('playing');
          setupQuestion(session[0]);
          setRound(1);
          setScores({ p1: 0, p2: 0 });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const nextRound = (winnerSlot: number) => {
    const newScores = { ...scores };
    if (winnerSlot === 1) newScores.p1++;
    else newScores.p2++;
    setScores(newScores);

    if (round >= 10) {
      setWinner(newScores.p1 > newScores.p2 ? "Pemain 1" : (newScores.p2 > newScores.p1 ? "Pemain 2" : "Seri"));
      setGameStatus('ended');
    } else {
      setRound(round + 1);
      setupQuestion(sessionQuestions[round]);
    }
  };

  const handleChoice = (ans: string, player: 1 | 2) => {
    if (currentQuestion && ans === currentQuestion.indonesian) nextRound(player);
  };

  const handleScramble = (item: { id: string, word: string }, player: 1 | 2) => {
    if (!currentQuestion) return;
    if (player === 1) {
      const newSelection = [...p1Selection, item];
      setP1Selection(newSelection);
      if (newSelection.map(w => w.word).join(" ") === currentQuestion.arabic.join(" ")) {
        nextRound(1);
      }
    } else {
      const newSelection = [...p2Selection, item];
      setP2Selection(newSelection);
      if (currentQuestion && newSelection.map(w => w.word).join(" ") === currentQuestion.arabic.join(" ")) {
        nextRound(2);
      }
    }
  };

  const isFullscreen = gameStatus === 'playing' || gameStatus === 'countdown';

  return (
    <div className={`w-full max-w-5xl mx-auto py-4 ${isFullscreen ? 'fixed inset-0 z-[100] bg-emerald-950 p-0 max-w-none flex flex-col' : ''}`}>
      <div className={`bg-emerald-950 ring-8 ring-amber-400 p-0 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden flex flex-col ${isFullscreen ? 'flex-1 rounded-none ring-0' : 'min-h-[650px]'}`}>
        {gameStatus === 'waiting' && (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_15px_#fbbf24]"></div>
              <span className="text-sm text-emerald-300 font-bold uppercase tracking-[0.5em]">SMART BOARD LOCAL ARENA</span>
            </div>
            <h3 className="text-8xl font-display font-black mb-6 tracking-tighter text-white">DUEL ARAB</h3>
            <p className="text-emerald-400 mb-12 max-w-lg mx-auto text-xl leading-relaxed font-medium">
              Satu Layar, Dua Juara. Berlomba menebak mufrodat dan menyusun kalimat secepat mungkin!
            </p>
            
            <button 
              onClick={startNewGame}
              className="bg-amber-400 text-emerald-950 px-24 py-8 rounded-[3rem] font-black hover:bg-amber-300 transition-all shadow-[0_0_60px_rgba(251,191,36,0.3)] text-3xl active:scale-95"
            >
              MULAI DUEL 🔥
            </button>
          </div>
        )}

        {gameStatus === 'countdown' && (
          <div className="flex-1 flex flex-col items-center justify-center z-10">
            <motion.h1 
              key={countdown}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              className="text-[15rem] font-black text-amber-400 italic leading-none"
            >
              {countdown}
            </motion.h1>
          </div>
        )}

        {gameStatus === 'playing' && currentQuestion && (
          <div className="flex-1 flex flex-col overflow-hidden h-full">
            {/* Race Stats Bar */}
            <div className="h-16 bg-black/40 border-b-2 border-white/10 flex items-center px-12 relative overflow-hidden shrink-0">
               <div className="absolute bottom-0 left-0 w-full h-1.5 bg-emerald-900">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(round / 10) * 100}%` }}
                    className="h-full bg-amber-400"
                  />
               </div>
               <div className="flex-1 flex justify-between items-center z-10">
                  <div className="flex items-center gap-4 bg-emerald-600/20 px-5 py-2 rounded-xl border border-white/10">
                    <div className="text-left">
                      <p className="text-[8px] text-emerald-300 font-bold mb-0.5 tracking-widest">PLAYER 1</p>
                      <p className="text-3xl font-black text-white leading-none">{scores.p1}</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <span className="text-amber-400 font-black text-xl px-6 py-2 bg-white/5 rounded-full border-2 border-amber-400/30">RONDE {round} / 10</span>
                  </div>

                  <div className="flex items-center gap-4 bg-amber-600/20 px-5 py-2 rounded-xl border border-white/10">
                    <div className="text-right">
                      <p className="text-[8px] text-amber-300 font-bold mb-0.5 tracking-widest">PLAYER 2</p>
                      <p className="text-3xl font-black text-white leading-none">{scores.p2}</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Question Display (Middle) */}
            <div className="py-8 text-center bg-black/20 border-b border-white/5 shrink-0">
                {currentQuestion?.type === 'scramble' ? (
                  <>
                    <p className="text-emerald-300 text-sm font-bold uppercase tracking-[0.3em] mb-3">SUSUNLAH KALIMAT ARAB DARI:</p>
                    <h3 className="text-4xl font-display font-medium text-white italic">"{currentQuestion.indonesian}"</h3>
                  </>
                ) : (
                  <>
                    <p className="text-emerald-300 text-sm font-bold uppercase tracking-[0.3em] mb-4">APA ARTI KATA INI?</p>
                    <h3 className="text-8xl font-arabic font-bold text-amber-400 drop-shadow-2xl leading-none" dir="rtl">
                      {currentQuestion.arabic}
                    </h3>
                  </>
                )}
            </div>

            {/* Split Screen Play Areas */}
            <div className="flex-1 grid grid-cols-2 divide-x-4 divide-amber-400/40 overflow-hidden">
              {/* Player 1 Section */}
              <div className="p-8 bg-emerald-900/10 flex flex-col justify-center overflow-hidden">
                {currentQuestion?.type === 'choice' ? (
                  <div className="grid grid-cols-2 gap-3">
                    {options.map((opt, i) => (
                      <button 
                        key={i}
                        onClick={() => handleChoice(opt, 1)}
                        className="p-4 rounded-xl bg-white/5 border-2 border-white/10 hover:bg-emerald-600 hover:scale-[1.02] font-display font-bold text-lg transition-all active:scale-95"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-6" dir="rtl">
                    <div className="flex flex-wrap gap-2 justify-center bg-emerald-950 p-4 rounded-2xl min-h-[80px] border border-white/10 shadow-inner">
                      {p1Selection.map((s, i) => <motion.span layout key={i} className="bg-emerald-600 px-4 py-1.5 rounded-lg font-arabic font-bold text-xl text-white shadow-lg">{s.word}</motion.span>)}
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {scrambleTask.filter(t => !p1Selection.some(ps => ps.id === t.id)).map((item) => (
                        <button 
                          key={item.id}
                          onClick={() => handleScramble(item, 1)}
                          className="bg-white/10 p-4 rounded-xl font-arabic font-bold text-2xl hover:bg-white hover:text-emerald-950 transition-all"
                        >
                          {item.word}
                        </button>
                      ))}
                    </div>
                    <button onClick={() => setP1Selection([])} className="text-[10px] uppercase font-bold text-emerald-500 hover:text-emerald-300">Reset Kalimat</button>
                  </div>
                )}
              </div>

              {/* Player 2 Section */}
              <div className="p-8 bg-emerald-900/10 flex flex-col justify-center overflow-hidden">
                {currentQuestion?.type === 'choice' ? (
                  <div className="grid grid-cols-2 gap-3">
                    {options.map((opt, i) => (
                      <button 
                        key={i}
                        onClick={() => handleChoice(opt, 2)}
                        className="p-4 rounded-xl bg-white/5 border-2 border-white/10 hover:bg-amber-600 hover:scale-[1.02] font-display font-bold text-lg transition-all active:scale-95"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-6" dir="rtl">
                    <div className="flex flex-wrap gap-2 justify-center bg-emerald-950 p-4 rounded-2xl min-h-[80px] border border-white/10 shadow-inner">
                      {p2Selection.map((s, i) => <motion.span layout key={i} className="bg-amber-600 px-4 py-1.5 rounded-lg font-arabic font-bold text-xl text-white shadow-lg">{s.word}</motion.span>)}
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {scrambleTask.filter(t => !p2Selection.some(ps => ps.id === t.id)).map((item) => (
                        <button 
                          key={item.id}
                          onClick={() => handleScramble(item, 2)}
                          className="bg-white/10 p-4 rounded-xl font-arabic font-bold text-2xl hover:bg-white hover:text-emerald-950 transition-all"
                        >
                          {item.word}
                        </button>
                      ))}
                    </div>
                    <button onClick={() => setP2Selection([])} className="text-[10px] uppercase font-bold text-emerald-500 hover:text-emerald-300">Reset Kalimat</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {gameStatus === 'ended' && (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center z-10 animate-in zoom-in duration-500">
             <div className="w-32 h-32 bg-amber-400 rounded-full flex items-center justify-center mb-10 shadow-[0_0_60px_#fbbf24]">
                <CheckCircle2 size={72} className="text-emerald-950" />
             </div>
             <h2 className="text-7xl font-display font-black mb-4 tracking-tighter">FINISH!</h2>
             <p className="text-5xl font-bold text-amber-400 mb-12">{winner.toUpperCase()} MENANG MUTLAK! 🏆</p>
             
             <div className="flex gap-20 mb-16">
               <div className="text-center">
                 <p className="text-xs font-bold text-emerald-400 mb-2">P1 SCORE</p>
                 <p className="text-7xl font-black">{scores.p1}</p>
               </div>
               <div className="text-center">
                 <p className="text-xs font-bold text-emerald-400 mb-2">P2 SCORE</p>
                 <p className="text-7xl font-black">{scores.p2}</p>
               </div>
             </div>
             
             <button 
               onClick={() => setGameStatus('waiting')}
               className="bg-white text-emerald-950 px-24 py-6 rounded-2xl font-black hover:bg-emerald-50 transition-all shadow-xl text-2xl active:scale-95"
             >
               MAIN LAGI DI SMART BOARD
             </button>
          </div>
        )}

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent)] pointer-events-none"></div>
      </div>
    </div>
  );
};


// --- Main App ---

export default function App() {
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [activeTab, setActiveTab] = useState<'theory' | 'learn' | 'scramble' | 'lab' | 'translate' | 'multiplayer'>('theory');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (currentChapter) {
      if (currentChapter.materials && currentChapter.materials.length > 0) {
        setActiveTab('theory');
      } else {
        setActiveTab('learn');
      }
    }
  }, [currentChapter]);

  return (
    <div className="min-h-screen bg-emerald-50 font-sans text-gray-900 selection:bg-amber-200 selection:text-amber-900 flex">
      <Sidebar 
        onChapterSelect={(c) => { setCurrentChapter(c); }} 
        activeChapterId={currentChapter?.id} 
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        <Navbar onHome={() => setCurrentChapter(null)} chapterTitle={currentChapter?.title} />

        <main className="p-4 md:p-8 flex-1">
          {!currentChapter ? (
            <div className="py-8">
              <header className="mb-16 text-center max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-block bg-white text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-widest uppercase border border-emerald-100 shadow-sm"
                >
                  An-Najah Al-Arabi Platform
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-[1.1] text-emerald-900"
                >
                  Kuasai Bahasa Arab <br /> <span className="text-emerald-600">Interaktif & Menyenangkan.</span>
                </motion.h1>
                <p className="text-emerald-700/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  Kurikulum Nahwu & Shorof Terintegrasi dengan Lab AI dan Arena Duel Smart Board.
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {chapters.map((chapter) => (
                  <div key={chapter.id}>
                    <ChapterCard chapter={chapter} onClick={() => setCurrentChapter(chapter)} />
                  </div>
                ))}
              </div>
              
              <div className="mt-20 bg-white/50 backdrop-blur rounded-3xl p-6 border border-emerald-100 flex items-center justify-between max-w-4xl mx-auto">
                <div className="flex items-center gap-4">
                   <div className="p-3 bg-emerald-900 rounded-2xl">
                     <code className="text-xs text-emerald-400 font-mono">JSON &#123; curriculum: "Expanded" &#125;</code>
                   </div>
                   <p className="text-emerald-800 text-sm font-bold">Materi Nahwu (Mubtada, Khobar, Fi'il, Amil) telah ditambahkan ke sistem.</p>
                </div>
                <button className="text-emerald-600 text-xs font-bold underline hover:text-emerald-800 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>MULAI BELAJAR</button>
              </div>
            </div>
          ) : (
            <div className="py-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-12 gap-6 mb-12">
                <section className="col-span-12 lg:col-span-8 bg-white rounded-[2rem] p-8 shadow-sm border border-emerald-100 flex flex-col min-h-[220px]">
                  <div className="flex justify-between items-start mb-6">
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Ringkasan Materi</span>
                    <span className="text-emerald-400 text-xs font-mono">Bab {currentChapter.id}</span>
                  </div>
                  <h3 className="text-3xl text-emerald-900 font-bold mb-4">{currentChapter.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base mb-6">{currentChapter.description}</p>
                  
                  <div className="mt-auto bg-emerald-50 rounded-2xl p-5 border-l-4 border-emerald-500 flex justify-between items-center">
                    <p className="text-emerald-600 text-sm italic font-medium">Fokus Utama:</p>
                    <p className="text-emerald-900 font-bold text-lg">{currentChapter.materials ? "Teori & Praktek Kalimat" : "Penguasaan Kosakata"}</p>
                  </div>
                </section>

                <section className="col-span-12 lg:col-span-4 bg-amber-400 rounded-[2rem] p-8 shadow-lg transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-amber-900 font-black text-2xl tracking-tighter italic">STATUS BELAJAR</h3>
                    <div className="bg-amber-900/10 px-3 py-1 rounded-full text-amber-900 text-[10px] font-bold uppercase tracking-widest">Active</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 aspect-[4/3] flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-[10px] font-bold text-amber-200">KURSUS NAHWU</div>
                    <ScrollText size={48} className="text-emerald-600 mb-4" />
                    <h4 className="text-xl font-bold text-emerald-900 mb-2">{currentChapter.materials?.length || 0} Materi Teori</h4>
                    <p className="text-emerald-500 font-medium text-xs tracking-wide">Tersedia untuk Bab ini</p>
                    <button 
                      onClick={() => setActiveTab('theory')}
                      className="mt-8 bg-amber-400 text-amber-900 font-bold text-[10px] uppercase tracking-widest px-6 py-2 rounded-full hover:bg-amber-500 transition-colors"
                    >
                      Baca Materi
                    </button>
                  </div>
                </section>
              </div>

              <div className="flex bg-white/50 backdrop-blur p-1.5 rounded-2xl border border-emerald-100 shadow-sm mb-8 overflow-x-auto no-scrollbar gap-2 max-w-fit">
                {[
                  { id: 'theory', label: 'Materi', icon: <ScrollText size={16}/> },
                  { id: 'learn', label: 'Hafalan', icon: <GraduationCap size={16}/> },
                  { id: 'scramble', label: 'Susun Kata', icon: <Gamepad2 size={16}/> },
                  { id: 'translate', label: 'Terjemah', icon: <Languages size={16}/> },
                  { id: 'lab', label: 'Sentence AI', icon: <Brain size={16}/> },
                  { id: 'multiplayer', label: 'Multiplayer', icon: <Gamepad2 size={16}/> },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all text-sm whitespace-nowrap ${
                      activeTab === tab.id 
                      ? 'bg-emerald-600 text-white shadow-lg' 
                      : 'text-emerald-700 hover:bg-emerald-100/50'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2.5rem] p-8 border border-emerald-100 shadow-sm min-h-[500px]"
              >
                {activeTab === 'theory' && <MaterialView materials={currentChapter.materials || []} />}
                {activeTab === 'learn' && <Flashcard mufrodat={currentChapter.mufrodat} />}
                {activeTab === 'scramble' && <ScrambledExercise sentences={currentChapter.sentences} />}
                {activeTab === 'translate' && <TranslationPractice mufrodat={currentChapter.mufrodat} />}
                {activeTab === 'lab' && <SentenceLab context={currentChapter.title + ": " + currentChapter.description} />}
                {activeTab === 'multiplayer' && <MultiplayerView mufrodat={currentChapter.mufrodat} sentences={currentChapter.sentences} />}
              </motion.div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

