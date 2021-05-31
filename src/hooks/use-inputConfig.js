// import { useState } from "react";
import { useReducer } from "react";

const initalInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      ...state,
      value: action.value,
    };
  }
  if (action.type === "BLUR") {
    return {
      ...state,
      isTouched: true,
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }
  return inputStateReducer;
};

///Custom React Hook used to validate use inputs in client side
const useInputConfig = (validation) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initalInputState
  );
  // const [value, setValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const validationRule = validation(inputState.value);
  const hasError = validationRule && inputState.isTouched;

  const onInputChangeHandler = (event) => {
    // setValue(event.target.value);
    dispatch({
      type: "INPUT",
      value: event.target.value,
    });
  };

  const onBlurTextFieldHandler = (event) => {
    dispatch({
      type: "BLUR",
    });
  };

  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };

  return {
    onInputChangeHandler: onInputChangeHandler,
    onBlurTextFieldHandler: onBlurTextFieldHandler,
    hasError: hasError,
    value: inputState.value,
    reset: reset,
  };
};

export default useInputConfig;
