import React from "react";
import styled from "styled-components";
import Title from "../../components/title/Title";
import Square from "./Square";
import Game from "./Tictactoe2";

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
  // const [turn, setTurn] = React.useState(1);
  const [result, setResult] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [history, setHistory] = React.useState([initialData]);
  const winner = calculateWinner(boardData);

  const turn = (count % 2) + 1;

  console.log(boardData)
  const onClickSqure = React.useCallback(
    (selectedId) => {
      const selectedItem = boardData.map((data, index) => {
        if (parseInt(selectedId) === index) {
          return turn;
        } else {
          return data;
        }
      });

      setBoardData(selectedItem);
      setHistory([...history, selectedItem]);
      setCount((prev) => prev + 1);
console.log(winner)
      if (winner) {
        const whoIsWinner = winner === 1 ? "O" : "x";
        setResult(`${whoIsWinner}가 이겼습니다.`);
      }
    },
    [boardData, winner, turn, result]
  );

  const onClickHistory = (data) => {

    const dd = history.splice(0, data + 1);
    setHistory(dd)
    setBoardData(dd[data])
  };

  return (
    <>
      <Title>틱택토</Title>
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
      <TurnStyle>{turn === 1 ? "O" : "X"} 차례</TurnStyle>
      {history.map((data, index) => {
        return (
          <ButtonStyle type="button" key={index} onClick={() => onClickHistory(index)}>
            {index ? `${index}번째로 돌아가기` : `게임 시작`}
          </ButtonStyle>
        );
      })}
      <div>{result}</div>
      <Game />
    </>
  );
}

const BoardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100px;
`;

const TurnStyle = styled.div`
  padding: 5px 0;
  font-weight: bold;
`;

const ButtonStyle = styled.button`
  display: block;
  margin: 5px 0;
`;

export default Tictactoe;
