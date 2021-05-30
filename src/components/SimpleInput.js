import React, { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [Name, setName] = useState();
  // const inputNameRef = useRef();
  const [enteredValid, setEnteredValid] = useState(true);

  const nameInputHandler = (event) => {
    setName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (Name.trim() === "") {
      setEnteredValid(false);
      return;
    }
    setEnteredValid(true);
    console.log(Name);
    setName("");
    // const inputName = inputNameRef.current.value;
    // console.log(inputName);
    // inputNameRef.current.value='' DON'T MANIPULATE THE DOM DIRECTLY (NOT REACT SPECIFIC WAY)
  };

  const formClasses = enteredValid ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          // ref={inputNameRef}
          value={Name}
          onChange={nameInputHandler}
        />
        {!enteredValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
