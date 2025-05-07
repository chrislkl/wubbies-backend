export type Wubbie = {
    id: string;
    name: string;
    rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
    imageUrl: string;
  };
  
  export const wubbies: Wubbie[] = [
    { id: "1", name: "Sleepy Wubbie", rarity: "common", imageUrl: "/images/SleepyWubbie.png" },
    { id: "2", name: "Shy Wubbie", rarity: "common", imageUrl: "/images/ShyWubbie.png" },
    { id: "3", name: "Shopping Wubbie", rarity: "common", imageUrl: "/images/ShoppingWubbie.png" },
    { id: "4", name: "Kayak Wubbie", rarity: "common", imageUrl: "/images/KayakWubbie.png" },
    { id: "5", name: "Snowball Fight Wubbie", rarity: "legendary", imageUrl: "/images/SnowballFightWubbie.png" },
    { id: "6", name: "Camping Wubbie", rarity: "rare", imageUrl: "/images/CampingWubbie.png" },
    { id: "7", name: "Cat Wubbie", rarity: "epic", imageUrl: "/images/CatWubbie.png" },
    { id: "8", name: "Art Gallery Wubbie", rarity: "uncommon", imageUrl: "/images/ArtGalleryWubbie.png" },
    { id: "9", name: "Skateboard Wubbie", rarity: "uncommon", imageUrl: "/images/SkateboardWubbie.png" },
    { id: "10", name: "Laundry Wubbie", rarity: "uncommon", imageUrl: "/images/LaundryWubbie.png" },
    { id: "11", name: "Watering Wubbie", rarity: "rare", imageUrl: "/images/WateringWubbie.png" },
    { id: "12", name: "Cafe Wubbie", rarity: "uncommon", imageUrl: "/images/CafeWubbie.png" }
  ];
  