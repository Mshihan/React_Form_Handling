import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = isTouched && !valueIsValid;

  const valueBlurHandler = (event) => {
    setIsTouched(true);
  };

  const valueInputHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const resetFunction = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    hasError,
    valueInputHandler,
    valueBlurHandler,
    resetFunction,
  };
};

export default useInput;
