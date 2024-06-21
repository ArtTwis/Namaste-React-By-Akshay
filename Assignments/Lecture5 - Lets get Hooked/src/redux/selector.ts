import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./hooks";
import { initialState } from "./types";

export const selectDomain = (state: RootState) => state.cart || initialState;

export const selectItems = createSelector(
  [selectDomain],
  (state) => state.items
);