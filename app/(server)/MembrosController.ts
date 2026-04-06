'use server'
import {prisma} from "@/lib/prisma"
import { obterUsuarioDoCookie } from "./UserController"

export  async function buscarMembrosPorSala(id:string){
    try {
        const resposta= await prisma.membrosSala.findMany({where:{salaId:id},
            include:{user:{select:{nome:true,imagem:true}}}})
        if(resposta){
            return{
                sucesso:true,
                sala:resposta,
            }
        }
    } catch (error) {
        return{
            sucesso:false,
            mensagem:error
        }
    }

}
export async function adicionarmembro(idsala:string) {
    try {
        const usuario = await obterUsuarioDoCookie()
        const resposta=await prisma.membrosSala.findFirst({where:{userId:String (usuario!.id)}})

        if(!resposta){
        
             const novomembro=await prisma.membrosSala.create({
                data:{userId: String(usuario!.id),salaId:String (idsala)}
            })
             if(novomembro){
                return{
                    sucesso:true
                }
             }
        }
        return{
            sucesso:true
        }
    } catch (error) {
        return{
            sucesso:false,
            mensagem:error
        }
    }
    
}