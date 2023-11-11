import { useSendTransaction } from "wagmi";

export const useSend = (to: string, value: bigint) => {
  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
    to,
    value,
  });

  return { data, isLoading, isSuccess, sendTransaction };
};
