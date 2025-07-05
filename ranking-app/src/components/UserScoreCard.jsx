import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const UserScoreCard = ({userScore}) => {

    return (
        <div className='card-container'>
            <div className='desc'>
                <h3>{userScore.value} : {userScore.score} points</h3>
            </div>
        </div>
    );
};

export default UserScoreCard;