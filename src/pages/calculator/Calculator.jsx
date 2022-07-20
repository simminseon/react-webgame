import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import { buttonTheme } from "./themeStyle";

function Calculator() {
  const [firstNum, setFirstNum] = React.useState("");
  const [secondNum, setSecondNum] = React.useState("");
  const [operate, setOperate] = React.useState("");
  const [result, setResult] = React.useState("");

  const onClickNumber = (e) => {
    if (!operate) {
      // 비었을때
      setFirstNum((prev) => prev + e.target.textContent);
      setResult((prev) => prev + e.target.textContent);
      console.log("첫번째 값: ", firstNum);
      return;
    }

    if (!secondNum) {
      // 두번째 비었을때
      setResult("");
    }

    setSecondNum((prev) => prev + e.target.textContent);
    setResult((prev) => prev + e.target.textContent);
  };
  const onClickOperator = (e) => {
    if (!firstNum && e.target.textContent === "-") {
      setFirstNum(e.target.textContent + firstNum);
      setResult(e.target.textContent + firstNum);
      return;
    }

    if (firstNum === "") {
      alert("숫자를 먼저 입력하세요1111!");
    } else {
      setOperate(e.target.textContent);
    }

    if (secondNum) {
      switch (operate) {
        case "+":
          setResult(parseInt(firstNum) + parseInt(secondNum));
          setFirstNum(parseInt(firstNum) + parseInt(secondNum));
          break;
        case "-":
          setResult(parseInt(firstNum) - parseInt(secondNum));
          setFirstNum(parseInt(firstNum) - parseInt(secondNum));
          break;
        case "x":
          setResult(parseInt(firstNum) * parseInt(secondNum));
          setFirstNum(parseInt(firstNum) * parseInt(secondNum));
          break;
        case "/":
          setResult(parseInt(firstNum) / parseInt(secondNum));
          setFirstNum(parseInt(firstNum) / parseInt(secondNum));
          break;
        default:
          break;
      }

      setSecondNum("");
    }
  };

  const onClickReset = () => {
    setFirstNum("");
    setSecondNum("");
    setOperate("");
    setResult("");
  };

  const onClickCalculator = () => {
    if (secondNum) {
      switch (operate) {
        case "+":
          setResult(parseInt(firstNum) + parseInt(secondNum));
          setFirstNum(parseInt(firstNum) + parseInt(secondNum));
          break;
        case "-":
          setResult(parseInt(firstNum) - parseInt(secondNum));
          setFirstNum(parseInt(firstNum) - parseInt(secondNum));
          break;
        case "x":
          setResult(parseInt(firstNum) * parseInt(secondNum));
          setFirstNum(parseInt(firstNum) * parseInt(secondNum));
          break;
        case "/":
          setResult(parseInt(firstNum) / parseInt(secondNum));
          setFirstNum(parseInt(firstNum) / parseInt(secondNum));
          break;
        default:
          break;
      }

      setOperate("");
      setSecondNum("");
    } else {
      alert("숫자를 먼저 입력하세요.");
    }
  };
  return (
    <>
      <HeadWrapStyle>
        <OperateBoxStyle>{operate}</OperateBoxStyle>
        <Input value={result} readOnly={true} />
      </HeadWrapStyle>
      <div>
        <Button onClick={onClickNumber} value={7}></Button>
        <Button onClick={onClickNumber} value={8}></Button>
        <Button onClick={onClickNumber} value={9}></Button>
        <Button onClick={onClickOperator} value={"+"} theme={buttonTheme.orange}></Button>
      </div>
      <div>
        <Button onClick={onClickNumber} value={4}></Button>
        <Button onClick={onClickNumber} value={5}></Button>
        <Button onClick={onClickNumber} value={6}></Button>
        <Button onClick={onClickOperator} value={"-"} theme={buttonTheme.orange}></Button>
      </div>
      <div>
        <Button onClick={onClickNumber} value={1}></Button>
        <Button onClick={onClickNumber} value={2}></Button>
        <Button onClick={onClickNumber} value={3}></Button>
        <Button onClick={onClickOperator} value={"/"} theme={buttonTheme.orange}></Button>
      </div>
      <div>
        <Button onClick={onClickReset} value={"C"} theme={buttonTheme.darkGray}></Button>
        <Button onClick={onClickNumber} value={0}></Button>
        <Button onClick={onClickCalculator} value={"="} theme={buttonTheme.darkGray}></Button>
        <Button onClick={onClickOperator} value={"x"} theme={buttonTheme.orange}></Button>
      </div>
    </>
  );
}

const HeadWrapStyle = styled.div`
  display: flex;
`;
const OperateBoxStyle = styled.div`
  width: 50px;
  height: 50px;
  margin: 5px;
  border: 1px solid #222;
  line-height: 50px;
  background: #fff;
  text-align: center;
  box-sizing: border-box;
`;
export default Calculator;
