import GameControls from "./Components/GameControls.jsx";


import { GameProvider } from "./Context/GameContext";

function App(){
  return (
    <GameProvider>
      <GameControls/>
    </GameProvider>
  )
}

export default App;

