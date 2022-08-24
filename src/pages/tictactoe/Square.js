import React from "react";
import styled from "styled-components";

function Square({ id, value, onClickSqure }) {
  let valueText = "";
  if (value === 1) {
    valueText = "O";
  } else if (value === 2) {
    valueText = "X";
  }

  const onClick = () => {
    if ("" === valueText) {
      onClickSqure(id);
    }
  };

  return (
    <>
      <ButtonStyle type="button" id={id} onClick={onClick}>
        {valueText}
      </ButtonStyle>
    </>
  );
}

const ButtonStyle = styled.button`
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
`;

export default Square;
