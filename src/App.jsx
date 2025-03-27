import {Player} from "./components/Player.jsx";
import {GameBoard} from "./components/GameBoard.tsx";
import {useState} from "react";
import {Log} from "./components/Log.tsx";

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {

  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) => {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      return [{
        square: {
          row: rowIndex,
          col: colIndex,
        },
        player: currentPlayer
      }, ...prevTurns];
    })
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player initialName='Player1' symbol='X' isActive={activePlayer === 'X'}/>
          <Player initialName='Player2' symbol='O' isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>

      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
