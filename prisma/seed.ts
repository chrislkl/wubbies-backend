import * as dotenv from "dotenv";
dotenv.config();

import { prisma } from "../src/auth";

const wubbies = [
  { id: "1", name: "Sleepy Wubbie", rarity: "common", imageUrl: "/images/SleepyWubbie.png" },
  { id: "2", name: "Shy Wubbie", rarity: "common", imageUrl: "/images/ShyWubbie.png" },
  { id: "3", name: "Wacky Wubbie", rarity: "uncommon", imageUrl: "/images/three.jpg" },
  { id: "4", name: "Golden Wubbie", rarity: "rare", imageUrl: "/images/four.jpg" },
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
