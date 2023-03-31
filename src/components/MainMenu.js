import React, { useState } from 'react';

const MainMenu = ({ onStartQuiz, onLeaderboard }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        { value: 'cardiology', label: 'Кардиология' },
        { value: 'pulmonology', label: 'Пульмонология' },
        // добавьте другие категории при необходимости
    ];

    const startQuiz = () => {
        if (selectedCategory) {
            onStartQuiz(selectedCategory);
        } else {
            alert('Пожалуйста, выберите тему');
        }
    };

    return (
        <div>
            <h1>Тренажер для врачей</h1>
            <div>
                <label htmlFor="category-select">Выберите тему:</label>
                <select
                    id="category-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">--Выберите тему--</option>
                    {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                            {category.label}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={startQuiz}>Начать тест</button>
            <button onClick={onLeaderboard}>Рейтинг игроков</button>
        </div>
    );
};

export default MainMenu;
