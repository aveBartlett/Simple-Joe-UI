import React, { Component } from "react";

export default class CallApiAction extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.newComponentMounted();
  }

  callYeildApi = () => {};

  completeAction = () => {
    let jsonOutput = {
      pair: {
        token1: {
          chainId: "",
          address: "",
        },
        token2: {
          chainId: "",
          address: "",
        },
      },
    };
    this.props.actionCompleted(jsonOutput);
  };

  render() {
    return (
      <div className="border-white border-solid border-2 hover:bg-white">
        <button
          className="font-light text-white text-lg font-custom px-2 hover:text-black"
          onClick={() => this.callYeildApi()}
        >
          Find best yeilds
        </button>
      </div>
    );
  }
}
