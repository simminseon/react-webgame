import React from "react";
import styled from "styled-components";

function Title({ children }) {
  return <TitleStyle>{children}</TitleStyle>;
}

const TitleStyle = styled.h1`
  padding: 0 5px;
  font-size: 18px;
  color: #222;
`;

export default Title;
