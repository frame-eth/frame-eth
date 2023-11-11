"use client";

import { CHAINS, config } from "@/constants/config";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { WagmiConfig } from "wagmi";

const Providers = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={CHAINS}>
          <ThemeProvider>{children}</ThemeProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  );
};

export default Providers;
