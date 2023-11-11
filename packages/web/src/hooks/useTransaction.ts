import { useWaitForTransaction } from 'wagmi'

export const useTransaction = (hash: `0x${string}`) => {
  const { data, isError, isLoading } = useWaitForTransaction({
    hash,
  })

  return { data, isError, isLoading }
}
