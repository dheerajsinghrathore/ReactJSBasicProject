import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../Features/cake/cakeSlice";
import pastryReducer from "../Features/pastry/pastrySlice";

export const store = configureStore({
  reducer: { cake: cakeReducer, pastry: pastryReducer },
});
