import React from "react";
import styled from "styled-components";

function Input({ value, readOnly, onChange, align }, ref) {
  return <InputStyle type="text" value={value} onChange={onChange} readOnly={readOnly} align={align} ref={ref} />;
}

const InputStyle = styled.input`
  flex: 1;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  text-align: ${(prop) => prop.align || `left`};
  box-sizing: border-box;
  border: 1px solid #222;
`;

export default React.forwardRef(Input);
