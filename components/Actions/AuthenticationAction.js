import React from "react";
import { useMoralis } from "react-moralis";
import { connect, useSelector, useDispatch } from "react-redux";
import { setAuth } from "../../redux/actions/moralis";
import {
  selectAuthenticationStatus,
  selectNetworkStatus,
} from "../../redux/selectors/moralis";
import * as types from "../../redux/types";

const AuthenticationAction = (props) => {
  const { authenticate } = useMoralis();
  const dispatch = useDispatch();
  const authenticationStatus = useSelector(selectAuthenticationStatus);
  const networkStatus = useSelector(selectNetworkStatus);

  const authProps = {
    provider: networkStatus?.chainId,
    signingMessage: "Simple Joe Authentication",
  };

  if (authenticationStatus) {
    this.props.actionCompleted({});
  }

  const completeAction = () => {
    if (!authenticationStatus) {
      authenticate(authProps);
      dispatch({ type: types.SET_AUTH, payload: true });
      props.actionCompleted(props);
    }
  };

  return (
    <div>
      <button
        className="font-light text-white text-2xl font-custom"
        onClick={() => completeAction()}
      >
        Connect Wallet
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.moralis,
});

const mapDispatchToProps = {
  setAuth: setAuth,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationAction);
