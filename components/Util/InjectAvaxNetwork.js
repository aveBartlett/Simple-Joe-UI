import {
  AVALANCHE_MAINNET_PARAMS,
  AVALANCHE_TESTNET_PARAMS,
  AVALANCHE_LOCAL_PARAMS,
} from "./Constants";

export default function addAvalancheNetwork(network) {
  window.ethereum
    .request({
      method: "wallet_addEthereumChain",
      params: [
        network === "main"
          ? AVALANCHE_MAINNET_PARAMS
          : network === "test"
          ? AVALANCHE_TESTNET_PARAMS
          : AVALANCHE_LOCAL_PARAMS,
      ],
    })
    .catch((error) => {
      console.log(error);
    });
}
