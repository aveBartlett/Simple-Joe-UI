import React, { Component, useContext } from "react";
import MetaMask3D from "../ThreeJs/MetaMask3D";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import Popup from "reactjs-popup";
import { AVALANCHE_TESTNET_PARAMS } from "../Util/Constants";
import {
  getNetworkFromChainId,
  isChainIdValid,
  addAvalancheNetwork,
} from "../Web3/NetworkUtil";
import { retrieveAccountDetails } from "../Web3/AccountUtil";
import Router from "next/router";
import { MainContext } from "../../context/Context";

export default class Account extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="bg-black shadow-lg font-custom">
        <div className="max-w-6xl mx-auto pl-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              {/* <!-- Website Logo --> */}
              <div>
                <a href="#" className="flex items-center py-4 pl-2">
                  <AvaxChainConfirmation />
                  <AccountMessage />
                  <MetaMask3D />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const AvaxChainConfirmation = () => {
  const { chainId, isAuthenticated } = useMoralis();
  const web3Api = useMoralisWeb3Api();
  const { setNetwork } = context;

  if (
    isAuthenticated &&
    chainId &&
    context.main.network &&
    context.main.network.chainId.toUpperCase() != chainId.toUpperCase()
  ) {
    const network = getNetworkFromChainId(chainId);
    setNetwork(network);
  }

  if (isAuthenticated && chainId && !isChainIdValid(chainId)) {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-50 backdrop-blur-sm">
        <div className="transition-all fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-80 h-44 border-white border-solid border-2 bg-black z-10">
          <div className=" items-stretch flex flex-col">
            <div className="flex justify-center">
              <h1 className="flex font-normal font-custom text-white text-2xl py-4 text-center">
                Switch to {AVALANCHE_TESTNET_PARAMS.chainName}
              </h1>
            </div>

            <div className="flex justify-center pt-5">
              <button
                onClick={() => addAvalancheNetwork("test")}
                className="font-normal font-custom text-white hover:text-orange-200 text-lg"
              >
                Switch Networks
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};

const AccountMessage = () => {
  const { authenticate, isAuthenticated, logout, user, chainId } = useMoralis();
  const context = useContext(MainContext);
  const { setAccountDetails } = context;
  const web3Api = useMoralisWeb3Api();

  if (isAuthenticated) {
    const account = user.get("ethAddress");
    const options = { chain: chainId, address: accountAdress };
    const avaxBalance = await web3Api.getNativeBalance(options);
    console.log(avaxBalance);
    const accountDetails = retrieveAccountDetails(web3Api, account, chainId);
    setAccountDetails(accountDetails);
    const text = `0x...${account.substring(
      account.length - 6,
      account.length
    )}`;
    return (
      <Popup
        trigger={
          <div className="border-white border-solid border-2 flex items-center">
            <div className="px-2 py-1">
              <svg
                className="fill-white"
                width="30"
                height="30"
                viewBox="0 0 647 647"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M647 323.5C647 502.164 502.164 647 323.5 647C144.836 647 0 502.164 0 323.5C0 144.836 144.836 0 323.5 0C502.164 0 647 144.836 647 323.5ZM231.83 452.23H169.048C155.856 452.23 149.339 452.23 145.365 449.687C141.074 446.905 138.451 442.296 138.133 437.21C137.895 432.521 141.153 426.799 147.67 415.355L302.687 142.116C309.283 130.513 312.621 124.712 316.833 122.566C321.363 120.262 326.767 120.262 331.297 122.566C335.509 124.712 338.847 130.513 345.443 142.116L377.311 197.746L377.474 198.03L377.474 198.03C384.598 210.478 388.211 216.79 389.788 223.415C391.536 230.647 391.536 238.276 389.788 245.508C388.199 252.184 384.622 258.542 377.39 271.178L295.964 415.117L295.753 415.486C288.581 428.036 284.947 434.396 279.91 439.197C274.427 444.442 267.831 448.256 260.599 450.402C254.003 452.23 246.612 452.23 231.83 452.23ZM390.376 452.237H480.338H480.338C493.61 452.237 500.285 452.237 504.259 449.615C508.55 446.833 511.252 442.144 511.491 437.058C511.721 432.524 508.533 427.023 502.286 416.245C502.073 415.877 501.856 415.504 501.636 415.124L456.576 338.037L456.063 337.17C449.731 326.461 446.533 321.054 442.43 318.964C437.9 316.659 432.576 316.659 428.046 318.964C423.913 321.109 420.575 326.752 413.979 338.116L369.078 415.203L368.924 415.469C362.351 426.815 359.066 432.485 359.303 437.138C359.621 442.224 362.243 446.913 366.535 449.694C370.429 452.237 377.104 452.237 390.376 452.237Z"
                />
              </svg>
            </div>
            <span className="pr-2 font-normal text-white hover:text-orange-200 text-sm sm:text-lg">
              {text}
            </span>
          </div>
        }
        closeOnEscape
      >
        {(close) => (
          <div className="transition-all fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-80 h-32 border-white border-solid border-2 bg-black z-10">
            <div className=" items-stretch flex flex-col">
              <div className="flex justify-center">
                <h1 className="flex font-normal font-custom text-white text-2xl py-4">
                  logout of metamask?
                </h1>
              </div>

              <div className="grid grid-cols-2 py-3">
                <button
                  onClick={() => close()}
                  className="font-normal font-custom text-white hover:text-orange-200 text-lg"
                >
                  cancel
                </button>
                <button
                  onClick={() => {
                    logout();
                    Router.reload(window.location.pathname);
                  }}
                  className="font-normal font-custom text-white hover:text-orange-200 text-lg"
                >
                  confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </Popup>
    );
  } else {
    const text = "Connect Wallet";
    return (
      <div className="border-white hover:border-orange-200 text-center border-solid border-2">
        <span
          className="sm:px-4 font-normal text-white hover:text-orange-200 text-xs sm:text-base"
          onClick={() => authenticate()}
        >
          {text}
        </span>
      </div>
      // position="center center"
    );
  }
};
