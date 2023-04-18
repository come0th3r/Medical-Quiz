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
    Grid, Autocomplete, Divider, Container
} from "@mui/material";
import { Link } from 'react-router-dom';
import Leaderboard from "./Leaderboard";
import {Typography} from "@mui/material";
import "../styles.css";
import '@fontsource/inter/400.css'
import '@fontsource/inter/900.css'

const MainMenu = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        { value: 'cardiology', label: 'Кардиология' },
        { value: 'pulmonology', label: 'Пульмонология' },
        // добавьте другие категории при необходимости
    ];

    return (
        <>

            <Box sx={{minWidth: 120, background:'#f7f5ff'}} container height="100vh">
                <Container maxWidth="lg">
                <AppBar position="static" sx={{ borderRadius: "25px", background:'#f7f5ff', padding: 1}}>
                    <Toolbar className="header">
                        <Grid container spacing={2}>
                            <Grid item xs={4} edge="start" justify="flex-start">
                                <Typography className="logoText" sx={{paddingLeft: 2, fontWeight: 700}} align="left" variant="h5">MQ</Typography>
                            </Grid>
                            <Grid display="flex" item xs={8} justifyContent="flex-end" style={{paddingRight: 2}}>
                                <Button color="inherit">О Нас</Button>
                                <Button color="inherit">Связаться</Button>
                                <Button color="inherit">Помощь</Button>
                            </Grid>
                            <Divider variant="middle" />
                        </Grid>
                    </Toolbar>
                </AppBar>
                    <Grid container style={{height:"80vh", alignItems: "center", flexWrap: "wrap"}}>
                        <Grid item xs={6}>
                            <Typography variant="h2" style={{textAlign:"left", fontFamily:"inter"}}>
                                Пройди тест уже <br/> <span style={{fontWeight:"bold", textDecoration: 'wavy', color:"#E23A1EFF"}}>сейчас</span>
                            </Typography>
                            <Typography variant="subtitle1" style={{color: "#808080", marginBottom: "2%", marginTop: "1%"}}>
                                Это абсолютно бесплатно!
                            </Typography>
                            <FormControl id="outlined-select" label="Select" sx={{minWidth: 300}} >
                                <InputLabel id="category-select-label">Выбрать тему теста:</InputLabel>
                                <Select label="Выбрать тему теста:" labelID="category-select-label" id="category-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                                    {categories.map((category) => (
                                        <MenuItem value={category.value}>
                                            <em>{category.label}</em>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <Link to={`/quiz/${selectedCategory}`} style={{textDecoration: "none"}}>
                                <Button variant='contained' style={{paddingBottom: 15, paddingTop: 15, marginLeft: 15, background:'#e23a1e', textDecoration:'none'}}>Начать тест</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={6} display="flex" justifyContent="flex-end">
                            <img src="hero_girl.png" alt={"Привет!"} maxWidth="100%" style={{maxWidth: "50vh"}}/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default MainMenu;
