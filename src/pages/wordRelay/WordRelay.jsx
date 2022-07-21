import React from "react";
import { useInput } from "../../hooks/useInput";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import styled from "styled-components";

function WordRelay() {
  const firstWord = "기러기";
  const [number, onChangeNumber] = useInput("");
  const [start, setStart] = React.useState(false);
  const [value, onChangeValue, reset] = useInput("");
  const [order, setOrder] = React.useState(1);
  const [word, setWord] = React.useState(firstWord);
  const [wordArray, setWordArray] = React.useState([word]);
  const inputRef = React.useRef(null);

  const onClickButton = () => {
    if (value[0] === word[word.length - 1]) {
      setWord(value);
      setOrder((prev) => prev + 1);
      setWordArray((prev) => [...prev, value]);
    } else if (value === "") {
      alert("단어를 입력하세요!");
    } else {
      alert("실패!");
      setWordArray([word]);
    }

    if (order === parseInt(number)) {
      setOrder(1);
    }

    reset("");
    inputRef.current.focus();
  };

  const onClickStart = () => {
    if (number) {
      setStart(true);
    }
  };

  return (
    <>
      {start ? (
        <div id="game">
          <div>제시어: {firstWord}</div>

          {wordArray.map((data, index) => {
            return (
              <ul>
                <li key={data + index}>{wordArray[index + 1]}</li>
              </ul>
            );
          })}
          <div>{order}번째 참가자 차례입니다.</div>
          <BoxStyle>
            <Input onChange={onChangeValue} value={value} ref={inputRef} readOnly={false} />
            <Button type="button" onClick={onClickButton}>
              입력
            </Button>
          </BoxStyle>
        </div>
      ) : (
        <div>
          <div>몇명이 참가하나요?</div>
          <BoxStyle>
            <Input onChange={onChangeNumber} value={number} readOnly={false} />
            <Button type="button" onClick={onClickStart}>
              시작
            </Button>
          </BoxStyle>
        </div>
      )}
    </>
  );
}

const BoxStyle = styled.div`
  display: flex;
`;

export default WordRelay;
