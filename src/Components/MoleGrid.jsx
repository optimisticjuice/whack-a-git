import "../Styles/MoleGrid.css";
import { GameContext } from "../Context/GameContextDefinition.jsx";
import { useContext, useMemo, useCallback, useState, useEffect, useRef } from "react";
import GameStats from "./GameStats.jsx";
import GameControls from "./GameControls.jsx";
import Mole from "./Mole.jsx";
import GameMusic from "../Hooks/GameLogic";

const MoleGrid = () => {
    const {state, dispatch} = useContext(GameContext);
    const {score, timer, status, gameDuration, difficulty} = state;
    const [activeMoles, setActiveMoles] = useState(Array(9).fill(false));  
    const timerInterval = useRef(null);
    const moleAppearanceInterval = useRef(null);
    const {backgroundMusicRef} = GameMusic();
    // using the useMemo with the difficulty settings to prevent re-rendering and to select the difficulty settings when neccessary.
    const difficultySettings = useMemo(() => ({
        easy:{
            moleShowTime: 1200,
            moleAppearanceRate: 2000,
            moleActiveMoles: 2
        },
        medium:{
            moleShowTime: 800,
            moleAppearanceRate: 1500,
            moleActiveMoles: 3
        },
        difficult:{
            moleShowTime: 300,
            moleAppearanceRate: 700,
            moleActiveMoles: 4
        },
    }),[])

    const currentSettings = useMemo(() => difficultySettings[difficulty], [difficulty, difficultySettings])
    
    //  Start the game timer  and set the gameDuration in motion.
    useEffect(() => {
        if(status === "playing" && timer === 0){
            dispatch({type: "END_GAME"});
            dispatch({type: "SET_TIMER", payload: gameDuration});
        }
        if(status === "playing" && timer > 0){
            timerInterval.current = setInterval(() =>{
                dispatch({type: "DECREMENT_TIMER"})
            }, 1000);
        }else if(status ==="paused" || status !== "playing"){
            clearInterval(timerInterval.current);
            // pause the game whilst it is not playing.
        }
        return () => clearInterval(timerInterval.current);
    }, [dispatch, status, timer, gameDuration]);


    
    useEffect(() => {// This useEffect is for the background music 
        if(status === "playing" && backgroundMusicRef.current){
            backgroundMusicRef.current.play().catch(error =>{
                console.error("Failed to play background music", error);
                // condition to play music in the background else set an error condition.
            });
        }else if((status === "paused") && backgroundMusicRef.current){
            backgroundMusicRef.current.pause();
            // condition to pause the music when the game is paused.
        }
        if((status === "ended") && backgroundMusicRef.current){
            backgroundMusicRef.current.currentTime = 0;
            backgroundMusicRef.current.pause();
            // condition to reset the music when the game is ended.
        }
    }, [status, backgroundMusicRef])
    
    

    
    useEffect(() => {
        // This is the interval in which the moles will pop up. 
        moleAppearanceInterval.current = setInterval(() => {
            
        }, currentSettings.moleAppearanceRate);
        
        
        if(status !== "playing"){
            setActiveMoles(Array(9).fill(false));
            clearInterval(moleAppearanceInterval.current);
            return;
        }
    }, [currentSettings, status])


    const handleWhack = useCallback((index) =>{
        if(status === 'playing'){
            dispatch({type: "INCREMENT_SCORE", payload: 1});
            // Increment the score by 1 everytime the mole is whacked 
            setActiveMoles(prev =>{
                const newActiveMoles = [...prev];
                newActiveMoles[index] = false;
                return newActiveMoles;
            })
            // The setActiveMoles will set the true to false of the mole that was whacked so that the mole that is whacked is now hidden(false).
        }
    }, [dispatch, status])
    

    const RenderGameResult = () => {
            if(status === "ended"){
            return(
                <GameResult score={score}/>
            )
        }
    }
    return (
        <div className="game-container">
            <GameStats score={score} timer={timer}/>
            {/* The GameStats component was added to the ui */}
            {/* Meaning it will display the score and timer */}
            <div className="mole-grid">
                <div className="moles-row-top">
                    {/* The 3 top moles were added to the ui */}
                    {Array(3).fill().map((_, index) => (
                        <Mole key={index} moleIndex={index} isActive={activeMoles[index]} onWhack={handleWhack}/>
                    ))}
                </div>
                
            </div>
            {/* The GameControls component was added to the ui */}
            <GameControls/>
            {RenderGameResult()}
        </div>
    )
}

export default MoleGrid;

