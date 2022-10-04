import React from "react";
import styled from "styled-components";
import Title from "../../components/title/Title";
import GameBoard from "./GameBoard";
import GameHistory from "./GameHistory";

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
    <>
      <Title>틱택토</Title>
      <GameStyle>
        <div>
          <GameBoard
            winner={winner}
            boardData={current.gameData}
            handleClick={handleClick}
          />
        </div>
        <div>
          <div>{status}</div>

          <GameHistory
            history={history}
            onClick={JumpTo}
            step={step}
            isAscending={isAscending}
          />
        </div>
        <div>
          <button type="button" onClick={handleClickSort}>
            {isAscending ? "내림차순" : "오름차순"}
          </button>
        </div>
      </GameStyle>
    </>
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

const GameStyle = styled.div`
  display: flex;
  flex-direction: row;

  > div + div {
    margin-left: 20px;
  }
`;

export default Game;
