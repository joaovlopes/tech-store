// import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import { prismaClient } from "./prisma";
import GoogleProvider from "next-auth/providers/google";
import type { Adapter } from 'next-auth/adapters';

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prismaClient) as Adapter,
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
}