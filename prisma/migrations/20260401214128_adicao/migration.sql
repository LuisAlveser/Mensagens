-- DropForeignKey
ALTER TABLE "MembrosSala" DROP CONSTRAINT "MembrosSala_salaId_fkey";

-- DropForeignKey
ALTER TABLE "MembrosSala" DROP CONSTRAINT "MembrosSala_userId_fkey";

-- DropForeignKey
ALTER TABLE "Mensagem" DROP CONSTRAINT "Mensagem_salaId_fkey";

-- DropForeignKey
ALTER TABLE "Mensagem" DROP CONSTRAINT "Mensagem_userId_fkey";

-- DropForeignKey
ALTER TABLE "Sala" DROP CONSTRAINT "Sala_admin_fkey";

-- AddForeignKey
ALTER TABLE "Sala" ADD CONSTRAINT "Sala_admin_fkey" FOREIGN KEY ("admin") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembrosSala" ADD CONSTRAINT "MembrosSala_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Sala"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembrosSala" ADD CONSTRAINT "MembrosSala_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Sala"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
