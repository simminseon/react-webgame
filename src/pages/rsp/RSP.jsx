import React from "react";
import styled from "styled-components";

const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};

const scores = {
  바위: 0,
  가위: 1,
  보: -1,
};

const computerChoice = (coord) => {
  if (coord === "0") {
    return "바위";
  } else if (coord === "-142px") {
    return "가위";
  } else if (coord === "-284px") {
    return "보";
  }
};

function RSP() {
  const [imgCoord, setImgCoord] = React.useState("0");
  const [result, setResult] = React.useState("");
  const [score, setScore] = React.useState(0);
  const interval = React.useRef(null);

  React.useEffect(() => {
    interval.current = setInterval(() => {
      console.log("imgCoord: ", imgCoord);
      if (imgCoord === rspCoords.바위) {
        setImgCoord(rspCoords.가위);
      } else if (imgCoord === rspCoords.가위) {
        setImgCoord(rspCoords.보);
      } else if (imgCoord === rspCoords.보) {
        setImgCoord(rspCoords.바위);
      }
    }, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, [interval.current]);

  const onClickMe = (choice) => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;

    if (diff === 0) {
      setResult("비겼습니다!!");
    } else if ([-1, 2].includes(diff)) {
      setResult("이겼습니다!!");
      setScore((prev) => prev + 1);
    } else {
      setResult("졌습니다!");
      setScore((prev) => prev - 1);
    }

    console.log("myScore: ", myScore);
    console.log("cpuScore: ", cpuScore);
  };

  return (
    <>
      <ComputerStyle style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
      <button onClick={() => onClickMe("가위")}>가위</button>
      <button onClick={() => onClickMe("바위")}>바위</button>
      <button onClick={() => onClickMe("보")}>보</button>
      <div>나 : {result}</div>
      <div>점수 : {score}</div>
    </>
  );
}

const ComputerStyle = styled.div`
  width: 142px;
  height: 210px;
`;

export default RSP;
