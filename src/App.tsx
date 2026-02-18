import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuizChallenge from './pages/QuizChallenge';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz-challenge" element={<QuizChallenge />} />
      </Routes>
    </Router>
  );
}

export default App;
