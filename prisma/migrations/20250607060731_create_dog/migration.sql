/*
  Warnings:

  - You are about to drop the `Dog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DogSize` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dog_commercial_type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Dog` DROP FOREIGN KEY `Dog_commercialTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `Dog` DROP FOREIGN KEY `Dog_dogSizeId_fkey`;

-- DropForeignKey
ALTER TABLE `Dog` DROP FOREIGN KEY `Dog_raceId_fkey`;

-- DropForeignKey
ALTER TABLE `dog_races` DROP FOREIGN KEY `dog_races_dogCommercialTypeId_fkey`;

-- DropTable
DROP TABLE `Dog`;

-- DropTable
DROP TABLE `DogSize`;

-- DropTable
DROP TABLE `dog_commercial_type`;

-- CreateTable
CREATE TABLE `dog_commercial_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dog_sizes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dogs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `raceId` INTEGER NOT NULL,
    `birthDate` DATETIME(3) NOT NULL,
    `sex` ENUM('F', 'M') NOT NULL,
    `status` INTEGER NOT NULL,
    `commercialTypeId` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL DEFAULT 0,
    `dogSizeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `dog_races` ADD CONSTRAINT `dog_races_dogCommercialTypeId_fkey` FOREIGN KEY (`dogCommercialTypeId`) REFERENCES `dog_commercial_types`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dogs` ADD CONSTRAINT `dogs_raceId_fkey` FOREIGN KEY (`raceId`) REFERENCES `dog_races`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dogs` ADD CONSTRAINT `dogs_commercialTypeId_fkey` FOREIGN KEY (`commercialTypeId`) REFERENCES `dog_commercial_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dogs` ADD CONSTRAINT `dogs_dogSizeId_fkey` FOREIGN KEY (`dogSizeId`) REFERENCES `dog_sizes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
