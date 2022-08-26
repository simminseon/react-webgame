import React from "react";
import styled from "styled-components";
import Title from "../../components/title/Title";
import Square from "./Square";

const initialData = [0, 0, 0, 0, 0, 0, 0, 0, 0];

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
      return squares[a];
    }
  }
  return null;
}

function Tictactoe() {
  // React.useEffect(() => {

  // }, [boardData])

  const [boardData, setBoardData] = React.useState(initialData);
  const [turn, setTurn] = React.useState(1);
  const [result, setResult] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [history, setHistory] = React.useState([]);
  const winner = calculateWinner(boardData);

  const onClickSqure = React.useCallback(
    (selectedId) => {
      if (turn === 1) {
        setTurn(2);
      } else if (turn === 2) {
        setTurn(1);
      }

      const selectedItem = boardData.map((data, index) => {
        if (parseInt(selectedId) === index) {
          return turn;
        } else {
          return data;
        }
      });

      setBoardData(selectedItem);
      setHistory((prev) => [...prev, boardData]);
      setCount((prev) => prev + 1);
      console.log(boardData);
      console.log(history);
      if (winner) {
        const whoIsWinner = winner === 1 ? "O" : "x";
        setResult(`${whoIsWinner}가 이겼습니다.`);
      }
    },
    [boardData, winner, turn]
  );

  const onClickHistory = (data) => {
    setBoardData(data);
  };
  return (
    <>
      <Title>틱택토</Title>
      {turn === 1 ? "O" : "X"} 차례
      <BoardStyle>
        {boardData.map((data, index) => {
          return (
            <Square
              key={index}
              id={index}
              value={data}
              onClickSqure={onClickSqure}
            />
          );
        })}
      </BoardStyle>
      {history.map((data, index) => {
        return (
          <button type="button" onClick={() => onClickHistory(data)}>
            {index}번째로 돌아가기
          </button>
        );
      })}
      <div>{count}</div>
      <div>{result}</div>
    </>
  );
}

const BoardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100px;
`;

export default Tictactoe;
