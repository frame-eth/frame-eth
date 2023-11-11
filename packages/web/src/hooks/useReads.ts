import { getContract } from "@/constants";
import { useContractReads } from "wagmi";

interface ContractFunction {
  functionName: string;
  args?: any[];
}

export const useReads = (chainId: number, functions: ContractFunction[]) => {
  const contracts = functions.map(({ functionName, args }) => ({
    ...getContract(chainId),
    functionName,
    args,
  }));

  const { data, isError, isLoading } = useContractReads({
    contracts,
    watch: true,
  });

  return { data, isError, isLoading };
};
