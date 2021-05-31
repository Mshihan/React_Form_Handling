import useInput from "./../hooks/use-input";

const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    hasError: nameInputIsInvalid,
    valueInputHandler: nameInputHandler,
    valueBlurHandler: nameInputBlurHandler,
    resetFunction: resetName,
  } = useInput((enteredValue) => {
    return enteredValue.trim() !== "";
  });

  const {
    enteredValue: enteredEmail,
    hasError: emailInputIsInvalid,
    valueInputHandler: emailInputHandler,
    valueBlurHandler: emailInputBlurHandler,
    resetFunction: resetEmail,
  } = useInput((enteredEmail) => {
    return enteredEmail.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
  });

  // const enteredEmail;
  // const emailInputIsInvalid;
  // const emailInputTouched;

  // const [enteredName, setName] = useState("");
  // const [nameInputTouched, setnameInputTouched] = useState(false);

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailInputTouched, setEmailInputTouched] = useState(false);

  // // const [formIsValid, setFormIsValid] = useState(false);

  // var mailformat =
  //  ;

  // const enteredValidEmail = ;
  // const enteredValidName = enteredName.trim() !== "";

  // const emailInputIsInvalid = emailInputTouched && !enteredValidEmail;
  // const nameInputIsInvalid = nameInputTouched && !enteredValidName;

  let formIsValid = false;

  if (!emailInputIsInvalid && !nameInputIsInvalid) {
    formIsValid = true;
  }

  // const nameInputBlurHandler = (event) => {
  //   setnameInputTouched(true);
  // };

  // const emailInputBlurHandler = (event) => {
  //   setEmailInputTouched(true);
  // };

  // const nameInputHandler = (event) => {
  //   setName(event.target.value);
  // };

  // const emailInputHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (nameInputIsInvalid) {
      return;
    } else if (emailInputIsInvalid) {
      return;
    }
    console.log(enteredName + "  " + enteredEmail);

    resetName();
    resetEmail();
  };

  const formClassesName = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  const formClassesEmail = !emailInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formClassesName}>
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

      <div className={formClassesEmail}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid email address</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
