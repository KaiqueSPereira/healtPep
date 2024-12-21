/*
  Warnings:

  - You are about to drop the column `crm` on the `Profissional` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[NumClasse]` on the table `Profissional` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `NumClasse` to the `Profissional` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Profissional_crm_key";

-- AlterTable
ALTER TABLE "Profissional" DROP COLUMN "crm",
ADD COLUMN     "NumClasse" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Profissional_NumClasse_key" ON "Profissional"("NumClasse");
