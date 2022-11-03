import React from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { START_GAME, TableContext } from "./MineSearch";

function Form() {
  const [row, setRow] = React.useState(10);
  const [cell, setCell] = React.useState(10);
  const [mine, setMine] = React.useState(20);
  const { dispatch } = useContext(TableContext);

  const onChangeRow = React.useCallback((e) => {
    setRow(e.target.value);
  }, []);
  const onChangeCell = React.useCallback((e) => {
    setCell(e.target.value);
  }, []);
  const onChangeMine = React.useCallback((e) => {
    setMine(e.target.value);
  }, []);
  const onClickBtn = useCallback(() => {
    dispatch({ type: START_GAME, row, cell, mine });
  }, [row, cell, mine]);

  // console.log(row, cell, mine);
  return (
    <div>
      <input
        type="number"
        placeholder="세로"
        vlaue={row}
        onChange={onChangeRow}
      />
      <input
        type="number"
        placeholder="가로"
        vlaue={cell}
        onChange={onChangeCell}
      />
      <input
        type="number"
        placeholder="지뢰"
        vlaue={mine}
        onChange={onChangeMine}
      />
      <button onClick={onClickBtn}>시작</button>
    </div>
  );
}

export default Form;
