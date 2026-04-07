
"use server"
import bcrypt from "bcryptjs"

import jwt from"jsonwebtoken"
import {prisma} from "@/lib/prisma"
import { cookies } from "next/headers"
import { supabaseAdmin } from "@/lib/supabase"
import { randomUUID } from "crypto"

export  async function cadastroUsuario(formData:any){
    try {
   
        const salts:number=10
        const segredo:string=process.env.SEGREDO!
        const senhahash= await  bcrypt.hash( formData.senha,salts)
         const usuario={
            nome:formData.nome,
            email:formData.email,
            senha:senhahash,
         }
         const resposta =await prisma.user.create({data:usuario})
         if(resposta){
            const token=  jwt.sign({id:resposta.id,nome:resposta.nome,email:resposta.email},segredo,{expiresIn:"1h"})
            
             const cookie=await cookies();
             cookie.set("token",token,{
              httpOnly: true, 
              secure: process.env.NODE_ENV === "production",
              maxAge: 60 * 60, 
              path: "/",
          })
            return{
                sucesso:true,
                messagem:"Cadastro feito com sucesso"
               
            }
         }else{
            return{
                menssagem:"Email já cadastrado"
            }
         }
        
    } catch (error) {
       
        return{
            sucesso:false,
            menssagem:error
        }
    }
}
 export async function obterUsuarioDoCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
   
    return jwt.verify(token, process.env.SEGREDO!) as { id: number ,nome:string,imagem:string} ;
  } catch (e) {
    return null;
  }
}
export async function loginUsuario(formData:any){
   
    try {
       const usuario=await prisma.user.findFirst({where:{email:formData.email}})
   
       if(!usuario){
        return{
            sucesso:false,
           
        }
       }
     
        const segredo:string=process.env.SEGREDO!
       
       
        const comparacao=await bcrypt.compare(formData.senha,usuario.senha)
        if(comparacao){
           const token=jwt.sign({
            id:usuario.id,nome:usuario.nome,imagem:usuario.imagem,email:usuario.email},segredo,{expiresIn:"1h"}) 
             
            const cookie=await cookies();
             cookie.set("token",token,{
              httpOnly: true, 
              secure: process.env.NODE_ENV === "production",
              maxAge: 60 * 60, 
              path: "/",
          })
          
            return{
               
                sucesso:true,
                menssagem:"Login realizado com sucesso"
            }
        }else{
           return{
            sucesso:false,
            messagem:"Email ao Senha incorreta "
        } 
        }
    } catch (error) {
        return{
            
            sucesso:false,
            menssagem:error
        }
    }

}
export async function logoutUsuario() {
  const cookieStore = await cookies();

  cookieStore.delete("token");
  
  return {
     sucesso: true,
      mensagem: "Logout realizado com sucesso" 
    };
}
export async function buscarUserPorId() {
    try {
        const usuario= await obterUsuarioDoCookie()
        const user= await prisma.user.findFirst({
            where:{id:String(usuario!.id)},
            select:{nome:true,email:true,imagem:true,senha:false}})

            if(user){
                return{
                    sucesso:true,
                    user:user
                }
            }
        
    } catch (error) {
         return{
            sucesso:false
         }
    }
}
export async function atualizarUsuario(formData: any) {
  try {
    const segredo = process.env.SEGREDO!;
    const usuario = await obterUsuarioDoCookie();

    if (!usuario) return { sucesso: false, mensagem: "Usuário não autenticado" };

    let urlImagem = usuario.imagem;
    const arquivo = formData.imagem?.[0] as File | undefined;

   
    if (arquivo && arquivo instanceof File && arquivo.size > 0) {
      
    
      if (usuario.imagem) {
        const nomeAntigo = usuario.imagem.split("/").pop();
        if (nomeAntigo) {
          await supabaseAdmin.storage
            .from("UserAvatar")
            .remove([`avatar/${nomeAntigo}`]);
        }
      }

      const extensao = arquivo.name.split('.').pop();
      const nomeArquivo = `${Date.now()}-${randomUUID()}.${extensao}`;

      const { error: uploadError } = await supabaseAdmin.storage
        .from("UserAvatar")
        .upload(`avatar/${nomeArquivo}`, arquivo);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabaseAdmin.storage
        .from("UserAvatar")
        .getPublicUrl(`avatar/${nomeArquivo}`);
      
      urlImagem = urlData.publicUrl;
    }

    
    const novousuario = await prisma.user.update({
      where: { id: String(usuario.id) },
      data: {
        nome: formData.nome,
        email: formData.email,
        imagem: urlImagem,
      },
    });

   
    const token = jwt.sign(
      {
        id: novousuario.id,
        nome: novousuario.nome,
        email: novousuario.email,
        imagem: novousuario.imagem,
      },
      segredo,
      { expiresIn: "1h" }
    );

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60,
      path: "/",
    });

    return { sucesso: true, mensagem: "Usuário atualizado com sucesso" };

  } catch (error: any) {
    console.error("Erro na atualização:", error.message);
    return { sucesso: false, mensagem: "Erro interno no servidor" };
  }
}