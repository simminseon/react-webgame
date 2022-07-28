import React from "react";
import Button from "../../components/button/Button";
import { buttonTheme, buttonSize } from "../../components/button/style";

function Try({ data, index, result, onClick }) {
  return (
    <>
      <div>
        {index + 1}번째 시도!
        <br />
        {data.outData
          ? `입력값 : ${data.triesData} -> 아웃!`
          : `입력값 : ${data.triesData} -> ${data.strikeData}스트라이크, ${data.ballData}볼`}
      </div>

      {result && (
        <>
          <Button
            onClick={onClick}
            theme={buttonTheme.orange}
            size={buttonSize.full}
          >
            다시시작!
          </Button>
        </>
      )}
    </>
  );
}

export default Try;
