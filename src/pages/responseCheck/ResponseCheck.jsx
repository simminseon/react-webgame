import React from "react";
import styled from "styled-components";
import Button from "../../components/button/Button";
import { buttonTheme, buttonSize } from "../../components/button/style";

const colorTypes = {
  blue: "blue",
  red: "red",
  green: "green",
};

function ResponseCheck() {
  const [color, setColor] = React.useState(colorTypes.blue);
  const [logs, setLogs] = React.useState("클릭해서 시작하세요!");
  const [result, setResult] = React.useState([]);
  const timeout = React.useRef(null);
  const startTime = React.useRef();
  const endTime = React.useRef();

  const onClickCheck = React.useCallback(() => {
    if (color === colorTypes.blue) {
      timeout.current = setTimeout(() => {
        setColor(colorTypes.green);
        setLogs("클릭하세요!!");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000 + 2000));

      setColor(colorTypes.red);
      setLogs("초록색으로 바뀌면 클릭하세요!");
    } else if (color === colorTypes.red) {
      clearTimeout(timeout.current);
      setLogs("너무 성급했어요!! 다시시작!");
      setColor(colorTypes.blue);
    } else if (color === colorTypes.green) {
      endTime.current = new Date();
      setColor(colorTypes.blue);
      setResult((prev) => {
        return [...prev, endTime.current - startTime.current];
      });
      setLogs("클릭해서 시작하세요!");
    }
  }, [color]);

  const onClickReset = () => {
    setColor(colorTypes.blue);
    setLogs("클릭해서 시작하세요!");
    setResult([]);
  };

  return (
    <>
      <BoxStyle onClick={onClickCheck} color={color}>
        {logs}
      </BoxStyle>
      {result.length !== 0 && (
        <>
          <TestStyle>평균시간 : {result.reduce((a, c) => a + c / result.length)}ms</TestStyle>
          <Button onClick={onClickReset} theme={buttonTheme.orange} size={buttonSize.full}>
            Reset
          </Button>
        </>
      )}
    </>
  );
}

export default ResponseCheck;

const BoxStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 200px;

  background-color: ${(props) => props.color};
  color: #fff;
`;

const TestStyle = styled.div`
  padding: 10px 0;
`;
