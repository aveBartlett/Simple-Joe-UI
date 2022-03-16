import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/Context";
import { getImgElementFromTokenAddress } from "../Util/ComponentUtil";

const InvestmentAmountAction = (props) => {
  const [state, setState] = useState({
    investmentValue: "",
    buttonMessage: "Enter an amount",
    buttonDisabled: true,
  });

  const regex = /^[0-9]*[.,]?[0-9]*$/;
  const context = useContext(MainContext);
  console.log(context);
  const maxValue = context.main.accountDetails.avaxBalance.decimalValue - 0.05;
  // const investmentPair = context.main.selectedJson;

  useEffect(() => {
    if (state.investmentValue == "") {
      setState((state) => ({
        ...state,
        buttonMessage: "Enter an amount",
        buttonDisabled: true,
      }));
    } else if (state.investmentValue > maxValue) {
      setState((state) => ({
        ...state,
        buttonMessage: "Insufficient AVAX",
        buttonDisabled: true,
      }));
    } else {
      setState((state) => ({
        ...state,
        buttonMessage: "Supply",
        buttonDisabled: false,
      }));
    }
  }, [state.investmentValue]);

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

  const fillInputWMaxValue = () => {
    setState((state) => ({
      ...state,
      investmentValue: maxValue,
    }));
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
        {/* <div className="flex justify-center">
          {getImgElementFromTokenAddress(investmentPair.pair.token1.address)}
          {getImgElementFromTokenAddress(investmentPair.pair.token2.address)}
        </div> */}
        <input
          className="col-span-3 text-white w-48 text-2xl font-custom bg-black outline-none appearance-none"
          type="text"
          inputMode="decimal"
          pattern={regex}
          required
          onKeyPress={(evt) => validateNumFormat(evt)}
          onChange={(evt) => onChangeInput(evt)}
          value={state.investmentValue}
          placeholder={maxValue}
          name="investmentValue"
        ></input>
        <button
          className="font-light text-slate-500 text-md font-custom hover:text-white"
          onClick={() => fillInputWMaxValue()}
        >
          max
        </button>
      </div>
      <div className="">
        <button
          disabled={state.buttonDisabled}
          className="border-slate-300 border-solid rounded-md disabled:bg-neutral-800 disabled:text-neutral-500
     border-2 hover:bg-white w-52 py-1 text-center w-font-light text-white hover:text-black text-lg font-custom"
          onClick={() => completeAction()}
        >
          {state.buttonMessage}
        </button>
      </div>
    </div>
  );
};

export default InvestmentAmountAction;
