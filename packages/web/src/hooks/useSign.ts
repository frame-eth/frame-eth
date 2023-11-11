import { useSignMessage } from "wagmi";

export const useSign = (message: string) => {
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message,
  });

  return { data, isError, isLoading, isSuccess, signMessage };
};
