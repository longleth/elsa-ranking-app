import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowLeaderBoard from './ShowLeaderBoard.jsx';

function QuizSelector() {
    const [quizIds, setQuizIds] = useState([]);
    const [selectedQuizId, setSelectedQuizId] = useState('');

    useEffect(() => {
        // Load quiz IDs from an endpoint
        axios
            .get('http://localhost:8081/api/quiz') // Replace with your actual endpoint
            //.get('http://elsa-quiz:8081/api/quiz')
            .then((res) => {
                // extract quizId from each quiz object
                const ids = res.data.map((quiz) => quiz.quizId);
                setQuizIds(ids);
                if (ids.length > 0) {
                    setSelectedQuizId(ids[0]); // default to first quizId
                }
            })
            .catch((err) => console.log('Could not fetch quizIds', err));
    }, []);

    const handleQuizChange = (event) => {
        setSelectedQuizId(event.target.value);
    };

    return (
        <div className="QuizSelector">
            <div className="container">
                <div className="row my-4">
                    <div className="col-md-6">
                        <label>Select Quiz:</label>
                        <select
                            className="form-control"
                            value={selectedQuizId}
                            onChange={handleQuizChange}
                        >
                            {quizIds.map((id, index) => (
                                <option key={index} value={id}>{id}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {selectedQuizId && (
                    <ShowLeaderBoard quizId={selectedQuizId} key={selectedQuizId} />
                )}
            </div>
        </div>
    );
}

export default QuizSelector;
