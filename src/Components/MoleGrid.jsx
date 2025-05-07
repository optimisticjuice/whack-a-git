import "../Styles/MoleGrid.css";
import { GameContext } from "../Context/GameContextDefinition.jsx";
import { useContext } from "react";
import GameStats from "./GameStats.jsx";
import GameControls from "./GameControls.jsx";
import Mole from "./Mole.jsx";

const MoleGrid = () => {
    const {state, dispatch} = useContext(GameContext);
    const {score, timer, status} = state;     

    const handleWhack = () =>{
        if(status === 'playing'){
            dispatch({type: "INCREMENT_SCORE", payload: 1});
        }
    }
    return (
        <div className="game-container">
            <GameStats score={score} timer={timer}/>
            <div className="mole-grid">
                <div className="moles-row-top">
                    {Array(3).fill().map((_, index) => (
                        <Mole key={index} onWhack={handleWhack}/>
                    ))}
                </div>
                
            </div>
            <GameControls/>
        </div>
    )
}

export default MoleGrid;

