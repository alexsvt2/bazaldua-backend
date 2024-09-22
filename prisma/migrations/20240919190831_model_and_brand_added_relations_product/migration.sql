/*
  Warnings:

  - You are about to drop the column `brand` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "productId" INTEGER;

-- AlterTable
ALTER TABLE "Model" ADD COLUMN     "productId" INTEGER;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "brand",
DROP COLUMN "model";

-- AddForeignKey
ALTER TABLE "Brand" ADD CONSTRAINT "Brand_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
