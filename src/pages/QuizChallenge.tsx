import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserNameInput from '../components/UserNameInput';
import SubjectSelection from '../components/SubjectSelection';
import ChallengeQuiz from '../components/ChallengeQuiz';
import { challengeQuizzes } from '../data/challengeQuizzes';
import { saveLeaderboardEntry } from '../utils/localStorage';
import { Question } from '../types';
import '../styles/QuizChallenge.css';

type QuizStep = 'name' | 'subject' | 'quiz';

function QuizChallenge() {
  const navigate = useNavigate();
  const [step, setStep] = useState<QuizStep>('name');
  const [playerName, setPlayerName] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);

  const handleNameSubmit = (name: string) => {
    setPlayerName(name);
    setStep('subject');
  };

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    const questions = challengeQuizzes.filter(q => q.subject === subject);
    setQuizQuestions(questions);
    setStep('quiz');
  };

  const handleQuizComplete = (answers: number[], timeTaken: number) => {
    let score = 0;
    quizQuestions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        score++;
      }
    });

    const entry = {
      playerName,
      score,
      totalQuestions: quizQuestions.length,
      timeTaken,
      subject: selectedSubject,
      timestamp: new Date().toISOString()
    };

    saveLeaderboardEntry(entry);

    navigate('/results', {
      state: entry
    });
  };

  return (
    <div className="quiz-challenge-page">
      <div className="container">
        {step === 'name' && (
          <UserNameInput onNameSubmit={handleNameSubmit} />
        )}
        
        {step === 'subject' && (
          <div className="card">
            <SubjectSelection
              onSubjectSelect={handleSubjectSelect}
              playerName={playerName}
            />
          </div>
        )}
        
        {step === 'quiz' && (
          <div className="card">
            <ChallengeQuiz
              questions={quizQuestions}
              playerName={playerName}
              onComplete={handleQuizComplete}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizChallenge;
