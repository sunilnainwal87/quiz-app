import { useState, FormEvent } from 'react';
import '../styles/UserNameInput.css';

interface UserNameInputProps {
  onNameSubmit: (name: string) => void;
}

function UserNameInput({ onNameSubmit }: UserNameInputProps) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (name.trim().length < 2) {
      setError('Name must be at least 2 characters');
      return;
    }
    
    if (name.trim().length > 20) {
      setError('Name must be at most 20 characters');
      return;
    }
    
    setError('');
    onNameSubmit(name.trim());
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Welcome to Quiz Challenge!</h2>
        <p className="modal-description">Enter your name to get started</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="name-input"
              autoFocus
              aria-label="Player name"
              aria-required="true"
            />
            {error && <p className="error-text">{error}</p>}
          </div>
          <button type="submit" className="btn btn-primary">
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserNameInput;
