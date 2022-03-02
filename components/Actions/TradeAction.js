import React from "react";

const TradeAction = (props) => {
  // get selected json
  // look at what trade we are going to make
  // check by looking at if the last step was a trade step
  //   if it WASN'T we make the trade the FIRST token
  //   if it WAS we make the trade the SECOND token

  const approveTrade = () => {
    //show a button to approve trade
    props.actionCompleted(jsonOutput);
  };

  const makeTrade = () => {
    //use the token to make the trade
    props.actionCompleted(jsonOutput);
  };

  // remember to prompt the users to add the token to their wallet if they havent
  return (
    <div>
      <h1 className="font-light text-white text-2xl font-custom">
        .... we make trades and add liquidity
      </h1>
    </div>
  );
};

export default TradeAction;
