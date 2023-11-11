import * as chains from "wagmi/chains";

export type TChainAttributes = {
  nativeCurrencyTokenAddress?: string;
};

export const getBlockExplorerAddressLink = (network: chains.Chain, address: string): string => {
  const blockExplorerBaseURL = network.blockExplorers?.default?.url;

  if (!blockExplorerBaseURL) return `https://etherscan.io/address/${address}`;

  return `${blockExplorerBaseURL}/address/${address}`;
};

export const getTargetNetwork = (): chains.Chain & Partial<TChainAttributes> => {
  const configuredNetwork = chains.sepolia;

  return {
    ...configuredNetwork,
  };
};
