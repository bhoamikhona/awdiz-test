import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./actions";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </>
  );
};

export default Counter;
