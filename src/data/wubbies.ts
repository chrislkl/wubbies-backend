export type Wubbie = {
    id: string;
    name: string;
    rarity: "common" | "uncommon" | "rare";
    imageUrl: string;
  };
  
  export const wubbies: Wubbie[] = [
    { id: "1", name: "Sleepy Wubbie", rarity: "common", imageUrl: "/images/sleepy.png" },
    { id: "2", name: "Happy Wubbie", rarity: "common", imageUrl: "/images/happy.png" },
    { id: "3", name: "Wacky Wubbie", rarity: "uncommon", imageUrl: "/images/wacky.png" },
    { id: "4", name: "Golden Wubbie", rarity: "rare", imageUrl: "/images/golden.png" },
    // add more later
  ];
  