export const retrieveAccountDetails = async (
  web3Api,
  accountAdress,
  chainId
) => {
  const options = { chain: chainId, address: accountAdress };
  const avaxBalance = await web3Api.getNativeBalance(options);
  console.log(avaxBalance);
  return avaxBalance;
};
