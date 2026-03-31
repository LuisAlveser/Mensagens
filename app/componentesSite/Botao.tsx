
"use client"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { logoutUsuario } from "../(server)/UserController"

interface TituloProp{
    titulo:string 
}

export function BotaoSair({titulo}:TituloProp){
  const[carregando,start]=useTransition()
  const router=useRouter()
  const sair =()=>{
    start(async ()=>{
        const saida=await logoutUsuario()
       
        if(saida.sucesso){
            router.push("/")
              router.refresh()
        }else{
            console.log(saida.mensagem)
        }
    })
  }
  return(
    <>
    <Button  onClick={sair}className={"cursor-pointer  bg-blue-600 hover:bg-blue-700  font-bold w-70 text-white"} disabled={carregando}>
              {carregando?<Loader2  className="size-4 animate-spin" />:<span>{titulo}</span>}
            </Button>
    </>
  )
}
