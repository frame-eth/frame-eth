import { env } from "@/env.mjs";
import { appRouter } from "@/server";
import { httpBatchLink } from "@trpc/client";

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: env.NEXT_PUBLIC_VERCEL_URL ? `${env.NEXT_PUBLIC_VERCEL_URL}/api` : `/api`,
    }),
  ],
});
