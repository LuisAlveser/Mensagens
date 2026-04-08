import { Card, CardHeader } from "@/components/ui/card";
import { CircleUserRound } from "lucide-react";
import { BotaoSair } from "./Botao";
import Image from "next/image";
interface MembroComDadosDoUsuario {
  userId: string;
  salaId: string;
  
  user: {
    nome: string;
    imagem: string | null;
  };
}
interface MembrosPros{
    membros?:MembroComDadosDoUsuario[]
}
export function ListaDeMembrosSala({membros}:MembrosPros){
   
    return(
     <div className="mt-auto flex justify-center items-center w-full h-fi">
       
        <Card className="flex flex-col w-full max-w-sm p-4 items-center bg-black border-none shadow-xl gap-5">
            <h1 className="text-white">Membros </h1>
           {membros?.map((item)=>(
             <CardHeader className="flex flex-row items-center gap-4 w-150 justify-center pb-4"key={item.userId}>
                {item.user.imagem ? (
              <Image
                src={item.user.imagem}
                alt={item.user.nome}
                width={35}
                height={35}
                className="rounded-full object-cover"
              />
            ) : (
              <CircleUserRound className="text-white" size={35} />
            )}
            <h1 className="text-white text-2xl font-extrabold">{item.user.nome}</h1>
             </CardHeader>
           ))}
           
        
          
         
        </Card>
      </div>
    )
}