import { combineReducers } from "redux";
import moralis from "./reducer";

const combinedReducers = combineReducers({
  moralis,
});

export const rootReducer = (state, action) => {
  console.log("inside root");
  return combinedReducers(state, action);
};
