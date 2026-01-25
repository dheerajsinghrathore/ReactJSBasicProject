const { createSlice, configureStore } = require("@reduxjs/toolkit");

// Step 2: Create Slice
const initialState = { count: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    incrementByValue: (state, action) => {
      state.counter += action.payload;
    },
    reset: (state) => {
      state.counter = 0;
    },
  },
});
// Extract Action Creators
const { increment, decrement, incrementByValue, reset } = counterSlice.actions;

// Extract reducers
const counterReducer = counterSlice.reducer;

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
