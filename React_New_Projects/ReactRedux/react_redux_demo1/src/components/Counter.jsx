import React from "react";
import {
  incrementAction,
  decrementAction,
  resetAction,
} from "../redux/actions/actionCreators";
import { useSelector, useDispatch } from "react-redux";
export default function Counter() {
  const count = useSelector((state) => {
    return state.count;
  });
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementAction());
  };
  const handleDecrement = () => {
    dispatch(decrementAction());
  };
  const handleReset = () => {
    dispatch(resetAction());
  };
  return (
    <div>
      <strong>Counter:{count}</strong>
      <br />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
