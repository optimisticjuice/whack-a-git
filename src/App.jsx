import GameControls from "./Components/GameControls.jsx";
import MoleGrid from "./Components/MoleGrid.jsx";

import { GameProvider } from "./Context/GameContext";

const GameContent = () => {
    return (
        <>
            <MoleGrid/>
           
        </>
    )
}
function App(){
  return (
    <GameProvider>
      
      <GameContent/>
    </GameProvider>
  )
}

export default App;

