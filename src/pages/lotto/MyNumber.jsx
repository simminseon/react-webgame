import React from "react";
import InputBox from "../../components/inputBox/InputBox";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Ball from "./Ball";

function MyNumber({ value, onChange, onClick, myNumbers, inputRef }) {
  return (
    <>
      {myNumbers.length < 6 && (
        <InputBox>
          <Input value={value} onChange={onChange} ref={inputRef} />
          <Button onClick={onClick}>추가</Button>
        </InputBox>
      )}
      {myNumbers.map((data) => {
        return <Ball key={`내번호-${data}`} data={data} />;
      })}
    </>
  );
}

export default MyNumber;
