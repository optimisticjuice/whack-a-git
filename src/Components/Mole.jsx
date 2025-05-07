import "../Styles/Mole.css";
import { GameContext } from "../Context/GameContextDefinition.jsx";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Mole = ({onWhack}) => {
    const {state} = useContext(GameContext);
    const [mode, setMode] = useState("hidden");
    const {status} = {state};
    useEffect(() => {
        if(status !== "whacked"){
            // IF teh mole is not whacked, make it visible
            setMode("visible");
        }else if(status === "whacked"){
            setMode("hidden"); 
            // switch the whacked to state.status !== "whacked"
            //! Fix later
        }
    }, [status]);

    const handleClick = () => {
      if(status === "visible"){
        onWhack();
        // Later add the moleIndex here for the specific mole that is going to be whacked.
        setMode("whacked");
      }
    };

    return (
        <div className="mole-container" onClick={handleClick} onTouchStart={handleClick}>
            <div className={`mole ${mode}`}></div>
            <div className="mole-hole"></div>
        </div>
    )
}
export default Mole;