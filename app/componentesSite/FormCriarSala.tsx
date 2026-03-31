
'use client'
import { Button } from "@/components/ui/button";
import { Card} from "@/components/ui/card";
import {Input} from"@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BrainCircuit, Code2, Coffee, Gamepad2, Loader2, Rocket, Trophy, Tv } from "lucide-react";
import {  useState, useTransition } from "react";
import { useRouter } from 'next/navigation';
import {zodResolver} from "@hookform/resolvers/zod"
import z, { string }  from "zod";
import { useForm } from "react-hook-form";
import { SalaShema } from "@/lib/Schemas";
import { criarSala } from "../(server)/SelaController";

export function FormCriarSala(){
    const [carregando,start]=useTransition()
    const router=useRouter()

   
 const {register,setValue,watch,handleSubmit,formState:{errors}}=useForm({
    resolver:zodResolver(SalaShema),
    defaultValues:{
        nome:"",
        descricao:"",
       
        categoria:"",
    }
 })
 const categoriaValor:string = watch("categoria");

 const criar=(data:z.infer<typeof SalaShema>)=>{
  
        
    start(async ()=>{ 
    
      const sala =await criarSala(data)
        
         console.log(sala)
      if(sala?.sucesso){
        console.log(sala)
        router.push("/Home")
        
      }
      else{
        console.log(sala?.mensssagem)
      }
    })
 }
    return(
    <div className="flex flex-col w-full h-full items-center ">
    <div className="flex flex-row w-full h-20">
       <h1 className="text-2xl font-extrabold m-10">Criar  Sala</h1>
    </div>
    <Card className="flex flex-col bg-blue-700 w-200 h-auto items-center">
        <form className=" flex flex-col gap-4 justify-center " onSubmit={handleSubmit(criar)}>
            <h1 className="text-white font-extrabold text-2xl">Digite o Nome da Sala</h1>
         
         <Input className="bg-white placeholder:text-blue-800 text-blue-800 w-100" placeholder="Nome" type="text" {...register("nome")}/>
             {errors.nome&&<span className="text-red-600">{errors.nome.message}</span>}

          <h1 className="text-white font-extrabold text-2xl">Escolha uma Descrição</h1>
           <Input className="bg-white placeholder:text-blue-800 text-blue-800 w-100" placeholder="Descrição" type="text"{...register("descricao")} />
             {errors.descricao &&<span className="text-red-600">{errors.descricao.message}</span>}


            <h1 className="text-white font-extrabold text-2xl">Capa da Sala</h1>
           <Input className="bg-white placeholder:text-blue-800 text-blue-800 w-100"  type="file"{...register("imagem")} />
           
           
            <h1 className="text-white font-extrabold text-2xl">Selecione a Categoria</h1>
           <Select onValueChange={(value) => setValue("categoria", value!)} value={categoriaValor}>
      <SelectTrigger className="w-70 bg-blue-700 text-white border-blue-500 hover:bg-blue-600 transition-colors [&>span]:text-white outline-none">
        <SelectValue placeholder="Selecione a Categoria da Sala" />
      </SelectTrigger>
      
      <SelectContent className="bg-blue-800 border-blue-600 text-white">
        <SelectGroup>
          <SelectLabel className="text-blue-200">Temas Populares</SelectLabel>
          
          <SelectItem value="programacao" className="focus:bg-blue-600 focus:text-white cursor-pointer">
            <div className="flex items-center gap-2">
              <Code2 size={16} /> <span>Programação & Dev</span>
            </div>
          </SelectItem>

          <SelectItem value="games" className="focus:bg-blue-600 focus:text-white cursor-pointer">
            <div className="flex items-center gap-2">
              <Gamepad2 size={16} /> <span>Games & eSports</span>
            </div>
          </SelectItem>

          <SelectItem value="startups" className="focus:bg-blue-600 focus:text-white cursor-pointer">
            <div className="flex items-center gap-2">
              <Rocket size={16} /> <span>Startups & Business</span>
            </div>
          </SelectItem>

          <SelectItem value="ia" className="focus:bg-blue-600 focus:text-white cursor-pointer">
            <div className="flex items-center gap-2">
              <BrainCircuit size={16} /> <span>IA & Inovação</span>
            </div>
          </SelectItem>

          <SelectItem value="esportes" className="focus:bg-blue-600 focus:text-white cursor-pointer">
            <div className="flex items-center gap-2">
              <Trophy size={16} /> <span>Esportes</span>
            </div>
          </SelectItem>

          <SelectItem value="entretenimento" className="focus:bg-blue-600 focus:text-white cursor-pointer">
            <div className="flex items-center gap-2">
              <Tv size={16} /> <span>Filmes & Séries</span>
            </div>
          </SelectItem>

          <SelectItem value="offtopic" className="focus:bg-blue-600 focus:text-white cursor-pointer">
            <div className="flex items-center gap-2">
              <Coffee size={16} /> <span>Café & Off-topic</span>
            </div>
          </SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
         <Button className={"cursor-pointer  bg-blue-600 hover:bg-blue-700  font-bold w-100 text-white"} type="submit" disabled={carregando}>
              {carregando?<Loader2  className="size-4 animate-spin"/>:<span>Criar Sala</span>}
            </Button>
        </form>
    </Card>
 </div>
 )
}