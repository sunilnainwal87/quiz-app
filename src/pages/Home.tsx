import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="container">
        <div className="hero-section">
          <h1>🎯 Quiz Challenge</h1>
          <p className="tagline">Test your knowledge across multiple subjects!</p>
          
          <div className="features">
            <div className="feature-card">
              <span className="feature-icon">📝</span>
              <h3>20 Questions</h3>
              <p>Each subject has 20 challenging questions</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⏱️</span>
              <h3>Timed Challenge</h3>
              <p>Race against the clock for the best score</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🏆</span>
              <h3>Leaderboard</h3>
              <p>Compete with others and track your progress</p>
            </div>
          </div>

          <div className="instructions">
            <h2>How to Play</h2>
            <ol>
              <li>Enter your name to get started</li>
              <li>Choose a subject: Math, Science, Geography, or English</li>
              <li>Answer 20 questions as quickly as possible</li>
              <li>Submit your answers and see your score</li>
              <li>Check the leaderboard to see how you rank!</li>
            </ol>
          </div>

          <button
            className="btn btn-primary btn-large"
            onClick={() => navigate('/quiz-challenge')}
          >
            Start Quiz Challenge
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
