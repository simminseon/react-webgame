import React from "react";
import styled from "styled-components";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Ball from "./Ball";

function MyNumber({ value, onChange, onClick, myNumbers, inputRef }) {
  return (
    <>
      {myNumbers.length < 6 && (
        <BoxStyle>
          <Input value={value} onChange={onChange} ref={inputRef} />
          <Button onClick={onClick}>추가</Button>
        </BoxStyle>
      )}
      {myNumbers.map((data) => {
        return <Ball key={`내번호-${data}`} data={data} />;
      })}
    </>
  );
}

const BoxStyle = styled.div`
  display: flex;
  width: 215px;

  input {
    margin-right: 5px;
  }
`;

export default MyNumber;
