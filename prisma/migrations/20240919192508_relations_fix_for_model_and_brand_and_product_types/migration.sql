/*
  Warnings:

  - You are about to drop the column `productId` on the `Brand` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Model` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Brand" DROP CONSTRAINT "Brand_productId_fkey";

-- DropForeignKey
ALTER TABLE "Model" DROP CONSTRAINT "Model_productId_fkey";

-- AlterTable
ALTER TABLE "Brand" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "Model" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "brandId" INTEGER,
ADD COLUMN     "modelId" INTEGER;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE SET NULL ON UPDATE CASCADE;
