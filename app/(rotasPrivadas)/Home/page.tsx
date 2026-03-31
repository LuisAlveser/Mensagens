import { ListaSalas } from "@/app/componentesSite/ListaSalas";
import { OpcoesHome } from "@/app/componentesSite/OpcoesHome";

export default function Home(){
  return(
  <div className="w-full h-full flex flex-col">
     <h1 className="m-5 text-3xl font-extrabold">Salas Disponíveis</h1>
    <div className="flex flex-row  max-h-screen w-150 ">
      <ListaSalas/>
    </div>
  </div>
)
}