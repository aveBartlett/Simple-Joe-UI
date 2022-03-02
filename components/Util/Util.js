import { networks } from "./Constants";

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getNetworkFromChainId = (chainId) => {
  for (const network of networks) {
    if (chainId && chainId.toUpperCase() === network.chainId.toUpperCase()) {
      return network;
    }
  }
};

export const isChainIdValid = (chainId) => {
  for (const network of networks) {
    if (chainId && chainId.toUpperCase() === network.chainId.toUpperCase()) {
      return true;
    }
  }
  return false;
};

export const getImgElementFromTokenAddress = (address) => {
  //if wavax, return the local avax token
  if (address === "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7") {
    return (
      <img src="/avalanche_token_round.3e178e42.png" className="w-8 h-8" />
    );
  }
  const alt = address;
  const src = `https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/${address}/logo.png`;
  return <img className="w-8 h-8" alt={alt} src={src} />;
};
