# Quiz Challenge App

A competitive quiz application built with React, TypeScript, and Vite. Test your knowledge across multiple subjects, compete on the leaderboard, and track your progress!

## 🎯 Features

- **Multiple Subjects**: Choose from Math, Science, Geography, or English
- **20 Questions Per Subject**: Comprehensive quiz challenges
- **Live Timer**: Track your completion time in real-time
- **Leaderboard**: Compete with other players and see your ranking
- **Persistent Storage**: Your scores are saved locally
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Accessible**: Built with ARIA labels and keyboard navigation support

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sunilnainwal87/quiz-app.git
cd quiz-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📖 How to Play

1. Visit `/quiz-challenge` to start
2. Enter your name (2-20 characters)
3. Select a subject: Math, Science, Geography, or English
4. Answer 20 questions as quickly as possible
5. Submit your answers to see your score
6. Check the leaderboard to see how you rank!

## 🏗️ Project Structure

```
quiz-app/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── ChallengeQuiz.tsx
│   │   ├── Leaderboard.tsx
│   │   ├── SubjectSelection.tsx
│   │   └── UserNameInput.tsx
│   ├── pages/              # Page components
│   │   ├── Home.tsx
│   │   ├── QuizChallenge.tsx
│   │   └── Results.tsx
│   ├── data/               # Quiz questions data
│   │   └── challengeQuizzes.ts
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/              # Utility functions
│   │   └── localStorage.ts
│   ├── styles/             # Component-specific CSS
│   ├── App.tsx             # Main app component with routing
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

## 🎨 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Modern styling with CSS variables

## 📝 Quiz Content

The app includes 80 carefully crafted questions:
- **Math**: Algebra, geometry, arithmetic, word problems
- **Science**: Biology, chemistry, physics, earth science
- **Geography**: Countries, capitals, landmarks, continents
- **English**: Grammar, vocabulary, literature, comprehension

### 🔄 Automated Daily Updates

The quiz questions are automatically refreshed daily at 2:00 AM UTC through a GitHub Actions workflow. This ensures:
- **Fresh content**: 20 new questions added every day across all categories
- **Category of the Day**: Special daily category to keep content interesting
- **Continuous learning**: Kids get new questions to keep them engaged

The automation runs through the `RefreshQuestions` custom agent, which can also be triggered manually from the GitHub Actions tab.

## 🏆 Leaderboard

- View top 10 players
- Filter by subject or view all subjects
- Sorted by score (descending), then time (ascending)
- Your entry is highlighted when displayed

## 🔒 Privacy

All data is stored locally in your browser's localStorage. No data is sent to external servers.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

Created by sunilnainwal87