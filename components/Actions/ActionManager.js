import React, { Component } from "react";
import Joe3D from "../ThreeJs/Joe3D";
import AuthenticationAction from "./AuthenticationAction";
import CallApiAction from "./CallApiAction";
import SelectPairAction from "./SelectPairAction";
import InvestmentAmountAction from "./InvestmentAmountAction";
import TradeAction from "./TradeAction";
import AddLiquidityAction from "./AddLiquidityAction";
import { sleep } from "../Util/Util";

const ACTION_ORDER = [
  AuthenticationAction,
  CallApiAction,
  SelectPairAction,
  InvestmentAmountAction,
  TradeAction,
  TradeAction,
  AddLiquidityAction,
];

export default class ActionManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actionList: ACTION_ORDER,
      actionNum: 0,
      currentAction: ACTION_ORDER[0],
    };
    this.canGoToNextAction = true;
  }

  componentDidMount() {
    // this.resetState();
  }

  resetState = () => {
    this.currentAction = AuthenticationAction;

    this.setState({
      actionList: ACTION_ORDER,
      actionNum: 0,
      currentAction: ACTION_ORDER[0],
    });
  };

  handleAction() {
    if (this.canGoToNextAction) {
      const newActionNum = this.state.actionNum + 1;

      this.setState({
        actionNum: newActionNum,
        currentAction: ACTION_ORDER[newActionNum],
      });

      this.canGoToNextAction = false;
    }
  }

  waitForNextAction() {
    sleep(100).then(() => {
      this.canGoToNextAction = true;
    });
  }

  render() {
    const actionToRender = this.state.currentAction;
    return (
      <div className="flex-col flex-grow flex items-center bg-black justify-center">
        <Joe3D />
        {React.createElement(actionToRender, {
          actionCompleted: () => {
            this.handleAction();
            this.waitForNextAction();
          },
        })}
      </div>
    );
  }
}
