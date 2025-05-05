// src/auth.ts  (formerly prismaClient.ts)

import * as dotenv from "dotenv";
dotenv.config();

import { clerkMiddleware, requireAuth, clerkClient, getAuth } from "@clerk/express";

export { clerkMiddleware, requireAuth, clerkClient, getAuth };

import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
