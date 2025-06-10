/*
  Warnings:

  - You are about to drop the column `dogCommercialTypeId` on the `dog_races` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `dog_races` DROP FOREIGN KEY `dog_races_dogCommercialTypeId_fkey`;

-- AlterTable
ALTER TABLE `dog_races` DROP COLUMN `dogCommercialTypeId`;
