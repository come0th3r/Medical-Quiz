import React, { useState } from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import Leaderboard from './components/Leaderboard';

function App() {
    const [page, setPage] = useState('mainMenu');
    const [category, setCategory] = useState(null);

    const startQuiz = (selectedCategory) => {
        setCategory(selectedCategory);
        setPage('quiz');
    };

    const showLeaderboard = () => {
        setPage('leaderboard');
    };

    const showMainMenu = () => {
        setPage('mainMenu');
    };

    return (
        <div className="App">
            {page === 'mainMenu' && (
                <MainMenu
                    onStartQuiz={startQuiz}
                    onLeaderboard={showLeaderboard}
                />
            )}

            {page === 'quiz' && category && (
                <Quiz
                    category={category}
                    onMainMenu={showMainMenu}
                />
            )}

            {page === 'leaderboard' && (
                <Leaderboard
                    onMainMenu={showMainMenu}
                />
            )}
        </div>
    );
}

export default App;
