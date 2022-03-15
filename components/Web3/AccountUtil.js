import { getNetworkFromChainId } from "./NetworkUtil";

export const retrieveAccountDetails = async (web3Api, address, chainId) => {
  const network = getNetworkFromChainId(chainId);
  const options = { chain: chainId, address: address };
  const avaxBalance = await web3Api.account.getNativeBalance(options);

  const decimalValue =
    avaxBalance.balance / Math.pow(10, network.nativeCurrency.decimals);
  avaxBalance.decimalValue = decimalValue;
  console.log({ address, avaxBalance });

  return { address, avaxBalance };
};
