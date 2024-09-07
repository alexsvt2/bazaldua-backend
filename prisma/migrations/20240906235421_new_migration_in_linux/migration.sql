-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_userId_fkey";

-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "userId" SET DATA TYPE TEXT;
