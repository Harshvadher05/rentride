/*
  Warnings:

  - Added the required column `clerkUserId` to the `Owner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Owner" ADD COLUMN     "clerkUserId" TEXT NOT NULL;
