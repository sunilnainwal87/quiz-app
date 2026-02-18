import { useState, useEffect } from 'react';
import { LeaderboardEntry } from '../types';
import { getLeaderboardBySubject } from '../utils/localStorage';
import '../styles/Leaderboard.css';

interface LeaderboardProps {
  currentPlayer?: string;
  highlightSubject?: string;
}

function Leaderboard({ currentPlayer, highlightSubject }: LeaderboardProps) {
  const [filter, setFilter] = useState(highlightSubject || 'All');
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const loadEntries = (subject: string) => {
      const allEntries = getLeaderboardBySubject(subject);
      
      // Sort by score (descending), then by time (ascending)
      const sorted = allEntries.sort((a, b) => {
        if (b.score !== a.score) {
          return b.score - a.score;
        }
        return a.timeTaken - b.timeTaken;
      });
      
      // Take top 10
      setEntries(sorted.slice(0, 10));
    };

    loadEntries(filter);
  }, [filter]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <h2>🏆 Leaderboard</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
          aria-label="Filter leaderboard by subject"
        >
          <option value="All">All Subjects</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="Geography">Geography</option>
          <option value="English">English</option>
        </select>
      </div>

      {entries.length === 0 ? (
        <p className="no-entries">No entries yet. Be the first!</p>
      ) : (
        <div className="leaderboard-table">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Player</th>
                <th>Score</th>
                <th>Time</th>
                <th>Subject</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr
                  key={`${entry.playerName}-${entry.timestamp}`}
                  className={entry.playerName === currentPlayer ? 'highlight' : ''}
                >
                  <td className="rank">
                    {index === 0 && '🥇'}
                    {index === 1 && '🥈'}
                    {index === 2 && '🥉'}
                    {index > 2 && (index + 1)}
                  </td>
                  <td className="player-name">{entry.playerName}</td>
                  <td className="score">
                    {entry.score}/{entry.totalQuestions}
                  </td>
                  <td className="time">{formatTime(entry.timeTaken)}</td>
                  <td className="subject">{entry.subject}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
