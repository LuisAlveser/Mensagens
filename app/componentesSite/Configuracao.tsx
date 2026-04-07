'use client'
import { Button } from "@/components/ui/button"
import {Input} from"@/components/ui/input"
import { Loader2, Trash2 } from "lucide-react"
import { useTransition } from "react";
import { useRouter } from 'next/navigation';
import {zodResolver} from "@hookform/resolvers/zod"
import z  from "zod";
import { useForm } from "react-hook-form";
import {atualizarUsuario}from "@/app/(server)/UserController"
import {atualizarContaShema} from "@/lib/Schemas"
interface UserProp{
    user:{
        nome:string,
        email:string,
        imagem?:string|null
    }
}

export function Configuracao({user}:UserProp){
    const[carregando,start]=useTransition()

    const {register,handleSubmit,formState:{errors}}=useForm({
      resolver:zodResolver(atualizarContaShema),
      defaultValues:{
        nome:user?user.nome:"",
        email:user?user.email:"",
        imagem:""
    }
  })
  const atualizar=(data:z.infer<typeof atualizarContaShema>)=>{
    start(async ()=>{ 
    const temImagem = data.imagem instanceof FileList && data.imagem.length > 0;

    const payload = {
      ...data,
      imagem: temImagem ? data.imagem : null 
    };

      
        const resposta= await atualizarUsuario(data)
        if(resposta.sucesso){
          console.log(resposta.mensagem)
        }else{
        console.log(resposta)
        }
        
    })
      
  }
    return( 
    <div className="flex flex-col w-full h-full  ">
        <h1 className="text-2xl font-extrabold m-10">Configurações</h1>
          
        <form className="grid grid-cols-1 md:grid-cols-3 gap-8  flex-row items-center pt-5 "  onSubmit={handleSubmit(atualizar)} >
         
          <div className="flex flex-col m-10">
          <h2 className="text-xl font-semibold">Perfil</h2>
          <p className="text-sm text-muted-foreground">Atualize sua foto e detalhes públicos.</p>
        </div>
          <div className="flex flex-col gap-4 items-center ">
            <Input className="bg-white  placeholder:text-blue-800   text-blue-800  w-100" placeholder="Nome" {...register("nome")} />
            {errors.nome&&<span className="text-red-600">{errors.nome.message}</span>}


            <Input className="bg-white  placeholder:text-blue-800  text-blue-800  w-100" placeholder="Email"{...register("email")} />
             {errors.email&&<span className="text-red-600">{errors.email.message}</span>}

            <Input className="bg-white placeholder:text-blue-800 text-blue-800 w-100"  type="file" {...register("imagem")} />

            <Button className={"cursor-pointer bg-blue-600 hover:bg-blue-700  font-bold w-70 text-white"} type="submit" disabled={carregando} >
              {carregando?<Loader2  className="size-4 animate-spin"/>:<span>Salvar</span>}
            </Button>
          </div>
        </form>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 pt-5">
        
          <div className="flex flex-col m-10">
          <h2 className="text-xl font-semibold">Zona de Perigo</h2>
          <p className="text-sm text-muted-foreground">Ações irreversíveis para sua conta.</p>
        </div>

        <div className="md:col-span-2 border w-150 border-red-200 rounded-lg p-6 bg-red-50/30">
          <h3 className="font-medium text-red-900">Excluir conta</h3>
          <p className="text-sm text-red-700 mt-1 mb-4">
            Ao excluir sua conta, todos os seus dados serão removidos permanentemente. Esta ação não pode ser desfeita.
          </p>
          <Button variant="destructive" className="flex gap-2 cursor-pointer">
            <Trash2 className="w-4 h-4" />
            Excluir minha conta
          </Button>
        </div>
      </section>
 </div>
)
}