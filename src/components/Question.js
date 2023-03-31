import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedOption === null) {
            alert('Пожалуйста, выберите ответ');
            return;
        }
        const isCorrect = selectedOption === question.correct_answer;
        onAnswer(isCorrect);
        setSelectedOption(null);
    };

    return (
        <div>
            <h2>{question.question}</h2>
            <form onSubmit={handleSubmit}>
                {question.options.map((option, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            id={`option-${index}`}
                            name="answer"
                            value={index}
                            checked={selectedOption === index}
                            onChange={() => setSelectedOption(index)}
                        />
                        <label htmlFor={`option-${index}`}>{option}</label>
                    </div>
                ))}
                <button type="submit">Ответить</button>
            </form>
        </div>
    );
};

export default Question;
