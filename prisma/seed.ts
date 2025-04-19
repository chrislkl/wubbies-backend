import * as dotenv from "dotenv";
dotenv.config();

import { prisma } from "../src/prismaClient";

const wubbies = [
  { id: "1", name: "Sleepy Wubbie", rarity: "common", imageUrl: "/images/sleepy.png" },
  { id: "2", name: "Happy Wubbie", rarity: "common", imageUrl: "/images/happy.png" },
  { id: "3", name: "Wacky Wubbie", rarity: "uncommon", imageUrl: "/images/wacky.png" },
  { id: "4", name: "Golden Wubbie", rarity: "rare", imageUrl: "/images/golden.png" },
  // add more here later
];

async function main() {
  for (const wubbie of wubbies) {
    await prisma.wubbie.upsert({
      where: { id: wubbie.id },
      update: {},
      create: wubbie,
    });
  }
  console.log("Seeded Wubbies 🌱");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
