/*
  Warnings:

  - Added the required column `cowId` to the `Milk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cowId` to the `RawMaterial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Milk" ADD COLUMN     "cowId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "RawMaterial" ADD COLUMN     "cowId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Milk" ADD CONSTRAINT "Milk_cowId_fkey" FOREIGN KEY ("cowId") REFERENCES "Cow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RawMaterial" ADD CONSTRAINT "RawMaterial_cowId_fkey" FOREIGN KEY ("cowId") REFERENCES "Cow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
