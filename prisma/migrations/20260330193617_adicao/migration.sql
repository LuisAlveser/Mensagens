/*
  Warnings:

  - Added the required column `descricao` to the `Sala` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagem` to the `Sala` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sala" ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "imagem" TEXT NOT NULL;
