import React from "react";

let count = 0;

const Counter = () => {
  const CountFn = () => {
    count++;
    console.log(count);
  };

  return (
    <div>
      <button onClick={CountFn}>Считалочка</button>
    </div>
  );
};

export default Counter;