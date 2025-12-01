
export enum AppMode {
  HOME = 'HOME',
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
  KAHOOT = 'KAHOOT',
  SPEAKING = 'SPEAKING'
}

export enum TTTStage {
  TEST1 = 'DISCOVERY',
  TEACH = 'LEARN',
  TEST2 = 'BOSS_BATTLE'
}

export interface ContentItem {
  id: string;
  en: string;
  ru: string;
  uz: string; // Added Uzbek
  type: 'definition' | 'example' | 'rule' | 'warning';
  image?: string; // Emoji
  highlight?: string[]; // Words to highlight (particles)
  interactiveTarget?: string; // The word user must click to advance
}

export interface LessonSection {
  title: string;
  subtitle: string;
  content: ContentItem[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  explanationRu: string;
  explanationUz: string;
}

export interface SpeakingQuestion {
  id: string;
  category: 'Daily Routine' | 'Free Time' | 'Sports' | 'Video Games' | 'Reading' | 'Fun';
  question: string;
  targetVerb: {
    en: string;
    ru: string;
    uz: string;
  };
  modelAnswer: {
    answer: string;
    reason: string;
    example: string;
  };
}

export interface Achievement {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface BossState {
  name: string;
  hp: number;
  maxHp: number;
  avatar: string;
}

export interface AppState {
  mode: AppMode;
  isDark: boolean;
  showRussian: boolean;
  showUzbek: boolean; // Added Uzbek toggle
  score: number;
  xp: number;
  level: number;
  gems: number;
  streak: number;
  currentLessonIndex: number;
  tttStage: TTTStage;
  achievements: string[]; // IDs of unlocked achievements
  boss: BossState;
}

export interface DiscoveryPair {
  id: string;
  verb: string;
  meaning: string;
  meaningRu: string;
  meaningUz: string;
}