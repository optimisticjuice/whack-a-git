import "../Styles/GameControls.css";
import { GameContext } from "../Context/GameContextDefinition.jsx";
import { useContext } from "react";

const GameControls = () => {
    const {state, dispatch} = useContext(GameContext);
    // destructure state which came from GameContext which came from initialState
    const {status, difficulty} = {state};
    //  destructuring the status and difficulty which came from state
    const handleStartGame = () => {
        if(status === "ended"){
            dispatch({type: "RESET_GAME"});
        }else{
            dispatch({type: "START_GAME"});
        }
    };

    const handlePauseGame = () => {
     if(status === 'playing'){
        dispatch({type: "PAUSE_GAME"});
     }else if(status === "paused"){
         dispatch({type: "START_GAME"});
        }
    };
    const handleDifficultyChange = (e) => {
        dispatch({type: "SET_DIFFICULTY", payload: e.target.value});
    };
    return(
        <div className="game-controls">
         <div className="buttons">
            <button onClick={handleStartGame} disabled={status === "playing" || status === "paused"}>{status === "ended" ? "Restart Game" : "Start Game"} </button>
           {/* handleStartGame function inside the onClick inside the button disabled when playing or paused. */}
           <button onClick={handlePauseGame} disabled={status === "paused"}>{status === "playing" ? "Pause Game" : "Resume Game"}</button>
         </div>  
         {/* difficulty controls */}
         <div className="difficulty-controls">
            <label htmlFor="difficulty">Difficulty:</label>
            {/* difficulty of the value and handleDifficultyChange created. */}
            <select id="difficulty" value={difficulty} onChange={handleDifficultyChange}>
            {/* difficulty options */}
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            </select>
         </div>      
        </div>
    )
}

export default GameControls;