import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_CHAIN_ENVIROMENT: z.union([
      z.literal("localhost"),
      z.literal("testnet"),
      z.literal("mainnet"),
    ]),
    NEXT_PUBLIC_VERCEL_URL: z.string(),
    NEXT_PUBLIC_ALCHEMY_API_KEY: z.string().min(1),
    NEXT_PUBLIC_RAINBOWKIT_APP_NAME: z.string().min(1),
    NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_CHAIN_ENVIROMENT: process.env.NEXT_PUBLIC_CHAIN_ENVIROMENT,
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    NEXT_PUBLIC_ALCHEMY_API_KEY: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    NEXT_PUBLIC_RAINBOWKIT_APP_NAME: process.env.NEXT_PUBLIC_RAINBOWKIT_APP_NAME,
    NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID: process.env.NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID,
  },
  skipValidation:
    !!process.env.SKIP_ENV_VALIDATION &&
    process.env.SKIP_ENV_VALIDATION !== "false" &&
    process.env.SKIP_ENV_VALIDATION !== "0",
});
