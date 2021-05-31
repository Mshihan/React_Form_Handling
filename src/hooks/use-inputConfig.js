import { useState } from "react";
///Custom React Hook used to validate use inputs in client side
const useInputConfig = (validation) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const validationRule = validation(value);
  const hasError = validationRule && isTouched;

  const onInputChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const onBlurTextFieldHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    onInputChangeHandler,
    onBlurTextFieldHandler,
    hasError,
    value,
    reset,
  };
};

export default useInputConfig;
