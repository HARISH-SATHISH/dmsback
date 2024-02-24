/*
  Warnings:

  - Changed the type of `quantity` on the `Milk` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `price` on the `Milk` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `amt` on the `Milk` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Milk" DROP COLUMN "quantity",
ADD COLUMN     "quantity" INTEGER NOT NULL,
DROP COLUMN "price",
ADD COLUMN     "price" INTEGER NOT NULL,
DROP COLUMN "amt",
ADD COLUMN     "amt" INTEGER NOT NULL;
