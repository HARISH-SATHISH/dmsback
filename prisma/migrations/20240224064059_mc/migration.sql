/*
  Warnings:

  - You are about to drop the column `cowId` on the `Milk` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Milk" DROP CONSTRAINT "Milk_cowId_fkey";

-- AlterTable
ALTER TABLE "Milk" DROP COLUMN "cowId";
