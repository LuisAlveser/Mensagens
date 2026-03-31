import { Card, CardDescription, CardHeader } from "@/components/ui/card"
import { listarsala } from "../(server)/SelaController"
import Image from "next/image";
export async function ListaSalas(){
    const salas =await listarsala()
    return(
       <div className="flex flex-col w-50 h-20  m-10 hover:scale-105 transition-transform duration-200">
      {salas?.salas?.map((item)=>(
         
         <li key={item.id} className="flex  w-100 h-100 flex-col ">
            <Card className="flex flex-col bg-blue-600">
             <CardHeader className="flex flex-row items-center  justify-center gap-4">
                 <div className="relative w-20 h-20 shrink-0"> 
                    <Image 
                    src={item.imagem} 
                    alt={item.nome} 
                    fill
                    className="object-cover rounded-full border-2 border-white"
                               
                        />
                 </div>
               <h3 className="text-2xl font-extrabold text-white">
                {item.nome} 
               </h3>
            
                            
                        
      </CardHeader>
             <CardDescription className="flex flex-col justify-center items-center">
               <div className="w-50 h-[2px] bg-white/20 rounded-full"></div>
                <p className="text-2xl font-extrabold text-white pt-4">{item.descricao}</p>    
            </CardDescription> 
            
             </Card>
          </li> 
          
      ))}

       </div>
    )
}