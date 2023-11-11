import { getContract } from "@/constants";
import { usePrepareContractWrite } from "wagmi";

export const usePrepareWrite = (
  chainId: number,
  functionName: string,
  args?: (string | number | [])[],
  value?: bigint,
) => {
  const { config, error, isError, isLoading, isSuccess } = usePrepareContractWrite({
    ...getContract(chainId),
    functionName,
    args,
    value,
  });

  return { config, error, isError, isLoading, isSuccess };
};
