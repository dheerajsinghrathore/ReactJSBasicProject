const {
  createAction,
  createReducer,
  configureStore,
} = require("@reduxjs/toolkit");

import logger from "redux-logger";
// Step 1: Create Actions
const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");
const incrementByValue = createAction("INCREMENT_BY_VALUE");
const reset = createAction("RESET");

// Step 2: Create Reducer
const initialState = { count: 0 };

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.count += 1;
    })
    .addCase(decrement, (state) => {
      state.count -= 1;
    })
    .addCase(incrementByValue, (state, action) => {
      state.count += action.payload;
    })
    .addCase(reset, (state) => {
      state.count = 0;
    })
    .addDefaultCase((state) => {
      return state;
    });
});

// Step 3: Configure Store
const store = configureStore({
  reducer: counterReducer,
});
// Subscribe to store updates
store.subscribe(() => {
  console.log("State updated:", store.getState());
});

// Dispatch some actions
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementByValue(5));
store.dispatch(reset());
