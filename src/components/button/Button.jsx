import React from "react";
import styled from "styled-components";

function Button({ onClick, theme, size, children }) {
  return (
    <ButtonStyle onClick={onClick} theme={theme} size={size}>
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid #222;
  font-weight: bold;
  background-color: #e0e0e0;
  ${(props) => props.theme}
  ${(props) => props.size}
`;

export default Button;
