import "./App.css";
import AddTodo from "./components/AddTodo";

function App() {
  const displayInputChange = (event) => {
    console.log(`${event.target.value}`, event)
  }

  return (
    <>
      <div className="app-container">
        <AddTodo
          inputBoxesArray={[
            { inputType: "text", inputText: "Enter the Todo" , onChangeHandler: displayInputChange},
            { inputType: "date", inputText: "Enter Date" },
          ]}
        />
      </div>
    </>
  );
}

export default App;
