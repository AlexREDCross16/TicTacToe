export const GameBoard = ({onSelectSquare, turns}: {
  onSelectSquare: (arg: number, arg2: number) => void;
  turns: [];
}) => {

  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }


  return (<>
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) =>

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