import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/constants";
import { usePrepareContractWrite } from "wagmi";

export const usePrepareWrite = (
  functionName: string,
  args?: (string | number | [])[],
  value?: bigint,
) => {
  const { config, error, isError, isLoading, isSuccess } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName,
    args,
    value,
  });

  return { config, error, isError, isLoading, isSuccess };
};
