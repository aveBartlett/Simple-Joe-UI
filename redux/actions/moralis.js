import * as types from "../types";

export const setNetwork = (networkObj) => (dispatch) =>
  dispatch({
    type: types.SET_NETWORK,
    payload: networkObj,
  });

export const setAuth = (isAuth) => (dispatch) =>
  dispatch({
    type: types.SET_AUTH,
    payload: isAuth,
  });
