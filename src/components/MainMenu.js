import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Grid
} from "@mui/material";
import Leaderboard from "./Leaderboard";
import {Typography} from "@mui/material";
import "../styles.css";


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
        <>
        <Box sx={{minWidth: 120, p: 2, background:'#f7f5ff'}} container height="100vh">
            <AppBar position="static" sx={{ borderRadius: "25px", background:'#f7f5ff', padding: 1}}>
                <Toolbar className="header">
                    <Grid container spacing={2}>
                        <Grid item xs={8} edge="start" justify="flex-start">
                            <Typography className="logoText" sx={{paddingLeft: 2, fontWeight: 700}} align="left" variant="h5">MQ</Typography>
                        </Grid>
                        <Grid display="flex" item xs={4} justifyContent="flex-end" style={{paddingRight: 2}}>
                            <Button color="inherit">О Нас</Button>
                            <Button color="inherit">Связаться</Button>
                            <Button color="inherit">Помощь</Button>
                    </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Grid container style={{height:"80vh", alignItems: "center"}}>
                <Grid item xs={6} style={{paddingLeft: 100}}>
                    <Typography variant="h2" style={{textAlign:"left"}}>
                        Пройди тест
                        уже сейчас
                    </Typography>
                    <Typography variant="subtitle1" style={{color: "#808080", marginBottom: "1%"}}>
                        Это абсолютно бесплатно!
                    </Typography>
                    <FormControl variant="outlined" sx={{minWidth: 300}}>
                        <InputLabel htmlFor="category-select-label">Тема теста:</InputLabel>
                        <Select labelID="category-select-label" id="category-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                            <MenuItem value="Тема теста:"></MenuItem>
                            {categories.map((category) => (
                                <MenuItem value={category.value}>
                                    <em>{category.label}</em>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button variant='contained' onClick={startQuiz} style={{paddingBottom: 15, paddingTop: 15, marginLeft: 15, background:'#e23a1e'}}>Начать тест</Button>
                </Grid>
                <Grid item xs={6}>
                    <img src="hero_girl.png" alt={"Привет!"} width="1024" style={{margin: -100}}/>
                </Grid>
            </Grid>
        </Box>
        </>
    );
};

export default MainMenu;
