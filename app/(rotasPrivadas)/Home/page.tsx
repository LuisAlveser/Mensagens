import { ListaSalas } from "@/app/componentesSite/ListarSalas";


export default function Home(){
  return(
  <div className="w-full h-full flex flex-col">
     <h1 className="m-5 text-3xl font-extrabold">Salas Disponíveis</h1>
    <div className="flex flex-row  w-full  gap-9 ">
      <ListaSalas/>
    </div>
  </div>
)
}