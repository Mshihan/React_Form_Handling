import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setName] = useState("");
  const [enteredValid, setEnteredValid] = useState(false);
  const [nameInputTouched, setnameInputTouched] = useState(false);

  const nameInputBlurHandler = (event) => {
    setnameInputTouched(true);
    if (enteredName.trim() === "") {
      setEnteredValid(false);
      return;
    }
  };

  const nameInputHandler = (event) => {
    setName(event.target.value);
    if (enteredName.trim() !== "") {
      setEnteredValid(true);
      return;
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setnameInputTouched(true);
    if (enteredName === "") {
      setEnteredValid(false);
      return;
    }
    setEnteredValid(true);
    console.log(enteredName);
    setName("");
    setnameInputTouched(false);
  };

  const nameInputIsInvalid = nameInputTouched && !enteredValid;

  const formClasses = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
