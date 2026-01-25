import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  numOfPastries: 10,
};

const pastrySlice = createSlice({
  name: "pastry",
  initialState,
  reducers: {
    orderPastry: (state) => {
      state.numOfPastries--;
    },
    restockPastry: (state, action) => {
      state.numOfPastries += action.payload;
    },
  },
});

// actions is an object (no brackets)
export const { orderPastry, restockPastry } = pastrySlice.actions;
// direct export
export default pastrySlice.reducer;
