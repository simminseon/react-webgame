import React from "react";
import styled from "styled-components";

function Button({ onClick, value, theme }) {
  return (
    <ButtonStyle onClick={onClick} theme={theme}>
      {value}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  width: 50px;
  height: 50px;
  margin: 5px;
  border: 1px solid #222;
  font-weight: bold;
  background-color: #e0e0e0;
  ${(props) => props.theme}
`;

export default Button;