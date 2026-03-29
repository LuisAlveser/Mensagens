"use client"
import { Button } from "@/components/ui/button"
import {Input} from"@/components/ui/input"
import Link from "next/link"
import {useForm}from "react-hook-form"
import { useTransition } from "react";
import { useRouter } from 'next/navigation';
import {zodResolver} from "@hookform/resolvers/zod"
import z  from "zod";
import {cadastroShema} from "@/lib/Schemas"
import {cadastroUsuario}from "@/app/(server)/UserController"
import { CircleX, Loader2 } from "lucide-react";
export function FormCadastro(){
  const [carregando,start]=useTransition()
  const {register,handleSubmit,formState:{errors}}=useForm({
      resolver:zodResolver(cadastroShema),
    defaultValues:{
        nome:"",
        email:"",
        senha:""
    }
  })
  const cadastro=(data:z.infer<typeof cadastroUsuario>)=>{
    start(async ()=>{
      const usuario= await cadastroUsuario(data)
      if(usuario){
        console.log(usuario.sucesso)
      }
       usuario?.menssagem

    })
   
  }
    return(
        <div className="flex flex-col items-center w-full h-full justify-center">
         <h1 className="text-black flex text-5xl font-extrabold ">Comece a conversar</h1>
        <form className=" flex-col flex items-center pt-5 gap-5"onSubmit={handleSubmit(cadastro)} >
            <Input className="bg-white placeholder:text-blue-800 text-blue-800 w-100" placeholder="Nome" type="text" {...register("nome")}/>
             {errors.nome&&<span className="text-red-600">{errors.nome.message}</span>}

            <Input className="bg-white  placeholder:text-blue-800   text-blue-800  w-100" placeholder="Email" {...register("email")}/>
            {errors.email&&<span>{errors.email.message}</span>}
          
            <Input className="bg-white  placeholder:text-blue-800  text-blue-800  w-100" placeholder="Senha" type="password"{...register("senha")}/>
            {errors.senha&&<span>{errors.senha.message}</span>}
          
            <Button className={"cursor-pointer  bg-blue-600 hover:bg-blue-700  font-bold w-70 text-white"} type="submit" disabled={carregando}>
              {carregando?<Loader2  className="size-4 animate-spin"/>:<span>Cadastrar</span>}
            </Button>
          
        </form>
          <p className="text-blue-500 pt-10">
            Já tem conta?{
                <Link href={"/login"}>
                <span className="text-black cursor-pointer"> Clique Aqui!
                
                </span>
                </Link>
                }
          </p>
        </div>
    )
}