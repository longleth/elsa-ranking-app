import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserScoreCard from "./UserScoreCard.jsx";

function ShowLeaderBoard({ quizId }) {
    const [ranks, setRanks] = useState([]);

    //const leaderBoardUrl = `http://elsa-user-score:8080/api/quiz/leaderboard/${quizId}`;
    const leaderBoardUrl = `http://localhost:8080/api/quiz/leaderboard/${quizId}`;

    //console.log("leader board: ", leaderBoardUrl);

    useEffect(() => {
        const fetchLeaderboard = () => {

            axios
                .get(leaderBoardUrl) // + quizId.toString())
                //.get('http://elsa-user-score:8080/api/quiz/leaderboard/' + quizId)
                .then((res) => {
                    setRanks(res.data);
                })
                .catch((err) => {
                    console.log('Could not fetch leaderboard', err);
                });
        };

        // Initial fetch
        fetchLeaderboard();

        // Set up interval, refresh every 0.5 seconds
        const intervalId = setInterval(fetchLeaderboard, 1000);

        // Cleanup interval on unmount
        return () => clearInterval(intervalId);
    }, []);

    const userScoreList =
        ranks.length === 0
            ? 'No one is joining quiz!'
            : ranks.map((rank, k) => <UserScoreCard userScore={rank} key={k} />);

    return (
        <div className='ShowLeaderBoard'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <br />
                        <h2 className='display-4 text-center'>User Score Ranking</h2>
                    </div>
                    <div className='col-md-11'>
                        <hr />
                    </div>
                </div>

                <div className='list'>{userScoreList}</div>
            </div>
        </div>
    );
}

export default ShowLeaderBoard;