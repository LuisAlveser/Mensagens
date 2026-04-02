import { Card, CardDescription, CardHeader } from "@/components/ui/card"
import { buscarSalasCriadas } from "../(server)/SalaController"
import Image from "next/image";
import { SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";
import { BotaoExcluirSala } from "./Botao";
export async function ListarSalasUsuario(){
    const salas =await buscarSalasCriadas()
    if(!salas || !salas.salas || salas.salas.length === 0){
      return <div className="flex flex-1 flex-col justify-center items-center ">
        <h1 className=" text-4xl text-black justify-center">Você não tem salas criadas</h1>
        </div>
      
    }
     
     return (
          
           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-4 md:p-10">
               {salas?.salas?.map((item) => (
                   <li key={item.id} className="list-none">
                     
                       <Card className="flex flex-col bg-blue-600 hover:scale-105 transition-all duration-300 min-h-[250px] border-none shadow-xl">
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

                                <Link href={`/Home/EditarSala/${item.id}`}>
                                  <SquarePen className="text-white cursor-pointer" />
                                </Link>
                                <BotaoExcluirSala id={`${item.id}`}/>
                              

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
                   </li> 
               ))}
           </ul>
       )
}