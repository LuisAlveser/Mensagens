'use server'

import { supabase } from "@/lib/supabase"
import {prisma} from "@/lib/prisma"
import { obterUsuarioDoCookie } from "./UserController"
import { success, uuid } from "zod"
import { randomUUID } from "crypto"



export async function criarSala(formData: any) {
    try {
        const usuario = await obterUsuarioDoCookie()
        if (!usuario) return { sucesso: false, mensssagem: "Usuário não autenticado" }


        const arquivo = formData.imagem?.[0]
        console.log(arquivo)
        if (!arquivo) return { sucesso: false, mensssagem: "Imagem não encontrada" }
          
        const extensao = arquivo.name.split('.').pop();
        const nomeArquivo = `${Date.now()}-${randomUUID()}.${extensao}`

      
        const { error: uploadError } = await supabase.storage
            .from("SalaImagem")
            .upload(`capas-salas/${nomeArquivo}`, arquivo)

        if (uploadError) throw uploadError

       
        const { data: urlData } = supabase.storage
          .from("SalaImagem")
          .getPublicUrl(`capas-salas/${nomeArquivo}`)
        
        const urlImagem = urlData.publicUrl;

        if (urlImagem) {
            const salacriada = await prisma.sala.create({
                data: {
                    nome: formData.nome,
                    descricao: formData.descricao,
                    categoria: formData.categoria, 
                    imagem: urlImagem,
                    admin: String(usuario.id), 
                    membros: {
                        create: {
                            userId: String(usuario.id),
                        },
                    }
                }
            })

            if (salacriada) {
                return { sucesso: true }
            }
        }

    } catch (error: any) {
        console.error("ERRO COMPLETO:", error)
        return {
            sucesso: false,
            mensagem: error.message || "Erro interno no servidor"
        }
    }
}
export  async function listarsala(){
    try {
        const salas= await prisma.sala.findMany();
        if(salas){
            return{
                sucesso:true,
                salas:salas,
                
            }
        }
    } catch (error) {
        return{
            sucesso:false,
            mensagem:error
        }
    }
   
}
export async function buscarSalasCriadas() {
     const usuario= await obterUsuarioDoCookie()
     if(!usuario){
        return null
     }
     try {
        const salasDoUsuario=await prisma.sala.findMany({where:{admin:`${usuario.id}` }})
        if(salasDoUsuario){
            return{
                sucesso:true,
                salas:salasDoUsuario,
            
            }
        }
     } catch (error) {
         return{
            sucesso:false,
            mensagem:error
        }
     }
}

export async function editarSala(formData: any,idsala:string) {
    try {
        const usuario = await obterUsuarioDoCookie()
        if (!usuario) return { sucesso: false, mensssagem: "Usuário não autenticado" }

        const resposta=await buscaSalaPorId(idsala)
        const UrlCompleta= resposta?.sala?.imagem
        const nome=UrlCompleta?.split("/").pop()
        
        const { data, error  } = await supabase.storage
            .from("SalaImagem")
            .remove([`capas-salas/${nome}`])

        if(error){
            return{
                sucesso:false
            }
        }
         
        const arquivo = formData.imagem?.[0]
        console.log(arquivo)
        if (!arquivo) return { sucesso: false, mensssagem: "Imagem não encontrada" }
          
        const extensao = arquivo.name.split('.').pop();
        const nomeArquivo = `${Date.now()}-${randomUUID()}.${extensao}`

      
        const { error: uploadError } = await supabase.storage
            .from("SalaImagem")
            .upload(`capas-salas/${nomeArquivo}`, arquivo)

        if (uploadError) throw uploadError

       
        const { data: urlData } = supabase.storage
          .from("SalaImagem")
          .getPublicUrl(`capas-salas/${nomeArquivo}`)
        
        const urlImagem = urlData.publicUrl;

        if (urlImagem) {
            const sala={
               
                    nome: formData.nome,
                    descricao: formData.descricao,
                    categoria: formData.categoria, 
                    imagem: urlImagem,
                   
                    
                
            }
            const salacriada = await prisma.sala.update({where:{id:idsala},data:sala})

            if (salacriada) {
                return { 
                    sucesso: true,
                    mensagem:"Sala atualizada com sucesso"
                 }
            }
        }

    } catch (error) {
        console.error("ERRO COMPLETO:", error)
        return {
            sucesso: false,
            mensagem: error
        }
    }
        
    
}
export async function buscaSalaPorId(id:string) {
    try {
        const resposta =await prisma.sala.findFirst({where:{id:id}})
        if(resposta){
            return{
                success:true,
                sala:resposta
            }
        }
    } catch (error) {
        return{
            sucesso:false,
            mensagem:error
        }
    }
    
}
export  async function excluirSala(idsala:string){
     try {
        const resposta=await buscaSalaPorId(idsala)
        if(resposta?.success){
            const urlImagem=resposta.sala.imagem
            const nome=urlImagem?.split("/").pop()
            
            const { data, error  } = await supabase.storage
            .from("SalaImagem")
            .remove([`capas-salas/${nome}`])

        if(error){
            return{
                sucesso:false
            }
        }
        const excluir=await prisma.sala.delete({where:{id:idsala}})
        if(excluir){
            return{
                sucesso:true,
                mensagem:"Sala excluida com sucesso"
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