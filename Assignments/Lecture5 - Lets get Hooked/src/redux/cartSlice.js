import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./types";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, {payload}) => {
      state.items.push(payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, payload) => {},
  },
});

export const { reducer: cartReducer, actions: cartActions } = cartSlice;
