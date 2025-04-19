import { Wubbie } from "./wubbies";

const wallet: { [userId: string]: Wubbie[] } = {};

export function addWubbieToWallet(userId: string, wubbie: Wubbie) {
  if (!wallet[userId]) wallet[userId] = [];
  wallet[userId].push(wubbie);
}

export function getWallet(userId: string): Wubbie[] {
  return wallet[userId] || [];
}
