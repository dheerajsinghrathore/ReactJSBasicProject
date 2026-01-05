// Import createStore from redux if needed
const { createStore } = require("redux");

// Define the initial state of the counter
const initialState = {
  count: 0,
};

const incrementAction = () => {
  return { type: "INCREMENT" };
};
const decrementAction = () => {
  return { type: "DECREMENT" };
};

const incrementValueAction = (value) => {
  return { type: "INCREMENT_BY_VALUE", payload: value };
};

const resetAction = () => {
  return { type: "RESET" };
};

// Define the reducer function to handle state changes based on actions
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "INCREMENT_BY_VALUE":
      return { ...state, count: state.count + action.payload };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);
// 1. subscribe
store.subscribe(() => {
  console.log("Updated State:", store.getState());
});
// 2. dispatch
store.dispatch(incrementAction());

store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(incrementValueAction(5));

module.exports = {
  counterReducer,
  incrementAction,
  decrementAction,
  incrementValueAction,
  resetAction,
};
