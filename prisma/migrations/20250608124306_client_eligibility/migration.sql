-- AlterTable
ALTER TABLE `clients` ADD COLUMN `eligibleAdoption` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `isAdmin` BOOLEAN NOT NULL DEFAULT false;
