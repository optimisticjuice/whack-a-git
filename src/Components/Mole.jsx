import "../Styles/Mole.css";
import { useEffect, useState, useRef} from "react";
import { GameContext } from "../Context/GameContextDefinition.jsx";
import { useContext } from "react";

const Mole = ({onWhack, moleIndex, isActive}) => {
    const {state} = useContext(GameContext);
    const {difficulty} = state;
    const whackSoundRef = useRef(new Audio("/assets/sounds/whack.mp3"));
    const moleCrySoundRef = useRef(new Audio("/assets/sounds/molecry.mp3"));
    const [mode, setMode] = useState("hidden");
   
    useEffect(() => {
        if(isActive && mode !== "whacked"){
            // IF the mole is not whacked, make it visible
            setMode("visible");
            // moleCrySoundRef is the sound that plays when the mole is not whacked.(in the background)
            if (moleCrySoundRef.current) {
                moleCrySoundRef.current.volume = 0.5;
                moleCrySoundRef.current.currentTime = 0;
                
                switch(difficulty){
                    case 'easy': 
                    moleCrySoundRef.current.playbackRate = 0.8;
                    break;
                    case'medium':
                    moleCrySoundRef.current.playbackRate = 2; 
                    break;
                    case 'difficult':
                        moleCrySoundRef.current.playbackRate = 3.5;
                        break;
                        default:
                        }
                        moleCrySoundRef.current.play().catch(error => {
                            console.error("Failed to play mole cry sound", error);
                        });
                    }
                    }else if(!isActive && mode !== "whacked"){
            // Hide the mole that is not active and is not whacked.
            setMode("hidden"); 
        }
    }, [mode, isActive, difficulty]);

    const handleClick = () => {
      if(mode === "visible"){
        onWhack(moleIndex);
        // Later add the moleIndex here for the specific mole that is going to be whacked.
        setMode("whacked");

        if(whackSoundRef.current){
            whackSoundRef.current.volume = 1;
            whackSoundRef.current.playbackRate = 3;
            whackSoundRef.current.play().catch(error => {
                console.error("Failed to play whack sound", error);
            })
        }
        // Once the mole is clicked if  whacked mole for 3 seconds 
        setTimeout(() => {
            if(isActive){
                setMode("visible");
            }else{
                setMode("hidden");
            }
        }, 3000);

      }
    //   Once the mole is clicked if  whacked mole for 3 seconds 
    };

    return (
        <div className="mole-container" onClick={handleClick} onTouchStart={handleClick}>
            <div className={`mole ${mode}`}></div>
            <div className="mole-hole">
            <audio ref={whackSoundRef} src="/assets/sounds/whack.mp3"></audio>
            <audio ref={moleCrySoundRef} src="/assets/sounds/molecry.mp3"></audio>
            </div>
        </div>
    )
}
export default Mole;