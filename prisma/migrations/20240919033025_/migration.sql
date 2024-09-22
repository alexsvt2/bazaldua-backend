/*
  Warnings:

  - The values [INVOICABLE] on the enum `ReportType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ReportType_new" AS ENUM ('WARRANTY', 'CONTRACT', 'NO_CHARGE', 'BILLABLE');
ALTER TABLE "Report" ALTER COLUMN "reportType" TYPE "ReportType_new" USING ("reportType"::text::"ReportType_new");
ALTER TYPE "ReportType" RENAME TO "ReportType_old";
ALTER TYPE "ReportType_new" RENAME TO "ReportType";
DROP TYPE "ReportType_old";
COMMIT;

-- CreateTable
CREATE TABLE "ProductTypes" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "productId" INTEGER,

    CONSTRAINT "ProductTypes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductTypes" ADD CONSTRAINT "ProductTypes_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
