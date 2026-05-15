export interface MufrodatItem {
  arabic: string;
  indonesian: string;
  type: 'sifat' | 'benda' | 'kerja' | 'huruf' | 'zaman' | 'makan';
}

export interface Pronoun {
  arabic: string;
  indonesian: string;
}

export interface SentenceTask {
  arabic: string[];
  indonesian: string;
}

export interface Material {
  title: string;
  content: string;
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  mufrodat: MufrodatItem[];
  pronouns?: Pronoun[];
  sentences?: SentenceTask[];
  materials?: Material[];
}
