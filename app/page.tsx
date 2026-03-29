import Image from "next/image";
import Logo from"@/public/mensagemlogo.png"
import Link from "next/link";
export default function Home() {


  return (
    <div className="flex flex-row max-h-screen  bg-white ">
      <div className=" min-h-screen flex flex-col  w-150 rounded-1xl bg-gradient-to-br from-blue-700 via-blue-800 to-black" >
        <div className="flex flex-row  m-4 text-3xl items-center font-extrabold gap-4">
             <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md ">
            <Image
              src={Logo}
              alt="Conecta Logo"
              width={40}
              height={40}
              className="brightness-0 invert" 
            />
          </div>
            <h1 className="justify-end text-white">Conecta</h1>
        </div>
          <div className="flex flex-col justify-center items-center pt-40">
              <p className="text-white items-center font-extrabold text-3xl ">
                Encontre pessoas é faça amizades
                </p>

            <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm ">
            <p className="italic text-slate-400">"A melhor forma de manter o contato com quem importa."</p>
          </div>
        
          </div>
            
      </div>
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="max-w-md w-full px-8">
        
          <h3 className="text-3xl font-bold text-slate-900 mb-2">Bem-vindo de volta</h3>
          <p className="text-slate-500 mb-8">Comece a conversar agora mesmo.</p>
          <Link href={"/cadastro"}>
          <button className=" cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-200">
            Entrar na plataforma
          </button>
          </Link>
        </div>
      </div>
   
    </div>
  );
}
