import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import client from '@/prisma-client';
import authConfig from '@/auth.config';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(client),
  session: { strategy: "jwt" },
  ...authConfig,
});
