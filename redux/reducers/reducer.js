import * as types from "../types";
import { AVALANCHE_TESTNET_PARAMS } from "../../components/Util/InjectAvaxNetwork";

export default function reducer(
  state = {
    network: AVALANCHE_TESTNET_PARAMS,
    isAuthenticated: false,
  },
  action
) {
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
    default:
      return { ...state };
  }
}
