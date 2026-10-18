/*
  Warnings:

  - You are about to drop the column `isActive` on the `users` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'BLOCKED');

-- DropIndex
DROP INDEX "users_isActive_idx";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "isActive",
ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE';

-- CreateIndex
CREATE INDEX "users_status_idx" ON "users"("status");
