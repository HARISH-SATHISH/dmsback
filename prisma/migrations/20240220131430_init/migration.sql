-- CreateTable
CREATE TABLE "Farmer" (
    "id" SERIAL NOT NULL,
    "pass" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Farmer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "pass" TEXT NOT NULL,
    "name" TEXT,
    "designation" TEXT,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cow" (
    "id" SERIAL NOT NULL,
    "age" INTEGER,
    "vacination" TEXT,
    "hstar" TEXT,
    "farmerId" INTEGER NOT NULL,

    CONSTRAINT "Cow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Milk" (
    "id" SERIAL NOT NULL,
    "quantity" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "amt" TEXT NOT NULL,
    "farmerId" INTEGER NOT NULL,

    CONSTRAINT "Milk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RawMaterial" (
    "id" SERIAL NOT NULL,
    "feed" TEXT NOT NULL,
    "drug" TEXT NOT NULL,
    "farmerId" INTEGER NOT NULL,

    CONSTRAINT "RawMaterial_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cow" ADD CONSTRAINT "Cow_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Milk" ADD CONSTRAINT "Milk_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RawMaterial" ADD CONSTRAINT "RawMaterial_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
