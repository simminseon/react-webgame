import React, { useEffect } from "react";
import styled from "styled-components";
import { useInput } from "../../hooks/useInput";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Title from "../../components/title/Title";
import { buttonTheme, buttonSize } from "../../components/button/style";

const getNumbers = () => {
  const initialData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const randomData = [];
  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * initialData.length);
    randomData.push(initialData[index]);
    initialData.splice(index, 1);
  }

  return randomData;
};

function NumberBaseball() {
  const [answer, setAnswer] = React.useState(getNumbers);
  const [value, onChangeValue, reset] = useInput("");
  const [result, setResult] = React.useState(false);
  const [tries, setTries] = React.useState([]);
  const [gameData, setGameData] = React.useState([]);
  const inputRef = React.useRef(null);
  const [logs, setLogs] = React.useState("");
  const [out, setOut] = React.useState(0);

  React.useEffect(() => {
    if (out === 3) {
      setLogs(`아웃!! 정답은 ${answer.join("")} 였습니다.`);
      setResult(true);
    }
  }, [out]);

  const initialGameData = {
    triesData: value,
    ballData: 0,
    strikeData: 0,
    outData: false,
  };
  const checkValue = (input) => {
    if (value.length !== 4) {
      return alert("숫자 4개를 입력하세요!");
    }
    if (new Set(input).size !== 4) {
      return alert("중복되지 않게 입력해주세요");
    }
    if (tries.includes(value)) {
      return alert("이미 시도한 값입니다.");
    }
    return true;
  };

  const onClickConfirm = () => {
    if (!checkValue(value)) {
      return;
    }

    for (let i = 0; i < answer.length; i++) {
      const index = value.indexOf(answer[i]);

      if (index > -1) {
        if (index === i) {
          initialGameData.strikeData = initialGameData.strikeData + 1;
        } else {
          initialGameData.ballData = initialGameData.ballData + 1;
        }
      }
    }

    if (initialGameData.strikeData === 0 && initialGameData.ballData === 0) {
      initialGameData.outData = true;
      setOut((prev) => prev + 1);
    }
    // if (out === 3) {
    //   setLogs(`아웃!! 정답은 ${answer.join("")} 였습니다.`);
    //   setResult(true);
    //   console.log("실패실패");
    // }
    console.log("out: ", out);

    if (value === answer.join("")) {
      setLogs("홈런!!");
      setResult(true);
    } else {
      setTries([...tries, value]);
      setGameData([...gameData, initialGameData]);
      inputRef.current.focus();
    }

    if (tries.length >= 9) {
      setLogs(`10번 넘게 틀려서 실패!! 정답은 ${answer.join("")} 였습니다.`);
      setResult(true);
    }

    console.log("여기ㄴ,ㄴ??", out);
    reset("");
  };
  // console.log("initialGameData: ", initialGameData);
  // console.log("gameData: ", gameData);
  // console.log("tries: ", tries);
  console.log("바깥out:", out);

  const onClickRestart = () => {
    inputRef.current.focus();
    setResult(false);
    setGameData([]);
    setAnswer(getNumbers());
    setLogs("");
    setTries([]);
  };
  return (
    <>
      <Title>숫자야구</Title>
      {answer}
      <BoxStyle>
        <Input onChange={onChangeValue} value={value} readOnly={false} ref={inputRef} />
        <Button type="button" onClick={onClickConfirm}>
          확인
        </Button>
      </BoxStyle>
      <LogStyle>{logs}</LogStyle>

      {gameData.map((data, index) => (
        <div key={`${index}`}>
          {index + 1}번째 시도!
          <br />
          {data.outData ? `입력값 : ${data.triesData} -> 아웃!` : `입력값 : ${data.triesData} -> ${data.strikeData}스트라이크, ${data.ballData}볼`}
        </div>
      ))}
      {result && (
        <>
          <Button onClick={onClickRestart} theme={buttonTheme.orange} size={buttonSize.full}>
            다시시작!
          </Button>
        </>
      )}
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

const LogStyle = styled.strong`
  display: block;
  padding: 10px 0;
  font-size: 20px;
`;

export default NumberBaseball;
