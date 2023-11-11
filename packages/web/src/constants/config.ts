import { enviroment } from "@/types/chains";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { goerli, hardhat, mainnet, sepolia } from "viem/chains";
import { configureChains, createConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { env } from "../env.mjs";

const chainConfig = {
  localhost: [hardhat],
  testnet: [goerli, sepolia],
  mainnet: [hardhat, goerli, sepolia, mainnet],
};

export const CHAINS = chainConfig[env.NEXT_PUBLIC_CHAIN_ENVIROMENT as enviroment];

const { chains, publicClient, webSocketPublicClient } = configureChains(CHAINS, [
  alchemyProvider({ apiKey: env.NEXT_PUBLIC_ALCHEMY_API_KEY }),
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: env.NEXT_PUBLIC_RAINBOWKIT_APP_NAME,
  projectId: env.NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID,
  chains,
});

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
  persister: null,
});
