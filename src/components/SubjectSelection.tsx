import '../styles/SubjectSelection.css';

interface SubjectSelectionProps {
  onSubjectSelect: (subject: string) => void;
  playerName: string;
}

function SubjectSelection({ onSubjectSelect, playerName }: SubjectSelectionProps) {
  const subjects = [
    { name: 'Math', icon: '🔢', color: '#3b82f6' },
    { name: 'Science', icon: '🔬', color: '#10b981' },
    { name: 'Geography', icon: '🌍', color: '#f59e0b' },
    { name: 'English', icon: '📚', color: '#8b5cf6' },
    { name: 'Gymnastics', icon: '🤸‍♀️', color: '#ec4899' }
  ];

  return (
    <div className="subject-selection">
      <h2>Welcome, {playerName}!</h2>
      <p className="subtitle">Choose a subject to begin your challenge</p>
      <div className="subjects-grid">
        {subjects.map((subject) => (
          <button
            key={subject.name}
            className="subject-card"
            onClick={() => onSubjectSelect(subject.name)}
            style={{ borderColor: subject.color }}
            aria-label={`Select ${subject.name} quiz`}
          >
            <div className="subject-icon" style={{ color: subject.color }}>
              {subject.icon}
            </div>
            <h3>{subject.name}</h3>
            <p className="subject-info">20 Questions</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SubjectSelection;
