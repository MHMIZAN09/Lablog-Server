/*
  Warnings:

  - You are about to drop the column `lastLoginAt` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "lastLoginAt",
ADD COLUMN     "mustChangePassword" BOOLEAN NOT NULL DEFAULT false;
