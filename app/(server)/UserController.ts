
"use server"
import bcrypt from "bcryptjs"

import jwt from"jsonwebtoken"
import {prisma} from "@/lib/prisma"
import { cookies } from "next/headers"
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
   
    return jwt.verify(token, process.env.SEGREDO!) as { id: number };
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
        const salts:number=10
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