import React from "react";
import styled from "styled-components";
import InputBox from "../../components/inputBox/InputBox";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

function WordInput({ onChange, value, onClick, readOnly }, ref) {
  return (
    <InputBox>
      <Input onChange={onChange} value={value} ref={ref} readOnly={readOnly} />
      <Button type="button" onClick={onClick}>
        입력
      </Button>
    </InputBox>
  );
}

export default React.forwardRef(WordInput);
