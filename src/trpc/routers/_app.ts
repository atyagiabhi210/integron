import { baseProcedure, createTRPCRouter } from "../init";
import prisma from "@/lib/db";
export const appRouter = createTRPCRouter({
  getUsers: baseProcedure

    // will be a get if mutation then it is post
    .query(() => {
      return prisma.user.findMany();
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
