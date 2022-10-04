import React from "react";
import styled from "styled-components";
import InputBox from "../../components/inputBox/InputBox";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

function ScreenGame({ onChange, value, inputRef, onClick, screen }) {
  return (
    <GameBoxStyle>
      {screen === "game" ? (
        <>
          <div>1.모험</div>
          <div>2.휴식</div>
          <div>3.종료</div>
        </>
      ) : (
        <>
          <div>1.공격</div>
          <div>2.회복</div>
          <div>3.도망</div>
        </>
      )}
      <InputBox>
        <Input onChange={onChange} value={value} ref={inputRef} />
        <Button type="button" onClick={onClick}>
          입력
        </Button>
      </InputBox>
    </GameBoxStyle>
  );
}

const GameBoxStyle = styled.div`
  padding: 10px 0;
`;

export default ScreenGame;
