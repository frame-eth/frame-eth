import hre from 'hardhat'

export const verify = async (address: string, constructorArguments: any[]) => {
  while (true) {
    try {
      await hre.run('verify:verify', {
        address,
        constructorArguments,
      })
      console.log('Contract verified!')
      break
    } catch {
      console.log('Verification failed, trying again in 10 seconds...')
      await new Promise((resolve) => setTimeout(resolve, 10000))
    }
  }
}
