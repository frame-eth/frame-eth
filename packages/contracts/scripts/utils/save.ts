import fs from 'fs'
import path from 'path'
import { Abi } from 'viem'

export const save = async (chainId: number, address: string, abi: Abi) => {
  const contractsDir = path.join(
    __dirname,
    '..',
    '..',
    '..',
    'web',
    'src',
    'constants'
  )

  if (!fs.existsSync(contractsDir)) fs.mkdirSync(contractsDir)

  const code = `
import { Abi } from "viem";

interface Artifact {
  [key: string]: {
    address: \`0x\${string}\`;
    abi: Abi;
  };
}

export const Contracts: Artifact = {
  ${chainId}: {
    address: "${address}",
    abi: ${JSON.stringify(abi, null, 2)},
  },
};
  `
  fs.writeFileSync(path.join(contractsDir, 'deployedContracts.ts'), code.trim())
}
