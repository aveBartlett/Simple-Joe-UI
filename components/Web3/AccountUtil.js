export const retrieveAccountDetails = async (web3Api, address, chainId) => {
  const options = { chain: chainId, address: address };
  const avaxBalance = await web3Api.account.getNativeBalance(options);
  console.log({ address, avaxBalance });
  return { address, avaxBalance };
};
