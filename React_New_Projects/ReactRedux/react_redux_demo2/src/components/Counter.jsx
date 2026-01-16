import React from "react";
import {
  incrementAction,
  decrementAction,
  resetAction,
  incrementByValueAction,
} from "../redux/actions/actionCreators";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export default function Counter() {
  const [inputValue, setInputValue] = useState("");

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
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleIncrementByValue = () => {
    if (inputValue === "") return;
    dispatch(incrementByValueAction(Number(inputValue)));
    setInputValue("");
  };

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1 className="counter-title">Redux Counter</h1>
        <div className="counter-display">
          <span className="counter-value">{count}</span>
        </div>

        <div className="input-group">
          <input
            type="number"
            placeholder="Enter value"
            value={inputValue}
            onChange={handleChange}
            className="counter-input"
          />
          <button onClick={handleIncrementByValue} className="btn btn-primary">
            Add Value
          </button>
        </div>

        <div className="button-grid">
          <button onClick={handleIncrement} className="btn btn-success">
            Increment
          </button>
          <button onClick={handleDecrement} className="btn btn-danger">
            Decrement
          </button>
          <button onClick={handleReset} className="btn btn-outline">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
