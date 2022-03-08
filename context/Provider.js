import React from "react";
import { AVALANCHE_TESTNET_PARAMS } from "../components/Util/Constants";
import { MainContext } from "./Context";

class MainProvider extends React.Component {
  state = {
    main: {
      tradeListJson: {},
      selectedJson: {},
      investmentAmount: 0,
      currentStep: 0,
    },
    network: AVALANCHE_TESTNET_PARAMS,
    accountDetails: {},
  };

  render() {
    return (
      <MainContext.Provider
        value={{
          main: this.state.main,
          setNetwork: (network) => {
            this.setState((prevState) => ({
              ...prevState,
              network,
            }));
          },
          setAccountDetails: (accountDetails) => {
            this.setState((prevState) => ({
              ...prevState,
              accountDetails,
            }));
          },
          setLpOptionsJson: (tradeListJson) => {
            this.setState((prevState) => ({
              ...prevState,
              main: {
                ...prevState.main,
                tradeListJson,
              },
            }));
          },
          setLpJson: (selectedJson) => {
            this.setState((prevState) => ({
              ...prevState,
              main: {
                ...prevState.main,
                selectedJson,
              },
            }));
          },
          setInvestmentAmount: (investAmount) => {
            this.setState((prevState) => ({
              ...prevState,
              main: {
                ...prevState.main,
                investAmount,
              },
            }));
          },
          incrStep: () => {
            this.setState((prevState) => ({
              ...prevState,
              main: {
                ...prevState.main,
                currentStep: state.currentStep++,
              },
            }));
          },
          decStep: () => {
            this.setState((prevState) => ({
              ...prevState,
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
