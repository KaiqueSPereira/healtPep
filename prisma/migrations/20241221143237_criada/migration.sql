/*
  Warnings:

  - You are about to drop the column `profissional` on the `Tratamento` table. All the data in the column will be lost.
  - Added the required column `profissionalId` to the `Tratamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tratamento" DROP COLUMN "profissional",
ADD COLUMN     "profissionalId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Tratamento" ADD CONSTRAINT "Tratamento_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
