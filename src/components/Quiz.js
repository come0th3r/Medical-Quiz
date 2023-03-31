import React, { useState, useEffect } from 'react';
import Question from './Question';
import questionsData from '../data/questions.json';

const Quiz = ({ category, onMainMenu }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const filteredQuestions = questionsData.questions.filter(
            (question) => question.category === category
        );
        setQuestions(filteredQuestions);
    }, [category]);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert(`Тест завершен! Ваш результат: ${score + (isCorrect ? 1 : 0)} из ${questions.length}`);
            onMainMenu();
        }
    };

    return (
        <div>
            {questions.length > 0 && (
                <Question
                    question={questions[currentQuestionIndex]}
                    onAnswer={handleAnswer}
                />
            )}
            <button onClick={onMainMenu}>Вернуться в главное меню</button>
        </div>
    );
};

export default Quiz;
