import React from "react";
import styled from "styled-components";
import Title from "../../components/title/Title";
import Ball from "./Ball";

const getNumbers = () => {
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
  const [winBall, setWinball] = React.useState([]);
  const [bonus, setBonus] = React.useState(null);
  const [redo, setRedo] = React.useState(false);
  const timeouts = React.useRef();

  React.useEffect(() => {
    console.log("첫번째1!!");
    return console.log("두전때!!!");
  }, []);

  //   for (let i = 0; i < winNumbers.length; i++) {
  //     setTimeout(() => {
  //       setWinball([...winBall, winNumbers[i]]);
  //     }, (i + 1) * 1000);
  //   }

  return (
    <>
      <Title>로또 추첨기</Title>
      {winNumbers.map((data, index) => {
        return index === 6 ? (
          <Ball key={`로또번호-${data}`} bonus={true} data={data} />
        ) : (
          <Ball key={`로또번호-${data}`} bonus={false} data={data} />
        );
      })}
    </>
  );
}

export default Lotto;
