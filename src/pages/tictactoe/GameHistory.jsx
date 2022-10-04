import React from "react";
import styled from "styled-components";

function GameHistory({ history, onClick, step, isAscending }) {
  const historyItem = history.map((stepData, move) => {
    return (
      <li key={move}>
        <ButtonStyle
          onClick={() => onClick(move)}
          selected={move === step}
          // style={{ fontWeight: move === step ? "bold" : "normal" }}
        >
          {move
            ? `Go to move #${move} (${stepData.position.row},${stepData.position.col})`
            : `Go to game start`}
        </ButtonStyle>
      </li>
    );
  });

  if (!isAscending) {
    historyItem.sort((a, b) => b.key - a.key);
  }
  return <GameHistoryStyle>{historyItem}</GameHistoryStyle>;
}

const GameHistoryStyle = styled.ol`
  padding-left: 30px;
`;

const ButtonStyle = styled.button`
  display: block;
  margin-bottom: 5px;
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  ${(props) => props.selected && "border: 2px solid #000"};
`;

export default GameHistory;
