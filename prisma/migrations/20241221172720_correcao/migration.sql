/*
  Warnings:

  - You are about to drop the column `endereco` on the `UnidadeDeSaude` table. All the data in the column will be lost.
  - Added the required column `unidadeId` to the `Endereco` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Endereco" ADD COLUMN     "unidadeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UnidadeDeSaude" DROP COLUMN "endereco";

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "UnidadeDeSaude"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
