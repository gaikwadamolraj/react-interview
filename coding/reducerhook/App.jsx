import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const ACTION_TYPE = {
  PLUS: "INCREMENT",
  MINUS: "DCREMENT",
};

const initialState = { count: 0 };
const countReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.PLUS:
      return { count: state.count + action.amount };
    case ACTION_TYPE.MINUS:
      return { count: state.count - action.amount };
    default:
      return state;
  }
};

function App() {
  const [{ count }, dispatch] = useReducer(countReducer, initialState);

  return (
    <div style={{ "text-align": "center", "font-family": "sans-serif" }}>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: ACTION_TYPE.PLUS, amount: 1 })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: ACTION_TYPE.PLUS, amount: 2 })}>
        +2
      </button>
      <button
        disabled={count === 0}
        onClick={() => dispatch({ type: ACTION_TYPE.MINUS, amount: 1 })}
      >
        -1
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
