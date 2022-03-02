import React, { useContext, useState } from "react";
import { MainContext } from "../../context/Context";
import { useMoralis } from "react-moralis";

const InvestmentAmountAction = (props) => {
  const [state, setState] = useState({
    investmentValue: "",
  });
  let prevVal = "";

  const context = useContext(MainContext);
  console.log(context);

  const completeAction = () => {
    context.setInvestmentAmount(inputValue);
    props.actionCompleted();
  };

  const isNumberKey = (val) => {
    var charCode = val.charCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
  };

  const onChangeInput = (evt) => {
    let val = evt.target.value;
    const   = val.slice(-1);
    if (isNumberKey(lastKeyPressed)) {
      prevVal = val;
    } else {
      val = prevVal;
    }

    setState((state) => ({
      ...state,
      investmentValue: val,
    }));
    console.log(state.investmentValue);
  };

  return (
    <div className="w-80 items-center justify-center pt-4 flex flex-col space-y-2">
      {/* <label className="text-white font-custom">Avax</label> */}
      <div className="grid-cols-4 border-b-2 border-white pr-2 ">
        <input
          className=" col-span-3 text-white w-48 text-2xl font-custom bg-black outline-none appearance-none"
          type="text"
          inputMode="decimal"
          pattern="^[0-9]*[.,]?[0-9]*$"
          required
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
      </button>
    </div>
  );
};

export default InvestmentAmountAction;
