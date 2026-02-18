import { LeaderboardEntry } from '../types';

const LEADERBOARD_KEY = 'quiz-challenge-leaderboard';

export const saveLeaderboardEntry = (entry: LeaderboardEntry): void => {
  try {
    const existingEntries = getLeaderboard();
    const updatedEntries = [...existingEntries, entry];
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(updatedEntries));
  } catch (error) {
    console.error('Error saving to leaderboard:', error);
  }
};

export const getLeaderboard = (): LeaderboardEntry[] => {
  try {
    const data = localStorage.getItem(LEADERBOARD_KEY);
    if (!data) return [];
    return JSON.parse(data) as LeaderboardEntry[];
  } catch (error) {
    console.error('Error reading leaderboard:', error);
    return [];
  }
};

export const getLeaderboardBySubject = (subject: string): LeaderboardEntry[] => {
  const allEntries = getLeaderboard();
  if (subject === 'All') return allEntries;
  return allEntries.filter(entry => entry.subject === subject);
};
