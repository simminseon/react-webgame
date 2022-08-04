import React from "react";
import styled from "styled-components";

const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

function RSP() {
  const [imgCoord, setImgCoord] = React.useState(0);
  const [result, setResult] = React.useState("");
  const [score, setScore] = React.useState(0);
  const interval = React.useRef(null);

  React.useCallback(() => {
    console.log("useCallback");
    //     interval.current = setInterval(() => {
    //       console.log("setInterval");
    //       if (imgCoord === rspCoords.바위) {
    //         console.log("바위");
    //         setImgCoord(rspCoords.가위);
    //       } else if (imgCoord === rspCoords.가위) {
    //         console.log("보");
    //         setImgCoord(rspCoords.보);
    //       } else if (imgCoord === rspCoords.보) {
    //         console.log("가위");
    //         setImgCoord(rspCoords.바위);
    //       }
    //       console.log("test");
    //     }, 1000);
  }, [interval.current]);

  console.log("바깥");
  const onClickMe = (e) => {
    clearInterval(interval.current);
    // if (e.target.textContent === "가위") {
    //   setMe("가위");
    // } else if (e.target.textContent === "바위") {
    //   setMe("바위");
    // } else if (e.target.textContent === "보") {
    //   setMe("보");
    // }
    // console.log(me);
  };

  return (
    <>
      <ComputerStyle style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
      <button onClick={onClickMe}>가위</button>
      <button onClick={onClickMe}>바위</button>
      <button onClick={onClickMe}>보</button>
      <div>나 : {}</div>
    </>
  );
}

const ComputerStyle = styled.div`
  width: 142px;
  height: 210px;
`;

export default RSP;
