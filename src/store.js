// store.js
import { configureStore } from "@reduxjs/toolkit";
import seatingReducer from "./features/seatingSlice";

export const store = configureStore({
  reducer: {
    seating: seatingReducer,
  },
});
