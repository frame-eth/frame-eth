"use client";

import { CHAINS, config } from "@/constants/config";
import { env } from "@/env.mjs";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, loggerLink } from "@trpc/client";
import { ThemeProvider } from "next-themes";
import { ReactNode, useState } from "react";
import { WagmiConfig } from "wagmi";
import { trpc } from "./_trpc/client";

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }),
  );

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: () => true,
        }),
        httpBatchLink({
          url: env.NEXT_PUBLIC_VERCEL_URL ? `${env.NEXT_PUBLIC_VERCEL_URL}/api` : `/api`,
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <QueryClientProvider client={queryClient}>
          <WagmiConfig config={config}>
            <RainbowKitProvider chains={CHAINS}>
              <ThemeProvider>{children}</ThemeProvider>
            </RainbowKitProvider>
          </WagmiConfig>
        </QueryClientProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default Providers;
