import React, { Component } from "react";
import AuthenticationAction from "./AuthenticationAction";
import CallApiAction from "./CallApiAction";
import Joe3D from "../ThreeJs/Joe3D";
import { useMoralis } from "react-moralis";

export default class ActionManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actionList: [],
      actionNum: 0,
    };

    this.currentAction = AuthenticationAction;
    this.canLoadNextComponent = true;
  }

  componentDidMount() {
    this.resetState();
  }

  resetState = () => {
    this.currentAction = AuthenticationAction;

    this.setState({
      actionList: [AuthenticationAction, CallApiAction],
      actionNum: 0,
    });
    this.canLoadNextComponent = true;
  };

  handleAction(props) {
    const newActionNum = this.state.actionNum + 1;
    console.log(newActionNum);

    this.setState({
      actionNum: newActionNum,
    });

    this.currentAction = this.state.actionList[newActionNum];
    this.canLoadNextComponent = false;
  }

  render() {
    console.log(this.currentAction);
    return (
      <div className="flex-col flex-grow flex items-center bg-black justify-center">
        <Joe3D />
        {React.createElement(this.currentAction, {
          actionCompleted: (props) => {
            this.handleAction(props);
          },
          newComponentMounted: () => {
            this.canLoadNextComponent = true;
          },
        })}
      </div>
    );
  }
}

// const AuthCheck = (props) => {
//   const { isAuthenticated } = useMoralis();
//   if (!isAuthenticated) {
//     props.resetActions();
//   }

//   return <div />;
// };
