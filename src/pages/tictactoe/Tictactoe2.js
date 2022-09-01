import React from "react";

function Square({ value, onClick, winnerCell }) {
  return (
    <button
      className="square"
      onClick={onClick}
      style={{ backgroundColor: winnerCell ? "pink" : "white" }}
    >
      {value}
    </button>
  );
}

function Board({ winner, boardData, handleClick }) {
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
  return <div>{renderBoard()}</div>;
}

function Game() {
  const initialData = Array(9).fill(null);
  const [history, setHistory] = React.useState([
    {
      gameData: initialData,
      position: {
        row: null,
        col: null,
      },
    },
  ]);
  const [step, setStep] = React.useState(0);
  const xIsNext = step % 2 === 0;
  const current = history[step];
  const winner = calculateWinner(current.gameData);
  const [isAscending, setIsAscending] = React.useState(true);

  const handleClick = (i) => {
    const newHistory = history.slice(0, step + 1);
    const squares = current.gameData.slice();
    const row = Math.floor(i / 3);
    const col = i % 3;

    if (winner || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";
    setHistory(
      newHistory.concat([
        {
          gameData: squares,
          position: { row: row, col: col },
        },
      ])
    );
    setStep(newHistory.length);
  };

  const JumpTo = (historyIndex) => {
    setStep(historyIndex);
  };

  const moves = history.map((stepData, move) => {
    const desc = move
      ? "Go to move #" +
        move +
        "(" +
        stepData.position.row +
        "," +
        stepData.position.col +
        ")"
      : "Go to game start";

    return (
      <li key={move}>
        <button
          onClick={() => JumpTo(move)}
          style={{ fontWeight: move === step ? "bold" : "normal" }}
        >
          {desc}
        </button>
      </li>
    );
  });

  if (!isAscending) {
    moves.sort((a, b) => b.key - a.key);
  }

  let status;
  if (winner) {
    status = `winner : ${winner[0]}`;
  } else if (step === 9 && !winner) {
    status = `무승부!!`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  const handleClickSort = () => {
    setIsAscending(!isAscending);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          winner={winner}
          boardData={current.gameData}
          handleClick={handleClick}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>

        <ol>{moves}</ol>
      </div>
      <div>
        <button type="button" onClick={handleClickSort}>
          {isAscending ? "내림차순" : "오름차순"}
        </button>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], a, b, c];
    }
  }
  return null;
}

export default Game;
