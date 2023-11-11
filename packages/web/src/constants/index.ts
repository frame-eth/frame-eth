import { Contracts } from "./deployedContracts";

export const getContract = (chainId: number) => {
  return {
    address: Contracts[chainId].address,
    abi: Contracts[chainId].abi,
  };
};
