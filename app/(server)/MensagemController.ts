'use server'
import {prisma} from "@/lib/prisma"
import { obterUsuarioDoCookie } from "./UserController"
import { adicionarmembro } from "./MembrosController"

export  async function BuscarMensagemPorSala(idsala:string){
     try {
        const resposta= await prisma.mensagem.findMany({where:{salaId:idsala},
            include:{
                user:{
                    select:{nome:true,imagem:true}
                }
            },orderBy:{createdAt:"asc"}})
            if(resposta){
                return{
                    sucesso:true,
                    mensagens:resposta
                }
            }

     } catch (error) {
        return{
            sucesso:false,
            mensagem:error
        }
     }
}

export async function enviarMensagem(idsala:string,data:string) {
   
      try{

    const usuario = await obterUsuarioDoCookie()
    if(!usuario){
        return{
            sucesso:false
        } 
    }
    const novomembro=await adicionarmembro(idsala)
    if(novomembro.sucesso){
    const conteudo={
        conteudo:data,
        userId:String(usuario.id),
        salaId:idsala
    }
     const mensagem=await prisma.mensagem.create({data:conteudo})
     if(mensagem){
       
        return{
            sucesso:true,
        }
     }
    }
   } catch (error) {
        return{
            sucesso:false,
            mensagem:error
        }
     }
}