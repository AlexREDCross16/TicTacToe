export const GameBoard = ({onSelectSquare, board}: {
  onSelectSquare: (arg: number, arg2: number) => void;
  board: any[][];
}) => {


  return (<>
    <ol id='game-board'>
      {board.map((row, rowIndex) =>

        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => <li key={colIndex}>
              <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                {playerSymbol}
              </button>
            </li>)}
          </ol>
        </li>)}
    </ol>
  </>)
}