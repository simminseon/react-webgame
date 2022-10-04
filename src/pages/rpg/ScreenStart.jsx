import React from "react";
import InputBox from "../../components/inputBox/InputBox";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

function ScreenStart({ onChange, value, inputRef, onClick }) {
  return (
    <>
      <span>주인공을 입력하세요!</span>
      <InputBox>
        <Input onChange={onChange} value={value} ref={inputRef} />
        <Button type="button" onClick={onClick}>
          시작
        </Button>
      </InputBox>
    </>
  );
}

export default ScreenStart;
