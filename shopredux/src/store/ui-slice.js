import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: true, counter: 0 },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      if (state.counter > 0) {
        state.counter--;
      }
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
