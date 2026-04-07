'use client'
import {Input} from"@/components/ui/input"
import { Button } from "@/components/ui/button";
import {PesquisaShema} from "@/lib/Schemas"
import { Loader2 } from "lucide-react";
import {useForm}from "react-hook-form"
import { useState, useTransition } from "react"
import { useRouter } from 'next/navigation';
import { zodResolver } from "@hookform/resolvers/zod";
import z  from "zod";
import { buscarSalaPorNome } from "../(server)/SalaController";
import Link from "next/link";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import Image from "next/image";
export default function FormPesquisaSala(){
    const [carregando,start]=useTransition()
    const [salas,setSalas]:any =useState([])
    const router=useRouter()
    const buscarsala=(data:z.infer<typeof PesquisaShema>)=>{
      
        start(async ()=>{
         const sala= await buscarSalaPorNome(data.nomesala)
         if(!sala.sucesso){
            console.log(sala.mensagem)

         }
         setSalas(sala.salas)
         router.refresh()
        })
    }

    const{register,handleSubmit,formState:{errors}}=useForm({
        resolver:zodResolver(PesquisaShema),
        defaultValues:{
            nomesala:""
        }
    })
    return(<div className="flex items-center w-full flex-col">
    <div className="flex flex-row justify-center itens-center m-10 w-full gap-4">
        <form onSubmit={handleSubmit(buscarsala)}>
          
        <Input className="w-150" placeholder="Pesquisar Sala" {...register("nomesala")}/> 
         
           <Button className={"cursor-pointer bg-blue-600 hover:bg-blue-700   font-bold w-30 text-white"} type="submit" disabled={carregando}   >
      {carregando?<Loader2  className="size-4 animate-spin"/>:<span>Buscar</span>}
            </Button>
            </form>
           
           
   </div>
    {errors.nomesala&&<span className="text-red-600">{errors.nomesala.message}</span>}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-4 md:p-10">
        {salas.map((item: any) => (
          <li key={item.id} className="list-none">
            {/* CORREÇÃO 3: Adicionada a barra "/" para evitar rotas quebradas */}
            <Link href={`/Home/SalaMensagens/${item.id}`}>
              <Card className="flex flex-col bg-blue-600 hover:scale-105 transition-all duration-300 min-h-[250px] border-none shadow-xl cursor-pointer">
                <CardHeader className="flex flex-row items-center justify-start gap-4 p-6">
                  <div className="relative w-16 h-16 shrink-0">
                    <Image
                      src={item.imagem}
                      alt={item.nome}
                      fill
                      className="object-cover rounded-full border-2 border-white"
                      sizes="64px"
                    />
                  </div>
                  <h3 className="text-xl font-extrabold text-white truncate">
                    {item.nome}
                  </h3>
                </CardHeader>

                <div className="px-6 flex flex-col items-center pb-6">
                  <div className="w-full h-[2px] bg-white/20 rounded-full"></div>
                  <CardDescription className="mt-4">
                    <p className="text-lg font-bold text-white text-center">
                      {item.descricao}
                    </p>
                  </CardDescription>
                </div>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
</div> 
  )
}