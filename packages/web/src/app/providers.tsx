"use client";

import { CHAINS, config } from "@/constants/config";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { WagmiConfig } from "wagmi";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={CHAINS}>
        <ThemeProvider>{children}</ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Providers;
