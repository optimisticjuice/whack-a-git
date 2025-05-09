import GameControls from "./Components/GameControls.jsx";
import MoleGrid from "./Components/MoleGrid.jsx";

import { GameProvider } from "./Context/GameContext";

// const GameContent = () => {
//     return (
//         <>
            
           
//         </>
//     )
// }
function App(){
  return (
    <GameProvider>
      <MoleGrid/>
      
    </GameProvider>
  )
}

export default App;

