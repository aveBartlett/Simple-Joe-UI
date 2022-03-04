import React from "react";
import { useMoralis } from "react-moralis";

const AuthenticationAction = (props) => {
  const { isAuthenticated, chainId } = useMoralis();

  const authProps = {
    provider: chainId,
    signingMessage: "Simple Joe Authentication",
  };

  if (isAuthenticated) {
    props.actionCompleted();
  }

  return (
    <div>
      <button
        className="font-light text-white text-lg font-custom"
        // onClick={() => completeAction()}
      >
        Connect your wallet bro
      </button>
    </div>
  );
};

export default AuthenticationAction;
