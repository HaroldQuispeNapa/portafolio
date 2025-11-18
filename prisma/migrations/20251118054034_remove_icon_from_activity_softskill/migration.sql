/*
  Warnings:

  - You are about to drop the column `icon` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `icon` on the `SoftSkill` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Activity" DROP COLUMN "icon";

-- AlterTable
ALTER TABLE "public"."SoftSkill" DROP COLUMN "icon";
