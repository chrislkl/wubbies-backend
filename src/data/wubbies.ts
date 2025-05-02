export type Wubbie = {
    id: string;
    name: string;
    rarity: "common" | "uncommon" | "rare";
    imageUrl: string;
  };
  
  export const wubbies: Wubbie[] = [
    { id: "1", name: "Sleepy Wubbie", rarity: "common", imageUrl: "/images/SleepyWubbie.png" },
    { id: "2", name: "Shy Wubbie", rarity: "common", imageUrl: "/images/ShyWubbie.png" },
    { id: "3", name: "Wacky Wubbie", rarity: "uncommon", imageUrl: "/images/three.jpg" },
    { id: "4", name: "Golden Wubbie", rarity: "rare", imageUrl: "/images/four.jpg" },
    // add more later
  ];
  