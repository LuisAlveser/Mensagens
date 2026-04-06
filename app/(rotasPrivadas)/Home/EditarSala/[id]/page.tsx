import { buscaSalaPorId } from "@/app/(server)/SalaController"
import { FormCriarSala } from "@/app/componentesSite/FormCriarSala"

export default async function EditarSala({params}:{params:{id:string}}){
    const {id } =await params
    const resposta= await buscaSalaPorId(id)
    const sala=resposta?.sala
    
    return(<FormCriarSala sala={sala}/>)
}