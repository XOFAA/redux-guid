// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import cartReducer from "./cart/slice"

const rootReducer = combineReducers({
  user: userReducer,
  addCart:cartReducer
})

export default rootReducer;
