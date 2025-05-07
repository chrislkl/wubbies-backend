import express from "express";
import { prisma } from "./auth";
import { rollWubbieFromDB } from "./utils/rollWubbie";
import path from "path";

import * as prodAuth from "./auth";

const isDev = process.env.NODE_ENV !== "production";

import cors from "cors";
const app = express();

const corsOptions = {
  origin: ['https://wubbies-frontend-s2j9.vercel.app/','http://localhost:5173'],
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = 3000;
const requireAuth = isDev
  ? () => (_req: any, _res: any, next: any) => next()
  : prodAuth.requireAuth;

const getAuth = isDev
  ? (_req: any) => ({ userId: "dev-user" })
  : prodAuth.getAuth;

const clerkMiddleware = isDev
  ? () => (_req: any, _res: any, next: any) => next()
  : prodAuth.clerkMiddleware;

app.options('*', (_req, res) => {
  res.sendStatus(204);
});

app.get("/", (_req, res) => {
  res.send("Wubbies backend is live!");
});

app.use(express.json());

app.use(clerkMiddleware());                      
app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.post("/roll", requireAuth(), async (req, res): Promise<void> => {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      res.status(401).json({ error: "Not authenticated" })
      return
    }
    const user = await prisma.user.upsert({
      where: { id: userId },
      update: {},
      create: { id: userId },
    });

    const wubbie = await rollWubbieFromDB();
    if (!wubbie) {
      res.status(500).json({ error: "No Wubbies available." });
      return;
    }

    const instance = await prisma.wubbieInstance.create({
      data: { userId: user.id, wubbieId: wubbie.id },
      include: { wubbie: true },
    });

    res.json({ wubbie: instance.wubbie });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/wallet", requireAuth(), async (req, res): Promise<void> => {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      res.status(401).json({ error: "Not authenticated" });
      return
    }
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { wubbies: { include: { wubbie: true } } },
    });

    if (!user) {
      res.json({ wallet: [] });
      return;
    }

    const list = user.wubbies.map(inst => inst.wubbie);
    res.json({ wallet: list });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch wallet" });
  }
});

app.listen(PORT, () => {
  console.log(`Wubbies backend running at http://localhost:${PORT}`);
});
