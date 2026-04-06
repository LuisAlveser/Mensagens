import { buscarMembrosPorSala } from "@/app/(server)/MembrosController"
import { buscaSalaPorId } from "@/app/(server)/SalaController"
import { ListaDeMembrosSala } from "@/app/componentesSite/ListaDeMembrosSala"
import { MensagensCompomente } from "@/app/componentesSite/MensagensComponente"
import { Card, CardHeader } from "@/components/ui/card"

export default async function SalaMensagens({params}:{params:{id:string}}){
    const {id}= await params
    const resposta= await buscaSalaPorId(id)
    const respostaMembros=await buscarMembrosPorSala(id)
    const membros=respostaMembros?.sala
    console.log(membros)
    const sala=resposta?.sala
    return(
    <div className=" flex flex-row w-full max-h-max  m-10 justify-center items-center gap-4">
         <MensagensCompomente sala={sala!}/>
         <div className="flex flex-col ">
        <ListaDeMembrosSala membros={membros}/>
        </div>
    </div>
)
}