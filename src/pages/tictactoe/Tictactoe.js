import React from "react";
import styled from "styled-components";
import Title from "../../components/title/Title";
import Square from "./Square";

const initialData = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function Tictactoe() {
  const [boardData, setBoardData] = React.useState(initialData);
  const [turn, setTurn] = React.useState(1);
  const [check, SetCheck] = React.useState([]);

  const onClickSqure = (selectedId) => {
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

    console.log(boardData);
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

    const test = [];
    let findO = boardData.indexOf(1);
    while (findO !== -1) {
      test.push(findO);
      findO = boardData.indexOf(1, findO + 1);
    }
    console.log(test);
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
    </>
  );
}

const BoardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100px;
`;

export default Tictactoe;
