import MoleGrid from "./Components/MoleGrid.jsx";
import {CursorFollow, CustomCursor} from "./Components/CustomCursor.jsx";
import { GameProvider } from "./Context/GameContext";
import { useEffect } from "react";


function App(){
  useEffect(() => {
    CursorFollow();
  }, []);
  return (
    <GameProvider>
      <MoleGrid/>
      <CustomCursor/>
    </GameProvider>
  )
}

export default App;

