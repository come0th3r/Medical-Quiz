import React, { useState } from 'react';
import {Button} from "@mui/material";


const Question = ({ question, onAnswer }) => {
    const [submitted, setSubmitted] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (index) => {
        if (submitted) {
            return;
        }
        setSelectedOption(index);
        const isCorrect = index === question.correct_answer;
        onAnswer(isCorrect);
        setSubmitted(true);
    };

    const getOptionStyle = (index) => {
        if (!submitted) {
            return;
        }
        if (index === question.correct_answer) {
            return { backgroundColor: 'green', color: 'white' };
        }
        if (index === selectedOption && index !== question.correct_answer) {
            return { backgroundColor: 'red', color: 'white' };
        }
    };

    return (
        <div>
            <h2>{question.question}</h2>
            <div>
                {question.options.map((option, index) => (
                    <div key={index}>
                        <Button
                            variant="outlined"
                            className="optBtn"
                            style={getOptionStyle(index)}
                            onClick={() => handleOptionClick(index)}
                            disabled={submitted}
                        >
                            {option}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question;
