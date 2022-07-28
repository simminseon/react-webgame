import React from "react";
import { useRoutes, Link } from "react-router-dom";
import styled from "styled-components";
import Calculator from "../pages/calculator/Calculator";
import Home from "../pages/home/Home";
import WordRelay from "../pages/wordRelay/WordRelay";
import NumberBaseball from "../pages/numberBaseball/NumberBaseball";
import ResponseCheck from "../pages/responseCheck/ResponseCheck";
import Lotto from "../pages/lotto/Lotto";

function Router() {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "wordRelay", element: <WordRelay /> },
    { path: "calculator", element: <Calculator /> },
    { path: "numberBaseball", element: <NumberBaseball /> },
    { path: "responseCheck", element: <ResponseCheck /> },
    { path: "lotto", element: <Lotto /> },
  ]);

  return (
    <>
      <NavListStyle>
        <NavItemStyle>
          <Link to="/">홈</Link>
        </NavItemStyle>
        <NavItemStyle>
          <Link to="/wordRelay">끝말잇기</Link>
        </NavItemStyle>
        <NavItemStyle>
          <Link to="/calculator">계산기</Link>
        </NavItemStyle>
        <NavItemStyle>
          <Link to="/numberBaseball">숫자야구</Link>
        </NavItemStyle>
        <NavItemStyle>
          <Link to="/responseCheck">반응체크</Link>
        </NavItemStyle>
        <NavItemStyle>
          <Link to="/lotto">로또 추첨기</Link>
        </NavItemStyle>
      </NavListStyle>
      {element}
    </>
  );
}

const NavListStyle = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 20px;
`;

const NavItemStyle = styled.li`
  margin-right: 10px;

  a {
    font-weight: bold;
    font-size: 16px;
    color: #222;
    text-decoration: none;
  }
`;

export default Router;
