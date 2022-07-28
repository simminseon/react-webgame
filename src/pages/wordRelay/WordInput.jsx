import React from "react";
import styled from "styled-components";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

function WordInput({ onChange, value, onClick, readOnly }, ref) {
  return (
    <BoxStyle>
      <Input onChange={onChange} value={value} ref={ref} readOnly={readOnly} />
      <Button type="button" onClick={onClick}>
        입력
      </Button>
    </BoxStyle>
  );
}

const BoxStyle = styled.div`
  display: flex;
  width: 215px;

  input {
    margin-right: 5px;
  }
`;

export default React.forwardRef(WordInput);
