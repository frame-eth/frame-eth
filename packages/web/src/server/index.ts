import { z } from "zod";
import { procedure, router } from "./trpc";

export const appRouter = router({
  greeting: procedure.query(() => "hello tRPC v10!"),
  addGreeting: procedure.input(z.object({ greeting: z.string() })).mutation(async (opts) => {
    console.log(opts.input.greeting);
    return true;
  }),
});

export type AppRouter = typeof appRouter;
