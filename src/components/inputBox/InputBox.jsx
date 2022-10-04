import React from "react";
import styled from "styled-components";

function InputBox({ children, ...rest }) {
  return <InputBoxStyle {...rest}>{children}</InputBoxStyle>;
}

const InputBoxStyle = styled.div`
  display: flex;
  width: 215px;

  input {
    margin-right: 5px;
  }
`;

export default InputBox;
