import { getContract } from "@/constants";
import { useContractRead } from "wagmi";

export const useRead = (chainId: number, functionName: string, args?: any[]) => {
  const { data, isError, isLoading } = useContractRead({
    ...getContract(chainId),
    functionName,
    args,
    watch: true,
  });

  return { data, isError, isLoading };
};
