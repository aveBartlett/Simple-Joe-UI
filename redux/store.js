import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { rootReducer } from "./reducers/rootReducer";

const middleware = [thunk];

const bindMiddleware = (middleware) => {
  const { composeWithDevTools } = require("redux-devtools-extension");
  return composeWithDevTools(applyMiddleware(...middleware));
};

const makeStore = createStore(rootReducer, bindMiddleware(middleware));
//const store = createStore(rootReducer, compose(applyMiddleware(...middleware)))

const initStore = () => {
  return makeStore;
};

export const wrapper = createWrapper(initStore);
