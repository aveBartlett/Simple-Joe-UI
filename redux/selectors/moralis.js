export function selectAuthenticationStatus(state) {
  return state.isAuthenticated;
}

export function selectNetworkStatus(state) {
  return state.network;
}
