import React from "react";

function WordArray({ wordArray }) {
  return (
    <ul>
      {wordArray.map((data, index) => {
        return <li key={`${data}+${index}`}>{wordArray[index + 1]}</li>;
      })}
    </ul>
  );
}

export default WordArray;
