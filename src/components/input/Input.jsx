import React from "react";
import styled from "styled-components";

function Input({ value, readOnly, onChange, align }, ref) {
  return (
    <InputStyle
      type="text"
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      align={align}
      ref={ref}
    />
  );
}

const InputStyle = styled.input`
  width: 170px;
  height: 50px;
  margin: 5px;
  padding: 0 10px;
  text-align: ${(prop) => prop.align || `left`};
  box-sizing: border-box;
  border: 1px solid #222;
`;

export default React.forwardRef(Input);
