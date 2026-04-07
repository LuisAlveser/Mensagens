import { buscarUserPorId } from "@/app/(server)/UserController";
import { Configuracao } from "@/app/componentesSite/Configuracao";

export default async function Configurações(){
    const usuario=await buscarUserPorId()
    if(!usuario?.sucesso){
        return<h1>Usuario não encontrado</h1>
    }
    const user=usuario?.user
    return(
      <Configuracao user={user!}/>
)
}