import { ReactNode } from "react";
import {obterUsuarioDoCookie} from"@/app/(server)/UserController"
import { redirect } from "next/navigation";
import { OpcoesHome } from "../componentesSite/OpcoesHome";

export  default async function LayoutProtegido({children}:{children:ReactNode}){
 const usuario= await obterUsuarioDoCookie()
 if(!usuario){
    redirect("/")
 }
 
 return(<>
   <div className="w-full h-full flex flex-row">
     <OpcoesHome/>
 {children}
   </div>
 
 </>)
}