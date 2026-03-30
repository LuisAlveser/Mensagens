import { Card} from "@/components/ui/card";
import {Input} from"@/components/ui/input"
export function FormCriarSala(){
   
    return(
    <div className="flex flex-col w-full h-full items-center ">
    <div className="flex flex-row w-full h-20">
       <h1 className="text-2xl font-extrabold m-10">Criar  Sala</h1>
    </div>
    <Card className="flex flex-col bg-blue-700 w-200 h-auto items-center">
        <form className=" flex flex-col gap-10 justify-center ">
            <h1 className="text-white font-extrabold text-2xl">Digite o nome da sala</h1>
         <Input className="bg-white placeholder:text-blue-800 text-blue-800 w-100" placeholder="Nome" type="text" />

          <h1 className="text-white font-extrabold text-2xl">Escolha uma categoria</h1>
        </form>
    </Card>
 </div>
 )
}