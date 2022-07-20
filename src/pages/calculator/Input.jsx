import React from "react";
import styled from "styled-components";

function Input({ value, readOnly }) {
  return <InputStyle type="text" value={value} readOnly={readOnly} />;
}

const InputStyle = styled.input`
  width: 170px;
  height: 50px;
  margin: 5px;
  text-align: right;
  box-sizing: border-box;
  border: 1px solid #222;
`;

export default Input;
