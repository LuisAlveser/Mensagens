import { Button } from "@/components/ui/button"
import {Input} from"@/components/ui/input"
import Link from "next/link"

export function FormLogin(){
 
    return(
        <div className="flex flex-col items-center w-full h-full justify-center">
         <h1 className="text-black flex text-5xl font-extrabold ">Bem vindo</h1>
        <form className=" flex-col flex items-center pt-5 gap-5" >
          
            <Input className="bg-white  placeholder:text-blue-800   text-blue-800  w-100" placeholder="Email"/>
          
            <Input className="bg-white  placeholder:text-blue-800  text-blue-800  w-100" placeholder="Senha" type="password"/>
            <Button className={" bg-blue-600 hover:bg-blue-700  font-bold w-70 text-white"} type="submit">Logar</Button>
          
        </form>
          <p className="text-blue-500 pt-10">
            Não tem conta?{
                <Link href={"/cadastro"}>
                <span className="text-black cursor-pointer"> Clique Aqui!
                
                </span>
                </Link>
                }
          </p>
        </div>
    )
}