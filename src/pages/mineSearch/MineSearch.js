import React from "react";
import Title from "../../components/title/Title";
import Table from "./Table";
import Form from "./Form";
import { createContext } from "react";

export const CODE = {
  MINE: -7, // 지뢰
  NORMAL: -1, // 정상
  QUESTION: -2, // 물음표
  FLAG: -3, // 깃발
  QUESTION_MINE: -4, // 물음표 - 지뢰
  FLAG_MINE: -4, // 깃발 - 지뢰
  CLICKED_MINE: -6, // 지뢰 클릭
  OPENED: 0, // 정상적으로 클릭한 칸, 0 이상이면 다 OPENED
};

export const TableContext = createContext({
  tableData: [],
  dispatch: () => {},
});

const initialState = {
  tableData: [],
  timer: 0,
  result: "",
};

const plantMine = (row, cell, mine) => {
  console.log(row, cell, mine);
};

export const START_GAME = "START_GAME";

const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        tableData: plantMine(action.row, action.cell, action.mine),
      };
    default:
      return state;
  }
};

function MineSearch() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = React.useMemo(
    () => ({ tableData: state.tableData, dispatch }),
    [state.tableData]
  );

  return (
    <TableContext.Provider value={value}>
      <Title>지뢰찾기</Title>
      <Form />
      <div>{state.timer}</div>
      <Table />
      <div>{state.result}</div>
    </TableContext.Provider>
  );
}

export default MineSearch;
