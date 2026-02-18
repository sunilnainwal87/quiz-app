import { useState, useEffect } from 'react';
import { Question } from '../types';
import '../styles/ChallengeQuiz.css';

interface ChallengeQuizProps {
  questions: Question[];
  playerName: string;
  onComplete: (answers: number[], timeTaken: number) => void;
}

function ChallengeQuiz({ questions, playerName, onComplete }: ChallengeQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    onComplete(answers, timeTaken);
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const question = questions[currentQuestion];

  return (
    <div className="challenge-quiz">
      <div className="quiz-header">
        <div className="quiz-info">
          <h3>{playerName}'s Quiz</h3>
          <p className="question-counter">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>
        <div className="timer" aria-live="polite" aria-atomic="true">
          ⏱️ {formatTime(elapsedTime)}
        </div>
      </div>

      <div className="question-section">
        <h2 className="question-text">{question.question}</h2>
        <div className="options-grid">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${answers[currentQuestion] === index ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(index)}
              aria-label={`Option ${index + 1}: ${option}`}
              aria-pressed={answers[currentQuestion] === index}
            >
              <span className="option-letter">{String.fromCharCode(65 + index)}</span>
              <span className="option-text">{option}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="quiz-navigation">
        <button
          className="btn btn-secondary"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          ← Previous
        </button>
        <div className="progress-indicators">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${answers[index] !== -1 ? 'answered' : ''} ${index === currentQuestion ? 'current' : ''}`}
              title={`Question ${index + 1}${answers[index] !== -1 ? ' (answered)' : ''}`}
            />
          ))}
        </div>
        {isLastQuestion ? (
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit Quiz →
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={handleNext}
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}

export default ChallengeQuiz;
