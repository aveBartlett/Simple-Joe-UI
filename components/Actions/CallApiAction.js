import React, { useContext } from "react";
import { MainContext } from "../../context/Context";
import { sleep } from "../Util/Util";
import { callApi } from "../Util/YeildFinderApi";

const CallApiAction = (props) => {
  const context = useContext(MainContext);

  const callYieldApi = async () => {
    const jsonOutput = await callApi();
    context.setLpOptionsJson(jsonOutput);
    props.actionCompleted();
  };

  return (
    <div
      className="border-slate-300 border-solid rounded-md
 border-2 flex items-center hover:bg-white"
    >
      <button
        className="font-light text-white text-2xl font-custom px-2 hover:text-black"
        onClick={async () => await callYieldApi()}
      >
        Find best yields
      </button>
    </div>
  );
};

export default CallApiAction;
