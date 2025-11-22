/*
  Warnings:

  - The primary key for the `Story` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Story` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `StoryPart` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `StoryPart` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `storyId` on the `StoryPart` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Story" DROP CONSTRAINT "Story_pkey",
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMP(6),
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Story_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "StoryPart" DROP CONSTRAINT "StoryPart_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "storyId",
ADD COLUMN     "storyId" INTEGER NOT NULL,
ADD CONSTRAINT "StoryPart_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE INDEX "StoryPart_storyId_idx" ON "StoryPart"("storyId");

-- CreateIndex
CREATE UNIQUE INDEX "StoryPart_storyId_partNumber_key" ON "StoryPart"("storyId", "partNumber");
