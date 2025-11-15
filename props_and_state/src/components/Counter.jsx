import { useState } from "react";

const Counter = () => {
  // const [variable, setterFunction] = useState(intialValue)
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 5);
  }

  function decrement() {
    setCount(count - 5);
  }

  return (
    <>
      <button onClick={increment}>+</button>
      <h2>Count : {}</h2>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Counter;
