import Image from "next/image";
import Logo from"@/public/mensagemlogo.png"
import { CircleUserRound, Folder, FolderPlus, House, Search, UserRoundCog } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/card";
import { obterUsuarioDoCookie } from "../(server)/UserController";
import { BotaoSair } from "./Botao";
import Link from "next/link";

export async function OpcoesHome() {
  const usuario = await obterUsuarioDoCookie();

  return (
   
    <div className="flex flex-col min-h-screen w-100 bg-blue-700 p-6">
      
     
      <div className="flex flex-row items-center font-extrabold gap-4 mb-8">
        <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md">
          <Image
            src={Logo}
            alt="Conecta Logo"
            width={40}
            height={40}
            className="brightness-0 invert"
          />
        </div>
        <h1 className="text-3xl text-white">Conecta</h1>
      </div>

     
      <div className="flex flex-col flex-1 gap-2">

        <Link href={"/Home"}>
            <MenuItem Icon={House} label="Dashboard" />
        </Link>


        <Link href={"/Home/PesquisarSala"}>
            <MenuItem Icon={Search} label="Procurar Salas" />
        </Link>

        <Link href={"/Home/MinhasSalas"}>
          <MenuItem Icon={Folder} label="Minhas Salas" />
        </Link>

        <Link href={"/Home/CriarSala"}>
          <MenuItem Icon={FolderPlus} label="Criar Sala" />
        </Link>

        <Link href={"/Home/Configuracao"}>
          <MenuItem Icon={UserRoundCog} label="Configurações" />
        </Link>

      </div>

     
      <div className="mt-auto flex justify-center w-full">
        <Card className="flex flex-col w-full max-w-sm p-4 items-center bg-black border-none shadow-xl">
          <CardHeader className="flex flex-row items-center gap-4 w-full justify-start pb-4">
            {usuario?.imagem ? (
              <Image
                src={usuario.imagem}
                alt="Avatar"
                width={40} 
                height={40}
                className="rounded-full border border-white/20"
              />
            ) : (
              <CircleUserRound className="text-white" size={40} />
            )}
            <h1 className="text-white text-xl font-semibold truncate">
              {usuario?.nome || "Usuário"}
            </h1>
          </CardHeader>
          
          <BotaoSair titulo="Sair" />
        </Card>
      </div>
    </div>
  );
}


function MenuItem({ Icon, label }: { Icon: any, label: string }) {
  return (
    <div className="flex flex-row w-full h-16 rounded-2xl items-center gap-4 hover:bg-black/30 transition-all cursor-pointer px-4">
      <Icon className="text-white" size={24} />
      <h1 className="text-xl font-light text-white">{label}</h1>
    </div>
  );
}