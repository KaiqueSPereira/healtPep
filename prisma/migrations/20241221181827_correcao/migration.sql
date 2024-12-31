/*
  Warnings:

  - Made the column `unidadeId` on table `Endereco` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Endereco" ALTER COLUMN "unidadeId" SET NOT NULL;
