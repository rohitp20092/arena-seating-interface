import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSection: null,
  selectedSeat: null,
};

const seatingSlice = createSlice({
  name: "seating",
  initialState,
  reducers: {
    selectSection: (state, action) => {
      state.selectedSection = action.payload;
    },
    selectSeat: (state, action) => {
      state.selectedSeat = action.payload;
    },
    clearSelection: (state) => {
      state.selectedSection = null;
      state.selectedSeat = null;
    },
  },
});

export const { selectSection, selectSeat, clearSelection } =
  seatingSlice.actions;
export default seatingSlice.reducer;
