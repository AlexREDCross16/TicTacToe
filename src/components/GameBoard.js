"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameBoard = void 0;
var react_1 = require("react");
var GameBoard = function (_a) {
    var onSelectSquare = _a.onSelectSquare, turns = _a.turns;
    var initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    var _b = (0, react_1.useState)(initialGameBoard), gameBoard = _b[0], setGameBoard = _b[1];
    // for (const turn of turns) {
    //     const {square, player} = turn;
    //     const {row, col} = square;
    //
    //     gameBoard[row][col] = player;
    // }
    return (<>
        <ol id='game-board'>
            {gameBoard.map(function (row, rowIndex) { return <li key={rowIndex}>
                <ol>
                    {row.map(function (playerSymbol, colIndex) { return <li key={colIndex}>
                        <button onClick={function () { return onSelectSquare(rowIndex, colIndex); }}>
                            {playerSymbol}
                        </button>
                    </li>; })}
                </ol>
            </li>; })}
        </ol>
    </>);
};
exports.GameBoard = GameBoard;
