import hre from 'hardhat'
import { formatEther, parseEther } from 'viem'
import { save } from './utils/save'
import { verify } from './utils/verify'

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000)
  const unlockTime = BigInt(currentTimestampInSeconds + 60)

  const lockedAmount = parseEther('0.001')

  const lock = await hre.viem.deployContract('Lock', [unlockTime], {
    value: lockedAmount,
  })

  const chainId = (await hre.viem.getPublicClient()).chain.id
  await save(chainId, lock.address, lock.abi)

  chainId !== 1337 && (await verify(lock.address, [unlockTime]))

  console.log(
    `Lock with ${formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
