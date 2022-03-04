import React, { useContext } from "react";
import { MainContext } from "../../context/Context";
import { LpPairButton } from "../Util/ComponentUtil";

const SelectPairAction = (props) => {
  //select the json object
  const context = useContext(MainContext);
  const lpPairOptionsJson = context.main.tradeListJson;

  const generateHtmlButtonsFromLpPairJson = (lpPairOptionsJson) => {
    const completeAction = (selectedLpPair) => {
      //dispatch it to the store
      context.setLpJson(selectedLpPair);
      console.log(context);

      props.actionCompleted();
    };

    return lpPairOptionsJson.results.map((lpPair) => {
      return LpPairButton(() => completeAction(lpPair), lpPair);
    });
  };

  let lpPairOptionsHtml = generateHtmlButtonsFromLpPairJson(lpPairOptionsJson);

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-light text-white text-base font-custom pb-2">
        {" "}
        Choose a Liquidity Pair based on your Risk Tolerance
      </h1>
      <div className="flex items-center space-x-7 ">{lpPairOptionsHtml}</div>
    </div>
  );
};

export default SelectPairAction;
