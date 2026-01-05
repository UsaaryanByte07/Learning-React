import './Inputs.css'

const Input = (props) => {
  if (props.inputType == "text") {
    return (
      <div className="form-floating mb-3 task-input">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder={props.inputText}
        />
        <label htmlFor="floatingInput">{props.inputText}</label>
      </div>
    );
  }
  if (props.inputType == "date") {
    return <div className="form-floating mb-3 task-input">
        <input
          type="date"
          className="form-control"
          id="floatingInput"
          placeholder={props.inputText}
        />
        <label htmlFor="floatingInput">{props.inputText}</label>
      </div>
  }
};

export default Input;
