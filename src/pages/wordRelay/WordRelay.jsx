import React from "react";
import { useInput } from "../../hooks/useInput";
import Title from "../../components/title/Title";
import WordInput from "./WordInput";
import WordArray from "./WordArray";

function WordRelay() {
  const firstWord = "기러기";
  const [number, onChangeNumber, resetNumber] = useInput("");
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
      return;
    } else {
      alert("실패!");
      setWordArray([word]);
      setStart(false);
      resetNumber("");
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
      <Title>끝말잇기</Title>
      {start ? (
        <div id="game">
          <div>제시어: {firstWord}</div>
          <WordArray wordArray={wordArray} />
          <div>{order}번째 참가자 차례입니다.</div>
          <WordInput
            onChange={onChangeValue}
            onClick={onClickButton}
            value={value}
            ref={inputRef}
          />
        </div>
      ) : (
        <div>
          <div>몇명이 참가하나요?</div>
          <WordInput
            onChange={onChangeNumber}
            onClick={onClickStart}
            value={number}
            ref={inputRef}
            readOnly={false}
          />
        </div>
      )}
    </>
  );
}

export default WordRelay;
