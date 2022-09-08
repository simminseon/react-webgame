import React from "react";
import Title from "../../components/title/Title";
import Table from "./Table";
import Form from "./Form";
import { createContext } from "react";

export const CODE = {
  MINE: -7, // 지뢰
  NORMAL: -1, // 닫힌 칸(지뢰X)
  QUESTION: -2, // 물음표 칸(지뢰X)
  FLAG: -3, // 깃발 칸(지뢰X)
  QUESTION_MINE: -4, // 물음표 칸(지뢰O)
  FLAG_MINE: -5, // 깃발 칸(지뢰O)
  CLICKED_MINE: -6, // 닫힌 칸(지뢰O)
  OPENED: 0, // 정상적으로 클릭한 칸, 0 이상이면 다 OPENED
};

export const TableContext = createContext({
  tableData: [],
  dispatch: () => {},
});

// const colArray = Array(10).fill(null);
// const rowArray = Array(10).fill(colArray);

const initialState = {
  tableData: [],
  timer: 0,
  result: "",
};
console.log(initialState.tableData.length);
const plantMine = (row, cell, mine) => {
  const cellArr = Array(null).fill(cell);
  const rowArr = Array(cellArr).fill(row);
  // console.log(row, cell, mine);
  console.log([rowArr]);
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
