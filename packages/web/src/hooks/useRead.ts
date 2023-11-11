import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/constants";
import { useContractRead } from "wagmi";

export const useRead = (functionName: string, args?: any[]) => {
  const { data, isError, isLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName,
    args,
    watch: true,
  });

  return { data, isError, isLoading };
};
