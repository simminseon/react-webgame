import React from "react";
import styled from "styled-components";
import { useInput } from "../../hooks/useInput";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Title from "../../components/title/Title";

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

function NumberBaseball2() {
  const [answer, setAnswer] = React.useState(getNumbers());
  const [value, onChangeValue, reset] = useInput("");
  const [result, setResult] = React.useState(false);
  const [strike, setStrike] = React.useState(0);
  const [ball, setBall] = React.useState(0);
  const [tries, setTries] = React.useState([]);
  const inputRef = React.useRef(null);
  const [log, setLog] = React.useState("");
  // const [gameData, setGameData] = React.useState([]);

  React.useEffect(() => {}, [strike, ball]);

  // const triesInfoData = {
  //   triesData: value,
  //   ballData: ball,
  //   strikeData: strike,
  // };
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
          setStrike((prev) => prev + 1);
          // triesInfoData.strikeData = triesInfoData.strikeData + 1;
        } else {
          setBall((prev) => prev + 1);
          // triesInfoData.ballData = triesInfoData.ballData + 1;
        }
      }
    }

    if (value === answer.join("")) {
      setResult("홈런!!");
    } else {
      setTries([...tries, value]);
      // setGameData([...gameData, triesInfoData]);
      // console.log("gameData: ", gameData);
    }

    setLog(`${strike} 스트라이크, ${ball}볼`);
    reset("");
    inputRef.current.focus();
  };
  // console.log("triesInfoData: ", triesInfoData);
  // console.log("gameData: ", gameData);
  return (
    <>
      <Title>숫자야구</Title>
      {answer}
      <BoxStyle>
        <Input
          onChange={onChangeValue}
          value={value}
          readOnly={false}
          ref={inputRef}
        />
        <Button type="button" onClick={onClickConfirm}>
          확인
        </Button>
      </BoxStyle>
      {tries.map((data, index) => (
        <div key={`${index}`}>
          {index}번째 시도! {data}
        </div>
      ))}
      {log}
      {/* {tries} */}
      {result && <div>정답!!</div>}
    </>
  );
}

const BoxStyle = styled.div`
  display: flex;
`;

export default NumberBaseball2;
