import "../Styles/GameResult.css";

const GameResult = ({score, isNewHighScore, highScores}) => {
    return(
        <div className="game-result">
            <h2>Game Over</h2>
            <p className="result-message">Final Score:</p>
            <p className="final-score">{score}</p>
            {isNewHighScore && (<div className="new-high-score">New High Score!</div>)}

            <h3>High Scores</h3>
            <ul className="high-scores-list">
                {highScores.map((score, index) => (
                    <li key={index}>{score.score}</li>
                ))}
            </ul>
        </div>
    )
}
export default GameResult;