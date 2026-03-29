'use client'
import { Button } from "@/components/ui/button"
import {Input} from"@/components/ui/input"
import Link from "next/link"
import {loginUsuario}from"@/app/(server)/UserController"
import {zodResolver} from "@hookform/resolvers/zod"
import z  from "zod";
import {loginShema} from "@/lib/Schemas"
import { Loader2 } from "lucide-react";
import {useForm}from "react-hook-form"
import { useTransition } from "react"

export function FormLogin(){
  
  const [carregando,start]=useTransition()
  const{register,handleSubmit,formState:{errors}}=useForm({
    resolver:zodResolver(loginShema),
    defaultValues:{
        email:"",
        senha:""
    }
  }) 

  const login=(data:z.infer<typeof loginShema>)=>{
    start(async ()=>{
      const login =await loginUsuario(data)
     console.log(login)
      if(login?.sucesso){
        console.log(login.sucesso)
      }else{
        console.log(login?.menssagem)
      }
    })
  }
    return(
        <div className="flex flex-col items-center w-full h-full justify-center">
         <h1 className="text-black flex text-5xl font-extrabold ">Bem vindo</h1>
        <form className=" flex-col flex items-center pt-5 gap-5" onSubmit={handleSubmit(login)} >
          
            <Input className="bg-white  placeholder:text-blue-800   text-blue-800  w-100" placeholder="Email" {...register("email")}/>
             {errors.email&&<span  className="text-red-600">{errors.email.message}</span>}


            <Input className="bg-white  placeholder:text-blue-800  text-blue-800  w-100" placeholder="Senha" type="password"{...register("senha")}/>
             {errors.senha&&<span>{errors.senha.message}</span>}

            <Button className={"cursor-pointer bg-blue-600 hover:bg-blue-700  font-bold w-70 text-white"} type="submit" disabled={carregando}>
            {carregando?<Loader2  className="size-4 animate-spin"/>:<span>Logar</span>}
            </Button>
          
        </form>
          <p className="text-blue-500 pt-10">
            Não tem conta?{
                <Link href={"/cadastro"}>
                <span className="text-black cursor-pointer"> Clique Aqui!
                
                </span>
                </Link>
                }
          </p>
        </div>
    )
}