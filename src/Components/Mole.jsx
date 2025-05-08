import "../Styles/Mole.css";
import { useEffect, useState } from "react";

const Mole = ({onWhack, moleIndex, isActive}) => {
    
    const [mode, setMode] = useState("hidden");
   
    useEffect(() => {
        if(isActive && mode !== "whacked"){
            // IF the mole is not whacked, make it visible
            setMode("visible");
        }else if(!isActive && mode !== "whacked"){
            // Hide the mole that is not active and is not whacked.
            setMode("hidden"); 
        }
    }, [mode, isActive]);

    const handleClick = () => {
      if(mode === "visible"){
        onWhack(moleIndex);
        // Later add the moleIndex here for the specific mole that is going to be whacked.
        setMode("whacked");
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
            <div className="mole-hole"></div>
        </div>
    )
}
export default Mole;