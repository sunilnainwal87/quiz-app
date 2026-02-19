export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  subject: 'Math' | 'Science' | 'Geography' | 'English' | 'Gymnastics';
  explanation?: string;
}

export interface LeaderboardEntry {
  playerName: string;
  score: number;
  totalQuestions: number;
  timeTaken: number;
  subject: string;
  timestamp: string;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  timeTaken: number;
  subject: string;
  correctAnswers?: number;
  wrongAnswers?: number;
  questions?: Question[];
  userAnswers?: number[];
}
