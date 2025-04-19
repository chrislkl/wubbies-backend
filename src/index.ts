import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express";
import { prisma } from "./prismaClient";
import { rollWubbieFromDB } from "./utils/rollWubbie";

const app = express();
const PORT = 3000;
const USER_ID = "test-user";

app.use(express.json());

const rollHandler: RequestHandler = async (
  _req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  try {
    const user = await prisma.user.upsert({
      where: { email: USER_ID },
      update: {},
      create: { email: USER_ID },
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

    // note: no `return res.json(...)`, just call it
    res.json({ wubbie: instance.wubbie });
  } catch (err:any) {
    console.error(err);
    res.status(500).json({ error: err.message || err.toString() });
  }
};

// now pass that handler into app.post
app.post("/roll", rollHandler);

// same pattern for /wallet
const walletHandler: RequestHandler = async (
  _req,
  res,
  _next
): Promise<void> => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: USER_ID },
      include: { wubbies: { include: { wubbie: true } } },
    });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    const list = user.wubbies.map((inst) => inst.wubbie);
    res.json({ wallet: list });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch wallet" });
  }
};

app.get("/wallet", walletHandler);

app.listen(PORT, () => {
  console.log(`Wubbies backend running at http://localhost:${PORT}`);
});
