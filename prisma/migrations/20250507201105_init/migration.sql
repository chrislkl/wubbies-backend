-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wubbie" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Wubbie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WubbieInstance" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "wubbieId" TEXT NOT NULL,
    "acquiredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WubbieInstance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "WubbieInstance" ADD CONSTRAINT "WubbieInstance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WubbieInstance" ADD CONSTRAINT "WubbieInstance_wubbieId_fkey" FOREIGN KEY ("wubbieId") REFERENCES "Wubbie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
