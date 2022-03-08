import React, { useContext, useState } from "react";
import { MainContext } from "../../context/Context";
import { getImgElementFromTokenAddress } from "../Util/ComponentUtil";

const InvestmentAmountAction = (props) => {
  const [state, setState] = useState({
    investmentValue: "",
  });

  const regex = /^[0-9]*[.,]?[0-9]*$/;
  const context = useContext(MainContext);
  const investmentPair = context.main.selectedJson;

  const completeAction = () => {
    context.setInvestmentAmount(state.investmentValue);
    props.actionCompleted();
  };

  const validateNumFormat = (evt) => {
    var keyEvent = evt || window.event;

    // Handle paste
    if (keyEvent.type === "paste") {
      key = event.clipboardData.getData("text/plain");
    } else {
      // Handle key press
      var key = keyEvent.keyCode || keyEvent.which;
      key = String.fromCharCode(key);
    }
    if (!regex.test(key)) {
      keyEvent.returnValue = false;
      if (keyEvent.preventDefault) keyEvent.preventDefault();
    }
  };

  const onChangeInput = (evt) => {
    let val = evt.target.value;

    setState((state) => ({
      ...state,
      investmentValue: val,
    }));
  };

  return (
    <div className="w-80 items-center justify-center pt-4 flex flex-col space-y-2">
      {/* <label className="text-white font-custom">Avax</label> */}
      <div className="grid-cols-4 border-b-2 border-white pr-2 ">
        <input
          className=" col-span-3 text-white w-48 text-2xl font-custom bg-black outline-none appearance-none"
          type="text"
          inputMode="decimal"
          pattern={regex}
          required
          onKeyPress={(evt) => validateNumFormat(evt)}
          onChange={(evt) => onChangeInput(evt)}
          value={state.investmentValue}
          placeholder="100"
          name="investmentValue"
        ></input>
        <button
          className="font-light text-slate-500 text-md font-custom hover:text-white"
          onClick={() => completeAction()}
        >
          max
        </button>
      </div>
      <button
        className="w-font-light text-white text-xl font-custom hover:text-black border-slate-300 border-solid rounded-md
     border-2 hover:bg-white w-28"
        onClick={() => completeAction()}
      >
        Supply
        <div className="flex justify-center">
          {getImgElementFromTokenAddress(investmentPair.pair.token1.address)}
          {getImgElementFromTokenAddress(investmentPair.pair.token2.address)}
        </div>
      </button>
    </div>
  );
};

export default InvestmentAmountAction;
