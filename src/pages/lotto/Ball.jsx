import React from "react";
import styled from "styled-components";

function Ball({ data, bonus }) {
  return <LottoItemStyle bonus={bonus}>{data}</LottoItemStyle>;
}

const LottoItemStyle = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 2px;
  border-radius: 50%;
  background-color: ${(props) => (props.bonus ? "#f0f" : "red")};
  color: white;
  vertical-align: top;
`;

export default React.memo(Ball);
