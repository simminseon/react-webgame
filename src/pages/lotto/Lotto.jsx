import React from "react";
import styled from "styled-components";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import Ball from "./Ball";
import MyNumber from "./MyNumber";
import { useInput } from "../../hooks/useInput";
import { buttonSize } from "../../components/button/style";

const getNumbers = () => {
  console.log("getNumbers");
  const candidate = Array(45)
    .fill()
    .map((el, index) => {
      return index + 1;
    });

  const shuffle = [];
  while (candidate.length > 0) {
    const index = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(index, 1);
    const value = spliceArray[0];
    shuffle.push(value);
  }
  const winNumbers = shuffle.slice(0, 6).sort((a, b) => a - b);
  const bonusNumber = shuffle[6];
  return [...winNumbers, bonusNumber];
};

function Lotto() {
  const [winNumbers, setWinNumbers] = React.useState(getNumbers);
  const [winBalls, setWinballs] = React.useState([]);
  const [bonus, setBonus] = React.useState(null);
  const [redo, setRedo] = React.useState(false);
  const [start, setStart] = React.useState(false);
  const [value, onChangeValue, reset] = useInput("");
  const [myNumbers, setMyNumbers] = React.useState([]);
  const timeouts = React.useRef([]);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (myNumbers.length === 6) {
      setStart(true);
    }
  }, [myNumbers]);

  const lottoPlay = () => {
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinballs((prevBalls) => [...prevBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
      setStart(false);
    }, 7000);

    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  };

  const checkValue = (input) => {
    if (value > 45) {
      return alert("45이하의 숫자를 입력하세요");
    }
    if (myNumbers.includes(value)) {
      return alert("숫자가 중복되었습니다.");
    }
    if (value === "") {
      return alert("숫자를 입력하세요");
    }
    return true;
  };

  const onClickAdd = () => {
    if (!checkValue(value)) {
      inputRef.current.focus();
      return;
    }
    setMyNumbers((prev) => [...prev, value]);

    inputRef.current.focus();
    reset("");
  };

  const onClickStart = () => {
    setStart(false);
    lottoPlay();
  };
  console.log("myNumbers: ", myNumbers);
  console.log("winNumbers: ", winNumbers);

  const onClickRedo = () => {
    setWinNumbers(getNumbers());
    setWinballs([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
    setMyNumbers([]);
    setStart(false);
  };

  return (
    <>
      <Title>로또 추첨기</Title>
      <LottoTitleStyle>내 번호</LottoTitleStyle>
      <MyNumber value={value} onChange={onChangeValue} onClick={onClickAdd} myNumbers={myNumbers} inputRef={inputRef} />
      {start && (
        <Button onClick={onClickStart} size={buttonSize.full}>
          번호 확인!
        </Button>
      )}
      {winBalls.length > 0 && <LottoTitleStyle>당첨 번호</LottoTitleStyle>}
      {winBalls.map((data, index) => {
        return <Ball key={`로또번호-${data}`} data={data} />;
      })}

      {bonus && (
        <>
          <TextStyle>보너스!</TextStyle>
          <Ball data={bonus} bonus />
        </>
      )}
      {redo && (
        <Button onClick={onClickRedo} size={buttonSize.full}>
          한번 더!
        </Button>
      )}
    </>
  );
}

const TextStyle = styled.p`
  padding: 10px 0 3px;
  margin: 0;
`;

const LottoTitleStyle = styled.strong`
  display: block;
  padding: 10px 0;
`;

export default Lotto;
