import React, { useState, useEffect } from 'react';
import Question from './Question';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css";
import "swiper/css/effect-cards";
import "../styles.css";
import { EffectCards, Keyboard } from "swiper";
import questionsData from '../data/questions.json';
import {Box} from "@mui/material";

const Quiz = ({ category, onMainMenu }) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const filteredQuestions = questionsData.questions.filter(
            (question) => question.category === category
        );
        setQuestions(filteredQuestions);
    }, [category]);

    const handleAnswer = (index, isCorrect) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].isAnswered = true;
        updatedQuestions[index].isCorrect = isCorrect;
        setQuestions(updatedQuestions);
    };

    const allAnswered = questions.every((question) => question.isAnswered);

    return (
        <Box container alignContent="center">
            <Swiper
            effect={"cards"}
            modules={[EffectCards, Keyboard]}
            className="mySwiper"
            keyboard={{
                enabled: true,
            }}
            pagination={{
                clickable: true,
            }}
        >

            {questions.map((question, index) => (
                <SwiperSlide>
                <Question
                    key={index}
                    question={question}
                    onAnswer={(isCorrect) => handleAnswer(index, isCorrect)}
                />
                </SwiperSlide>
            ))}

            {allAnswered && (
                <div>
                    <p>
                        Тест завершен! Ваш результат: {questions.filter((question) => question.isCorrect).length} из {questions.length}
                    </p>
                    <button onClick={onMainMenu}>Вернуться в главное меню</button>
                </div>
            )}
            </Swiper>
        </Box>
    );
};

export default Quiz;
