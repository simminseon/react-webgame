import React, { useCallback } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { CODE, OPEN_CELL, TableContext } from "./MineSearch";

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: "#444",
      };
    case CODE.OPENED:
      return {
        background: "white",
      };
    default:
      return {
        background: "white",
      };
  }
};

const getTdText = (code) => {
  switch (code) {
    case CODE.NORMAL:
      return "";
    case CODE.MINE:
      return "X";
    case CODE.FLAG_MINE:

    default:
      return "";
  }
};

function Td({ rowIndex, cellIndex }) {
  const { tableData, dispatch } = useContext(TableContext);

  const onClickTd = useCallback(() => {
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.NORMAL:
        dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.MINE:
        // dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex });
        return;
    }
    dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
  }, []);

  return (
    <td style={getTdStyle(tableData[rowIndex][cellIndex])} onClick={onClickTd}>
      {getTdText(tableData[rowIndex][cellIndex])}
    </td>
  );
}

export default Td;
