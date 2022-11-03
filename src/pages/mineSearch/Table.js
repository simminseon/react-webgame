import React from "react";
import { useContext } from "react";
import { TableContext } from "./MineSearch";
import Tr from "./Tr";

function Table() {
  const tableArr = [];
  const { tableData } = useContext(TableContext);
  console.log(tableData);
  return (
    <table>
      <tbody>
        {Array(tableData.length)
          .fill()
          .map((tr, i) => (
            <Tr rowIndex={i} />
          ))}
      </tbody>
    </table>
  );
}

export default Table;
