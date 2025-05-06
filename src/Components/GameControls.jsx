import "../Styles/GameControls.css";
import { GameContext } from "../Context/GameContextDefinition";
import { useContext } from "react";

const GameControls = () => {
    const {state, dispatch} = useContext(GameContext);
    const {status, difficulty} = state;

    const handleStartGame = () => {
        if(status === "ended"){
            dispatch({type: "RESET_GAME"});
        }
        dispatch({type: "START_GAME"});
    };

    return(
        <div className="game-controls">
         <div className="buttons">
            <button onClick={handleStartGame} disabled={status === "playing" || status === "paused"}>{status === "ended" ? "Restart Game" : }
         </div>        
        </div>
    )
}

