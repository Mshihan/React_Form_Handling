import useInputConfig from "./../hooks/use-inputConfig";

const BasicForm = (props) => {
  const {
    onInputChangeHandler: onFirstNameInputChangeHandler,
    onBlurTextFieldHandler: onBlurFirstName,
    hasError: hasErrorFirstName,
    value: firstName,
    reset: resetFirstName,
  } = useInputConfig((value) => {
    return value.trim() === "";
  });

  const {
    onInputChangeHandler: onLastNameInputChangeHandler,
    onBlurTextFieldHandler: onBlurLastNameHander,
    hasError: hasErrorLastName,
    value: lastName,
    reset: resetLastName,
  } = useInputConfig((value) => {
    return value.trim() === "";
  });

  const {
    onInputChangeHandler: onEmailInputChangeHandler,
    onBlurTextFieldHandler: onBlurEmailHander,
    hasError: hasErrorEmail,
    value: email,
    reset: resetEmail,
  } = useInputConfig((enteredEmail) => {
    return !enteredEmail.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
  });

  const validForm = !hasErrorFirstName && !hasErrorLastName && !hasErrorEmail;

  const onSubmitFormHandler = (event) => {
    event.preventDefault();
    if (!validForm) {
      return;
    }
    console.log(firstName + "\n" + lastName + "\n" + email);
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const classesFirstName = hasErrorFirstName
    ? "form-control invalid"
    : "form-control";

  const classesLastName = hasErrorLastName
    ? "form-control invalid"
    : "form-control";

  const classesEmail = hasErrorEmail ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className="control-group">
        <div className={classesFirstName}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={onFirstNameInputChangeHandler}
            onBlur={onBlurFirstName}
          />
          {hasErrorFirstName && (
            <p className="error-text">**First Name must not be empty</p>
          )}
        </div>
        <div className={classesLastName}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            value={lastName}
            id="name"
            onChange={onLastNameInputChangeHandler}
            onBlur={onBlurLastNameHander}
          />
          {hasErrorLastName && (
            <p className="error-text">**Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={classesEmail}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={email}
          type="text"
          id="name"
          onChange={onEmailInputChangeHandler}
          onBlur={onBlurEmailHander}
        />
        {hasErrorEmail && (
          <p className="error-text">**Email must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
