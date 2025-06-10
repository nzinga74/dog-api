/*
  Warnings:

  - Added the required column `userId` to the `adoptions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `sells` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `adoptions` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `sells` ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `adoptions` ADD CONSTRAINT `adoptions_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sells` ADD CONSTRAINT `sells_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
