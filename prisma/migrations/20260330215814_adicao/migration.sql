/*
  Warnings:

  - Added the required column `admin` to the `Sala` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sala" ADD COLUMN     "admin" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Sala" ADD CONSTRAINT "Sala_admin_fkey" FOREIGN KEY ("admin") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
