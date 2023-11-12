import { task } from 'hardhat/config'
import { save } from './utils/save'
import { verify } from './utils/verify'

task('deploy', '📰 Deploys a contract, saves the artifact and verifies it.')
  .addParam('contract', 'Name of the contract to deploy.', 'Lock')
  .addFlag('save', 'Flag to indicate whether to save the contract or not')
  .addFlag('verify', 'Flag to indicate whether to verify the contract or not')
  .setAction(async (args, { viem, run }) => {
    const currentTimestampInSeconds = Math.round(Date.now() / 1000)
    const unlockTime = BigInt(currentTimestampInSeconds + 60)

    const Contract = await viem.deployContract(args.contract, [unlockTime])
    console.log(`📰 Contract deployed successfully! ${Contract.address}`)

    const chainId = (await viem.getPublicClient()).chain.id

    args.save && (await save(chainId, Contract.address, Contract.abi))
    args.verify && (await verify(run, Contract.address, [unlockTime]))
  })
