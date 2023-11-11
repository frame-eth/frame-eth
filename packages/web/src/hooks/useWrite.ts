import { UseContractWriteConfig, useContractWrite } from "wagmi";

export const useWrite = (config: UseContractWriteConfig) => {
  const { data, error, isError, isLoading, isSuccess, write } = useContractWrite(config);

  return { data, error, isError, isLoading, isSuccess, write };
};
