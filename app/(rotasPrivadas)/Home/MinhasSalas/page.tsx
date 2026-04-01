import { ListarSalasUsuario } from "@/app/componentesSite/ListarSalasdoUsuario";

export default function MinhasSalas(){
  return(
  <div className="w-full h-full flex flex-col">
     <h1 className="m-5 text-3xl font-extrabold">Minhas Salas</h1>
    <div className="flex flex-row  w-full gap-9 ">
      <ListarSalasUsuario/>
    </div>
  </div>
)
}