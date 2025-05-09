import "../Styles/GameResult.css";

const GameResult = ({score}) => {
    return(
        <div className="game-result">
            <h2>Game Over</h2>
            <p className="result-message">Final Score:</p>
            <p className="final-score">{score}</p>
        </div>
    )
}
export default GameResult;