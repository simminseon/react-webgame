import React from "react";
import styled from "styled-components";

function Stat({ target, hero }) {
  const colorSet = {
    hp: "green",
    xp: "blue",
    att: "orange",
  };

  const heroXp = `${target.xp}/${15 * target.lev}`;

  return (
    <>
      <StatStyle bold>{target.name}</StatStyle>
      {hero && <StatStyle>(Lev {target.lev}) </StatStyle>}

      <StatStyle color={colorSet.hp}>
        hp : {target.hp}/{target.maxHp}
      </StatStyle>
      <StatStyle color={colorSet.xp}>
        {hero ? `xp : ${heroXp}` : target.xp}
      </StatStyle>
      <StatStyle color={colorSet.att}>att : {target.att}</StatStyle>
    </>
  );
}

const StatStyle = styled.span`
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  padding-right: 10px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: ${(props) => props.color || "black"};
`;

export default Stat;
