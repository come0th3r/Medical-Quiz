import React from 'react';
import {Typography} from "@mui/material";

const Leaderboard = ({ onMainMenu }) => {
    const leaderboardData = [
        { name: 'Иван Иванов', score: 25 },
        { name: 'Петр Петров', score: 20 },
        { name: 'Сергей Сергеев', score: 15 },
        // Добавьте больше данных при необходимости
    ];

    return (
        <div>
            <Typography component="h3">Рейтинг игроков</Typography>
            <table>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Очки</th>
                </tr>
                </thead>
                <tbody>
                {leaderboardData.map((player, index) => (
                    <tr key={index}>
                        <td>{player.name}</td>
                        <td>{player.score}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
export default Leaderboard;



