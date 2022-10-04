import React from "react";
import styled from "styled-components";

function Square({ value, onClick, winnerCell }) {
  return (
    <SquareStyle
      onClick={onClick}
      style={{ backgroundColor: winnerCell ? "pink" : "white" }}
    >
      {value}
    </SquareStyle>
  );
}

const SquareStyle = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;

  &:focus {
    outline: none;
  }
`;

export default Square;
