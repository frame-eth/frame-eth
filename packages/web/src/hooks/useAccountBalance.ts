import { getTargetNetwork } from '@/utils/network'
import { useCallback, useEffect, useState } from 'react'
import { useBalance } from 'wagmi'

export function useAccountBalance(address: string) {
  const [isEthBalance, setIsEthBalance] = useState(true)
  const [balance, setBalance] = useState<number | null>(null)

  const {
    data: fetchedBalanceData,
    isError,
    isLoading,
  } = useBalance({
    address: address as `0x${string}`,
    watch: true,
    chainId: getTargetNetwork().id,
  })

  const onToggleBalance = useCallback(() => {
    setIsEthBalance(!isEthBalance)
  }, [isEthBalance])

  useEffect(() => {
    if (fetchedBalanceData?.formatted) {
      setBalance(Number(fetchedBalanceData.formatted))
    }
  }, [fetchedBalanceData])

  return { balance, isError, isLoading, onToggleBalance, isEthBalance }
}
