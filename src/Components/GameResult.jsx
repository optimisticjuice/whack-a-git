import { useEffect } from "react";
import "../Styles/GameResult.css";

const GameResult = ({ score, isNewHighScore, highScores }) => {
    useEffect(() => {
        const storedHighScores = localStorage.getItem('highScores');

        if (storedHighScores) {
            console.log("High Scores loaded from localStorage:", JSON.parse(storedHighScores));
            console.log("High Scores:", highScores);
            console.log("Score:", score);
            console.log("isNewHighScore:", isNewHighScore);
        }
    }, [])
    return (
        <div className="game-result">
            <h2>Game Over</h2>
            <p className="result-message">Final Score:</p>
            <p className="final-score">{score}</p>
            {isNewHighScore && (<div className="new-high-score">New High Score!</div>)}

            <h3>High Scores</h3>
            <ul className="high-scores-list">
                {highScores.map((highScore, index) => (
                    <li key={index}>{highScore.score}</li>
                ))}
            </ul>
        </div>
    )
}
export default GameResult;