import React from "react";

const AddLiquidityAction = (props) => {
  // setup the 2 tokens into a LP object

  const approveLiquidityPair = () => {
    //show a button to approve trade
    props.actionCompleted(jsonOutput);
  };

  const makeLiquidityPair = () => {
    //use the token to make the trade
    props.actionCompleted(jsonOutput);
  };

  // remember to prompt the users to add the LP to their wallet if they havent
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

export default AddLiquidityAction;
