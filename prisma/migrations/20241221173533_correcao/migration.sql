/*
  Warnings:

  - Made the column `createdAt` on table `Profissional` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Profissional` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Endereco" DROP CONSTRAINT "Endereco_unidadeId_fkey";

-- AlterTable
ALTER TABLE "Endereco" ALTER COLUMN "unidadeId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Profissional" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "UnidadeDeSaude"("id") ON DELETE SET NULL ON UPDATE CASCADE;
