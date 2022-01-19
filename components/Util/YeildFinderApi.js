const chainId = AVALANCHE_TESTNET_PARAMS.chainId;
export default callApi = async () => {
  return new Promise((resolve, reject) => {
    resolve({
      pair: {
        address: "0xa389f9430876455c36478deea9769b7ca4e3ddb1",
        token1: {
          //wavax
          chainId: chainId,
          address: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
        },
        token2: {
          //usdc
          chainId: chainId,
          address: "0xc4102797d5657a7310f04A993F4B28a16cBA2258",
        },
      },
    });
  });
};
