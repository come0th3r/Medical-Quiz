import React, { useState } from 'react';
import {Box, Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Leaderboard from "./Leaderboard";
import {Typography} from "@mui/material";

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
        <Box sx={{minWidth: 120, p: 2}} container align="center" justify="center" height="100vh">
            <div sx={{p: 10}}>
                <Typography variant="h1">Medical-quiz</Typography>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: 100 }}>
                    <InputLabel htmlFor="category-select-label">Тема теста:</InputLabel>
                    <Select
                        labelID="category-select-label"
                        id="category-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <MenuItem value="Тема теста:"></MenuItem>
                        {categories.map((category) => (
                            <MenuItem value={category.value}>
                                <em>{category.label}</em>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
        </div>
        <div>
            <Button onClick={startQuiz}>Начать тест</Button>
            <Button onClick={onLeaderboard}>Рейтинг игроков</Button>
            <Leaderboard></Leaderboard>
        </div>
        </Box>

    );
};

export default MainMenu;
