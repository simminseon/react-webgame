import React from "react";

function WordRelay() {
  const [peopleNum, setPeopleNum] = React.useState("");
  const [start, setStart] = React.useState(false);
  const [order, setOrder] = React.useState(1);
  const [word, setWord] = React.useState("");
  const [value, setValue] = React.useState("");

  const onChangeInput = (e) => {
    setValue(e.target.value);
    setPeopleNum(e.target.value);
  };

  const onClickButton = () => {
    console.log("test");
  };

  const onClickStart = () => {
    setStart(true);
  };

  return (
    <>
      {start ? (
        <div id="game">
          <div>{order}번째 참가자</div>
          <div>제시어: {word}</div>
          <input type="text" id="wordInput" onChange={onChangeInput} value={value} />
          <button type="button" onClick={onClickButton}>
            입력
          </button>
        </div>
      ) : (
        <div>
          <div>몇명이 참가하나요?</div>
          <input type="text" onChange={onChangeInput} value={peopleNum} />
          <button type="button" onClick={onClickStart}>
            시작
          </button>
        </div>
      )}
    </>
  );

  // return (
  //   <>

  //
  //   </>
  // );
}

export default WordRelay;
