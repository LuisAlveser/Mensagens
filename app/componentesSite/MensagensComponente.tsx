import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { InputMensagem } from "@/app/componentesSite/InputMensagem";
import { Mensagens } from "./Mensagens";
interface SalaProps{
    sala:{
    id:string,
    nome:string,
    descricao:string,
    imagem:string,
    categoria:string,
    admin:string    
    }
}
export function MensagensCompomente({sala}:SalaProps){
    return(
        <div className="flex flex-col   justify-center   ">
            <Card className="flex flex-col w-full max-w-[600px]  bg-blue-600">
               <CardHeader className="flex flex-row items-center justify-start">
    <div className="relative w-16 h-16 shrink-0"> 
        <Image 
           src={sala.imagem} 
            alt={sala.nome} 
              fill
              className="object-cover rounded-full border-2 border-white"
              sizes="64px"
              />
             </div>
         <h3 className="text-xl font-extrabold text-white truncate">
                     {sala.nome} 
                     </h3>
                 </CardHeader>
              
          
             <Mensagens id={`${sala.id}`}/>
           
         
             <InputMensagem id={`${sala.id}`}/>
             
            </Card>
           
        </div>

    )
}