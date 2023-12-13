import { GameBoard } from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={"player 1"} symbol={"X"} />
          <Player name={"player 2"} symbol={"0"} />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
