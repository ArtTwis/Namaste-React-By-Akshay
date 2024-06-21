import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {cartReducer} from "./cartSlice";

const rootReducers = combineReducers({
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
