import "./TaskCard.css";
import Button from "./Buttons.jsx";

const TaskCard = (props) => {
  const deleteHandler = (taskName) => {
    console.log(`Deleting the Task ${taskName}`)
  }

  return (
      <div className="col-sm-6 mb-3 mb-sm-0 task-card">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.taskName}</h5>
            <p className="card-text">
              {props.taskDate}
            </p>
            <Button btnType="danger-btn" btnText="Delete" handler={() => deleteHandler(props.taskName)}/>
          </div>
        </div>
      </div>
  );
};

export default TaskCard;
