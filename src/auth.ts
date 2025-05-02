// src/auth.ts  (formerly prismaClient.ts)

import * as dotenv from "dotenv";
dotenv.config();

// import directly from @clerk/express — no createClerkExpress here
import { clerkMiddleware, requireAuth, clerkClient, getAuth } from "@clerk/express";

export { clerkMiddleware, requireAuth, clerkClient, getAuth };

// then your Prisma client in the same file or a separate one
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
