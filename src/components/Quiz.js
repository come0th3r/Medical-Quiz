import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Question from './Question';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css";
import "swiper/css/effect-cards";
import "../styles.css";
import { EffectCards, Keyboard, Navigation } from "swiper";
import questionsData from '../data/questions.json';
import { Box } from "@mui/material";
import appleColorEmoji from 'https://cdn.jsdelivr.net/npm/apple-color-emoji@1.0.1/+esm'

const Quiz = () => {
    const navigate = useNavigate();
    const { category } = useParams();

    const [questions, setQuestions] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        const filteredQuestions = questionsData.questions.filter(
            (question) => question.category === category
        );
        setQuestions(filteredQuestions);
    }, [category]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleAnswer = (index, isCorrect) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].isAnswered = true;
        updatedQuestions[index].isCorrect = isCorrect;
        setQuestions(updatedQuestions);

        const allAnswered = updatedQuestions.every((question) => question.isAnswered);
        if (allAnswered) {
            setShowResults(true);
        }
    };

    const resultStyles = {
        opacity: showResults ? 1 : 0,
        transform: showResults ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'all 1s ease',
    };

    const swiperContainerStyles = {
        transform: showResults ? 'translateY(-40px)' : 'translateY(0)',
        transition: 'transform 1s ease',
    };

    return (
        <Box className={"quizGame"} display="flex" alignItems="center" justifyContent="center">
            <Box container flexDirection="column" style={{height:"85hv"}}>
                <Box style={swiperContainerStyles}>
                    <Swiper
                        effect={"cards"}
                        modules={[EffectCards, Keyboard, Navigation]}
                        className="mySwiper"
                        keyboard={{
                            enabled: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={isMobile ? {
                            prevEl: ".swiper-button-prev",
                            nextEl: ".swiper-button-next",
                        } : {}}
                    >
                        {questions.map((question, index) => (
                            <SwiperSlide>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    height="100%"
                                >
                                    <Question
                                        key={index}
                                        question={question}
                                        onAnswer={(isCorrect) => handleAnswer(index, isCorrect)}
                                    />
                                </Box>
                            </SwiperSlide>
                        ))}
                        {showResults && (
                            <div>
                                <p>
                                    Тест завершен! Ваш результат: {questions.filter((question) => question.isCorrect).length} из {questions.length}
                                </p>
                                <button onClick={() => navigate('/')}>Вернуться в главное меню 🏠</button>
                            </div>
                        )}
                    </Swiper>
                </Box>
                <Box style={resultStyles}>

                </Box>
            </Box>
        </Box>
    );
};

export default Quiz;
