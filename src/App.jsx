import MoleGrid from "./Components/MoleGrid.jsx";
import {CursorFollow, CustomCursor} from "./Components/CustomCursor.jsx";
import { GameProvider } from "./Context/GameContext";
import { useEffect } from "react";
import './Styles/WhackAMole.css';

function GameContent(){
  return(
    <div className="whack-a-mole-game">
      <MoleGrid/>
    </div>
  )
}

function App(){
  useEffect(() => {
    CursorFollow();
  }, []);
  return (
    <GameProvider>
      <GameContent/>
      <CustomCursor/>
    </GameProvider>

  )
}

export default App;

