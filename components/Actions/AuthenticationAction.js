import React, { Component } from "react";
import { useMoralis } from "react-moralis";
import { AVALANCHE_TESTNET_PARAMS } from "../Util/InjectAvaxNetwork";

export default class AuthenticationAction extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.authenticated = false;
    this.props.newComponentMounted();
  }

  completeAction = (props) => {
    if (!this.authenticated) {
      this.authenticated = true;
      this.props.actionCompleted(props);
    }
  };

  render() {
    return (
      <div>
        <Authenticate handleSelection={this.completeAction} />
      </div>
    );
  }
}

const Authenticate = (props) => {
  const { authenticate, isAuthenticated } = useMoralis();

  if (isAuthenticated) {
    props.handleSelection({});
  }

  const authProps = {
    onComplete: () => props.handleSelection({}),
    provider: AVALANCHE_TESTNET_PARAMS.chainId,
    signingMessage: "Simple Joe Authentication",
  };

  return (
    <div>
      <button
        className="font-light text-white text-2xl font-custom"
        onClick={() => authenticate(authProps)}
      >
        Connect Wallet
      </button>
    </div>
  );
};
