import React, { useContext } from "react";
import { MainContext } from "../../context/Context";
import { getImgElementFromTokenAddress } from "../Util/Util";

const SelectPairAction = (props) => {
  //select the json object
  const context = useContext(MainContext);
  const lpPairOptionsJson = context.main.tradeListJson;

  const generateHtmlButtonsFromLpPairJson = (lpPairOptionsJson) => {
    return lpPairOptionsJson.results.map((lpPair) => {
      return (
        <div
          className="border-slate-300 border-solid rounded-md
     border-2 flex items-center hover:bg-white p-3"
        >
          <button
            className="font-light text-white text-2xl font-custom px-2 hover:text-black"
            onClick={() => completeAction(lpPair)}
          >
            <div className="flex justify-center">
              {getImgElementFromTokenAddress(lpPair.pair.token1.address)}
              {getImgElementFromTokenAddress(lpPair.pair.token2.address)}
            </div>
            <h1 className="text-base pt-2 ">
              {lpPair.pair.token1.name}-{lpPair.pair.token2.name}
            </h1>
            <h1 className="text-base">{lpPair.pair.apy * 100}% APY</h1>
            <h1 className="pt-2 font-bold">{lpPair.pair.riskLevel}</h1>
          </button>
        </div>
      );
    });
  };

  let lpPairOptionsHtml = generateHtmlButtonsFromLpPairJson(lpPairOptionsJson);

  const completeAction = (selectedLpPair) => {
    //dispatch it to the store
    context.setLpJson(selectedLpPair);

    props.actionCompleted();
  };

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
