'use server'
import { supabaseAdmin } from "@/lib/supabase"
import { supabase } from "@/lib/supabase"
import {prisma} from "@/lib/prisma"
import { obterUsuarioDoCookie } from "./UserController"
import { uuid } from "zod"
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

      
        const { error: uploadError } = await supabaseAdmin.storage
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
            mensssagem: error.message || "Erro interno no servidor"
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

