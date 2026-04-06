
import { BuscarMensagemPorSala } from "../(server)/MensagemController"

import { ListaMensagens } from "./ListaMensagens";

interface SalaProps{
    id:string
}

export async function Mensagens({id}:SalaProps){
    
    const mensagens =await BuscarMensagemPorSala(id)
    const lista = mensagens?.mensagens || [];
    if(!mensagens?.mensagens || mensagens.mensagens.length === 0) return <h1 className="text-2xl text-black font-extrabold justify-center">
        Escreva a primerira mensagem da sala</h1>
   return( 
    <ListaMensagens id={`${id}`} mensagens={lista}/>
)
}