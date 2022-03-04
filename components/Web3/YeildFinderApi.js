import { AVALANCHE_TESTNET_PARAMS } from "../Util/Constants";

export const callApi = async () => {
  const chainId = AVALANCHE_TESTNET_PARAMS.chainId;

  return new Promise((resolve, reject) => {
    resolve({
      results: [
        {
          riskLevel: "low",
          pair: {
            address: "0x2A8A315e82F85D1f0658C5D66A452Bbdd9356783",
            apy: 0.1221,
            token1: {
              //USDC.e
              name: "USDC.e",
              chainId: chainId,
              address: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
            },
            token2: {
              //USDC
              name: "USDC",
              chainId: chainId,
              address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
            },
          },
        },
        {
          riskLevel: "medium",
          pair: {
            address: "0xA389f9430876455C36478DeEa9769B7Ca4E3DDB1",
            apy: 0.3795,
            token1: {
              //wavax
              name: "AVAX",
              chainId: chainId,
              address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
            },
            token2: {
              //usdc.e
              name: "USDC.e",
              chainId: chainId,
              address: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
            },
          },
        },
        {
          riskLevel: "high",
          pair: {
            address: "0x4dC5291cdc7Ad03342994E35D0Ccc76De065A566",
            apy: 9.612,
            token1: {
              //wavax
              name: "AVAX",
              chainId: chainId,
              address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
            },
            token2: {
              //HeC
              name: "HeC",
              chainId: chainId,
              address: "0xC7f4debC8072e23fe9259A5C0398326d8EfB7f5c",
            },
          },
        },
      ],
    });
  });
};
