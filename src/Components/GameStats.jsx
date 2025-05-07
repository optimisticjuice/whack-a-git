import "../Styles/GameStats.css";


const GameStats = ({score, timer}) => {
    return (
        <div className="game-stats">
            <div className="stat-item">
                <div className="stat-label">Score</div>
                <div className="stat-value">{score}</div>
                {/* The score is displayed in the GameStats component */}
            </div>
            <div className="stat-item">
                <div className="stat-label">Timer</div>
                <div className="stat-value">{timer}</div>
                {/* The timer is displayed in the GameStats component */}
            </div>
        </div>
    )
}
export default GameStats;

