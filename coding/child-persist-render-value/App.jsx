import React, { useCallback, useRef, useState } from "react";
import ReactDOM from "react-dom";

export const useCounter = (initialVal) => {
  const [count, setCount] = useState(initialVal);

  // Export the increment fun from custom hook
  const increment = useCallback(() => setCount(count + 1), [count]);

  // Export the decrement fun from custom hook
  const decrement = useCallback(() => setCount(count - 1), [count]);

  return [count, increment, decrement];
};

const Persistentrender = () => {
  const counterRef = useRef(0);
  return <p>Persistent Render counter: {counterRef.current++}</p>;
};

const Counter = ({ ...props }) => {
  return (
    <>
      <p>Counter Value: {props.count}</p>
      <div>{props.children}</div>
    </>
  );
};

const Button = ({ ...props }) => (
  <button onClick={props.callback}>{props.op}</button>
);

const App = () => {
  // Use the custom hook that will show the count and + - fun
  const [count, increment, decrement] = useCounter(0);
  return (
    <>
      <Persistentrender />
      <Counter count={count}>
        <Button callback={increment} op="+" />
        <Button callback={decrement} op="-" />
      </Counter>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
