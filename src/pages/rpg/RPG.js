import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { useInput } from "../../hooks/useInput";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Title from "../../components/title/Title";

const monsterList = [
  { name: "슬라임", hp: 25, att: 10, xp: 10 },
  { name: "스켈레톤", hp: 50, att: 15, xp: 20 },
  { name: "마왕", hp: 150, att: 35, xp: 50 },
];

function RPG() {
  const [start, setStart] = useState(true);
  const [game, setGame] = useState(false);
  const [battle, setBattle] = useState(false);
  const [value, onChangeValue, reset] = useInput("");
  const [monster, setMonster] = useState(null);
  const [hero, setHero] = useState(null);
  const [message, setMessage] = useState("");

  const inputRef = useRef(null);
  class Character {
    constructor(name, hp, xp, att) {
      this.name = name;
      this.maxHp = hp;
      this.hp = hp;
      this.xp = xp;
      this.att = att;
    }

    attack(target) {
      target.hp -= this.att;
    }
  }
  class Monster extends Character {
    constructor(name, hp, xp, att) {
      super(name, hp, xp, att);
    }
  }
  class Hero extends Character {
    constructor(name) {
      super(name, 100, 0, 10);
      this.lev = 1;
    }

    getXp(xp) {
      this.xp += xp;

      if (this.xp >= this.lev * 15) {
        this.xp -= this.lev * 15;
        this.lev += 1;
        this.maxHp += 5;
        this.hp = this.maxHp;
        setMessage(`레벨업! 레벨 ${this.lev}`);
      }
    }
  }

  const onClickStart = () => {
    setGame(true);
    setStart(false);
    reset("");
    setMessage("");
    const hero = new Hero(value);
    setHero(hero);
  };

  const onClickGame = () => {
    // 모험
    reset("");

    if (value === "1") {
      const randomIndex = Math.floor(Math.random() * monsterList.length);
      const randomMonster = monsterList[randomIndex];
      const monster = new Monster(
        randomMonster.name,
        randomMonster.hp,
        randomMonster.att,
        randomMonster.xp
      );
      setMonster(monster);

      setMessage(`몬스터를 만났다! ${monster.name}인 것 같다!`);
      setBattle(true);
      setGame(false);
    } else if (value === "2") {
      // 휴식
      hero.hp = hero.maxHp;
      setMessage("충분한 휴식을 취했다.");
    } else if (value === "3") {
      // 종료
      setGame(false);
      setStart(true);
      setMessage("");
      reset("");
    }
  };

  const onClickBattle = () => {
    reset("");
    inputRef.current.focus();

    if (value === "1") {
      hero.attack(monster);
      monster.attack(hero);

      if (hero.hp <= 0) {
        setMessage(`${hero.lev} 레벨에서 전사. 새 주인공을 생성하세요.`);
        setHero(null);
        setMonster(null);
        setStart(true);
        setBattle(false);
      } else if (monster.hp <= 0) {
        setMessage(`몬스터를 잡아 ${monster.xp} 경험치를 얻었다.`);
        hero.getXp(monster.xp);
        setMonster(null);
        setGame(true);
        setBattle(false);
      } else {
        setMessage(
          `${hero.att}의 데미지를 주고 ${monster.att}의 데미지를 받았다`
        );
      }
    } else if (value === "2") {
      // 회복
      monster.attack(hero);
      const recoverHp = Math.min(hero.maxHp, hero.hp + 20);
      hero.hp = recoverHp;
      setMessage("체력을 조금 회복했다");

      if (hero.hp <= 0) {
        setMessage(`${hero.lev} 레벨에서 전사. 새 주인공을 생성하세요.`);
        setHero(null);
        setMonster(null);
        setStart(true);
        setBattle(false);
      }
    } else if (value === "3") {
      // 도망
      setGame(true);
      setBattle(false);
      setMessage("부리나케 도망쳤다!");
      setMonster(null);
    }
  };

  return (
    <>
      <Title>RPG게임</Title>
      {start && (
        <>
          <span>주인공을 입력하세요!</span>
          <BoxStyle>
            <Input onChange={onChangeValue} value={value} />
            <Button type="button" onClick={onClickStart}>
              시작
            </Button>
          </BoxStyle>
        </>
      )}
      <div id="screen">
        {(game || battle) && (
          <div id="hero-stat">
            <StatStyle bold>{hero.name}</StatStyle>
            <StatStyle>(Lev {hero.lev}) </StatStyle>

            <StatStyle color={"red"}>
              hp : {hero.hp}/{hero.maxHp}
            </StatStyle>
            <StatStyle color={"blue"}>
              xp : {hero.xp}/{15 * hero.lev}
            </StatStyle>
            <StatStyle color={"orange"}>att : {hero.att}</StatStyle>
          </div>
        )}
        {game && (
          <GameBox>
            <div id="menu-1">1.모험</div>
            <div id="menu-2">2.휴식</div>
            <div id="menu-3">3.종료</div>
            <BoxStyle>
              <Input onChange={onChangeValue} value={value} />
              <Button type="button" onClick={onClickGame}>
                입력
              </Button>
            </BoxStyle>
          </GameBox>
        )}
        {battle && (
          <GameBox>
            <div id="battle-1">1.공격</div>
            <div id="battle-2">2.회복</div>
            <div id="battle-3">3.도망</div>
            <BoxStyle>
              <Input onChange={onChangeValue} value={value} ref={inputRef} />
              <Button type="button" onClick={onClickBattle}>
                입력
              </Button>
            </BoxStyle>
          </GameBox>
        )}
        <div id="message">{message}</div>
        {monster && (
          <div id="monster-stat">
            <StatStyle bold>{monster.name} </StatStyle>
            <StatStyle color={"red"}>
              hp : {monster.hp}/{monster.maxHp}
            </StatStyle>
            <StatStyle color={"blue"}>xp : {monster.xp}</StatStyle>
            <StatStyle color={"orange"}>att : {monster.att}</StatStyle>
          </div>
        )}
      </div>
    </>
  );
}

const BoxStyle = styled.div`
  display: flex;
  width: 215px;

  input {
    margin-right: 5px;
  }
`;

const GameBox = styled.div`
  padding: 10px 0;
`;

const StatStyle = styled.span`
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  padding-right: 10px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  color: ${(props) => props.color || "black"};
`;

export default RPG;
