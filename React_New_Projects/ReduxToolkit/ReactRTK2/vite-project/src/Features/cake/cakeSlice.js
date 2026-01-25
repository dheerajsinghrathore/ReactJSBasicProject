import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  numOfCakes: 5,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    orderCake: (state) => {
      state.numOfCakes--;
    },
    restockCake: (state) => {
      state.numOfCakes += 5;
    },
  },
});

export const { orderCake, restockCake } = cakeSlice.actions;
export default cakeSlice.reducer;
