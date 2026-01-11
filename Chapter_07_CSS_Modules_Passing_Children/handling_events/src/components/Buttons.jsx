import "./Buttons.css";

const Button = (props) => {
  if (props.btnType == "success-btn") {
    return (
      <button type="button" className="btn btn-outline-success task-btn" onClick={props.clickHandler}>
        {props.btnText}
      </button>
    );
  } else if (props.btnType == "danger-btn") {
    return (
      <button type="button" className="btn btn-outline-danger task-btn" onClick={props.clickHandler}>
        {props.btnText}
      </button>
    );
  } else {
    return (
      <button type="button" className="btn btn-outline-info task-btn" onClick={props.clickHandler}>
        {props.btnText}
      </button>
    );
  }
};

export default Button;
