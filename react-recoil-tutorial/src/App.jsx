import React, { useEffect } from "react";
import { atom, RecoilRoot, useRecoilState } from "recoil";

const counterState = atom({
  key: "counterState",
  default: 0,
});

const App = () => {
  const [counter, setCounter] = useRecoilState(counterState);

  const resetCounter = () => {
    setCounter(0);
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>
      <button onClick={resetCounter}>reset</button>
    </div>
  );
};

export default App;
