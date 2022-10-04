import React from "react";
import Square from "./Square";

function GameBoard({ winner, boardData, handleClick }) {
  const renderSquare = (i) => {
    let winnerCell = false;
    if (winner && winner.indexOf(i) > -1) {
      winnerCell = true;
    }

    return (
      <Square
        key={i}
        value={boardData[i]}
        onClick={() => handleClick(i)}
        winnerCell={winnerCell}
      />
    );
  };
  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < 3; row++) {
      const boardRow = [];
      for (let col = 0; col < 3; col++) {
        boardRow.push(renderSquare(row * 3 + col));
      }
      board.push(
        <div key={row} className="board-row">
          {boardRow}
        </div>
      );
    }

    return board;
  };
  return renderBoard();
}

export default GameBoard;
