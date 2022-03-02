import { createContext } from "react";
import * as types from "./types";

export const MainContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_NETWORK:
      return {
        ...state,
        network: action.payload,
      };
    case types.SET_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case types.SET_LP_OPTIONS_JSON:
      return {
        ...state,
        tradeListJson: action.payload,
      };
    case types.SET_LP_JSON:
      return {
        ...state,
        selectedJson: action.payload,
      };
    case types.INCR_STEP:
      return {
        ...state,
        currentStep: state.currentStep++,
      };
    case types.DEC_STEP:
      return {
        ...state,
        currentStep: state.currentStep--,
      };
    default:
      return { ...state };
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getCart = async () => {};
};
