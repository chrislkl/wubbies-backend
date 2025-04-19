import { prisma } from "../prismaClient";    
import type { Wubbie } from "@prisma/client";

export async function rollWubbieFromDB(): Promise<Wubbie | null> {
  const allWubbies = await prisma.wubbie.findMany();

  const rand = Math.random();
  let pool: Wubbie[];

  if (rand < 0.6) {
    pool = allWubbies.filter(w => w.rarity === "common");
  } else if (rand < 0.9) {
    pool = allWubbies.filter(w => w.rarity === "uncommon");
  } else {
    pool = allWubbies.filter(w => w.rarity === "rare");
  }

  if (pool.length === 0) return null;

  const result = pool[Math.floor(Math.random() * pool.length)];
  return result;
}
