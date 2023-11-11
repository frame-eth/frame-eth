import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/constants";
import { useContractReads } from "wagmi";

interface ContractFunction {
  functionName: string;
  args?: any[];
}

export const useReads = (functions: ContractFunction[]) => {
  const contracts = functions.map(({ functionName, args }) => ({
    address: CONTRACT_ADDRESS as any,
    abi: CONTRACT_ABI as any,
    functionName,
    args,
  }));

  const { data, isError, isLoading } = useContractReads({
    contracts,
    watch: true,
  });

  return { data, isError, isLoading };
};
