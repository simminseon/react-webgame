import React from "react";

export const useInput = (initialValue) => {
  const [valuew, setValuew] = React.useState(initialValue);
  const onChange = (e) => {
    setValuew(e.target.value);
  };
  const reset = () => {
    setValuew("");
  };

  return [valuew, onChange, reset];
};
