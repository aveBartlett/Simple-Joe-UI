import React from "react";
import { AVALANCHE_TESTNET_PARAMS } from "../components/Util/Constants";
import { MainContext } from "./Context";

class MainProvider extends React.Component {
  state = {
    main: {
      network: AVALANCHE_TESTNET_PARAMS,
      tradeListJson: {},
      selectedJson: {},
      investmentAmount: 0,
      currentStep: 0,
    },
  };

  render() {
    return (
      <MainContext.Provider
        value={{
          main: this.state.main,
          setNetwork: (network) => {
            this.setState((prevState) => ({
              main: {
                ...prevState.main,
                network,
              },
            }));
          },
          setLpOptionsJson: (tradeListJson) => {
            this.setState((prevState) => ({
              main: {
                ...prevState.main,
                tradeListJson,
              },
            }));
          },
          setLpJson: (selectedJson) => {
            this.setState((prevState) => ({
              main: {
                ...prevState.main,
                selectedJson,
              },
            }));
          },
          setInvestmentAmount: (investAmount) => {
            this.setState((prevState) => ({
              main: {
                ...prevState.main,
                investAmount,
              },
            }));
          },
          incrStep: () => {
            this.setState((prevState) => ({
              main: {
                ...prevState.main,
                currentStep: state.currentStep++,
              },
            }));
          },
          decStep: () => {
            this.setState((prevState) => ({
              main: {
                ...prevState.main,
                currentStep: state.currentStep--,
              },
            }));
          },
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export default MainProvider;
