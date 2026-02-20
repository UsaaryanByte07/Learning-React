import { useReducer, useRef } from "react";
import "./App.css";
import { counterReducer } from "./store/CounterReducer";

function App() {
  const incrementByInput = useRef();
  const [currentVal, counterDispatch] = useReducer(counterReducer, 0);

  return (
    <>
      <h1>Count : {currentVal} </h1>
      <button onClick={() => counterDispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <button onClick={() => counterDispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
      <button onClick={() => counterDispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => counterDispatch({ type: "DOUBLE" })}>
        Double
      </button>
      <br />
      <button
        onClick={() => {
          if(incrementByInput.current != undefined){
          const num = incrementByInput.current.value;
          incrementByInput.current.value = "";
          counterDispatch({
            type: "INCREMENT_BY",
            payload: { num },
          });
          }
        }}
      >
        Increment By
      </button>
      <input type="number" ref={incrementByInput} />
    </>
  );
}

export default App;
