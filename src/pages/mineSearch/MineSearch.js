import React from "react";
import Title from "../../components/title/Title";
import Table from "./Table";
import Form from "./Form";
import { createContext, useMemo } from "react";

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

const initialState = {
  tableData: [],
  timer: 0,
  result: "",
};

const plantMine = (row, cell, mine) => {
  const candidate = Array(row * cell)
    .fill()
    .map((data, i) => {
      return i;
    });

  const shuffle = [];
  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];

    shuffle.push(chosen);
  }
  const data = [];
  for (let i = 0; i < row; i++) {
    const rowData = [];
    data.push(rowData);
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  }

  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / cell);
    const hor = shuffle[k] % cell;

    data[ver][hor] = CODE.MINE;
  }
  return data;
};

export const START_GAME = "START_GAME";
export const OPEN_CELL = "OPEN_CELL";

const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        tableData: plantMine(action.row, action.cell, action.mine),
      };
    case OPEN_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      tableData[action.row][action.cell] = CODE.OPENED;
      return {
        ...state,
        tableData,
      };
    }
    default:
      return state;
  }
};

function MineSearch() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = useMemo(
    () => ({ tableData: state.tableData, dispatch }),
    [state.tableData]
  );
  console.log(state.tableData);
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
