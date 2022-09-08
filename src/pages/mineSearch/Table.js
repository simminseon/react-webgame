import React from "react";
import Tr from "./Tr";
import { useContext } from "react";
import { TableContext } from "./MineSearch";

function Table() {
  const tableArr = [];
  const { dispatch } = useContext(TableContext);
  return (
    <table>
      <tbody>
        <Tr />
      </tbody>
    </table>
  );
}

export default Table;
