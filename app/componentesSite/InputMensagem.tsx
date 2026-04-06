'use client'
import {zodResolver} from "@hookform/resolvers/zod"
import z  from "zod";
import {MensagemShema} from "@/lib/Schemas"
import { Loader2 } from "lucide-react";
import {useForm}from "react-hook-form"
import { useTransition } from "react"
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import {Input} from"@/components/ui/input"
import { enviarMensagem } from "../(server)/MensagemController";

interface SalaProps{
    id:string
}

export function InputMensagem({id}:SalaProps){
    const[carregando,start]=useTransition();
    const router =useRouter()
    const enviar=(data:z.infer<typeof MensagemShema>)=>{
        start(async ()=>{
         const mensagem=await enviarMensagem(id,data.conteudo)
           if(mensagem?.sucesso){
              console.log(mensagem.sucesso)
              router.refresh()
           }else{
            console.log(mensagem?.mensagem)
           }
        })
        
         
    }
    const{register,handleSubmit,formState:{errors}}=useForm({
        resolver:zodResolver(MensagemShema),
       defaultValues:{
        conteudo:""
       }
    })
    return(<>
       <form className=" flex flex-col items-center w-full " onSubmit={handleSubmit(enviar)}>
        <div className="flex-row items-center justify-center gap-5 ">
           
            <Input className=" placeholder:text-black w-100 bg-white " placeholder="Mensagem" {...register("conteudo")}></Input>
           
          
            <Button className="cursor-pointer bg-black hover:bg-blue-700  font-bold w-20 text-white" type="submit" disabled={carregando}>
               {carregando? <Loader2  className="size-4 animate-spin"/>:<span>Enviar</span>} </Button>
        </div>
         {errors.conteudo&&<span className="text-red-600">{errors.conteudo.message}</span>}
    </form>
     </>
    )
}