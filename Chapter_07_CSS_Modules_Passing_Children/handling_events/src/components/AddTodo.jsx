import "./AddTodo.css";
import Button from "./Buttons.jsx";
import  Input from "./Inputs.jsx"

const AddTodo = (props) => {
  const adddHandler = () => {
    console.log(`Adding the Task`)
  }

  return (
    <div className="task-add-container">
        {props.inputBoxesArray.map((inputBox) => {
            return <Input key={inputBox.inputText} inputType={inputBox.inputType} inputText={inputBox.inputText} onChangeHandler = {inputBox.onChangeHandler}/>
        })}
      <Button btnType="success-btn" btnText="Add" clickHandler={() => adddHandler()} />
    </div>
  );
};

export default AddTodo;
