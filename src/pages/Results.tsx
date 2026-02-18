import { useNavigate, useLocation } from 'react-router-dom';
import { QuizResult } from '../types';
import Leaderboard from '../components/Leaderboard';
import '../styles/Results.css';

function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state as QuizResult & { playerName: string };

  if (!result) {
    navigate('/quiz-challenge');
    return null;
  }

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const percentage = Math.round((result.score / result.totalQuestions) * 100);
  let message = '';
  let emoji = '';

  if (percentage === 100) {
    message = 'Perfect Score! 🎉';
    emoji = '🌟';
  } else if (percentage >= 80) {
    message = 'Excellent Work!';
    emoji = '🎉';
  } else if (percentage >= 60) {
    message = 'Good Job!';
    emoji = '👏';
  } else if (percentage >= 40) {
    message = 'Keep Practicing!';
    emoji = '💪';
  } else {
    message = 'Try Again!';
    emoji = '📚';
  }

  return (
    <div className="results-page">
      <div className="container">
        <div className="results-card card">
          <div className="results-emoji">{emoji}</div>
          <h1>{message}</h1>
          <h2 className="player-name">{result.playerName}</h2>
          
          <div className="results-stats">
            <div className="stat">
              <div className="stat-label">Score</div>
              <div className="stat-value">
                {result.score}/{result.totalQuestions}
              </div>
              <div className="stat-subtext">{percentage}% correct</div>
            </div>
            
            <div className="stat">
              <div className="stat-label">Time</div>
              <div className="stat-value">{formatTime(result.timeTaken)}</div>
              <div className="stat-subtext">Total time</div>
            </div>
            
            <div className="stat">
              <div className="stat-label">Subject</div>
              <div className="stat-value">{result.subject}</div>
              <div className="stat-subtext">Quiz category</div>
            </div>
          </div>

          <div className="results-actions">
            <button
              className="btn btn-primary"
              onClick={() => navigate('/quiz-challenge')}
            >
              Try Another Subject
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => navigate('/')}
            >
              Home
            </button>
          </div>
        </div>

        <Leaderboard
          currentPlayer={result.playerName}
          highlightSubject={result.subject}
        />
      </div>
    </div>
  );
}

export default Results;
