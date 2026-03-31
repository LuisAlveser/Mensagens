import { strict } from "assert"
import z from "zod"

export const cadastroShema=z.object({
    nome:z.string().min(3,"Nome muito curto").max(20,"O nome deve ter menos caracteres"),
    email:z.email("Digite um email válido"),
    senha:z.string().min(4,"A senha deve ter mais caracteres")
})

export const loginShema=z.object({
   
    email:z.email("Digite um email válido"),
    senha:z.string().min(4,"A senha deve ter mais caracteres")
})

export const SalaShema=z.object({
    nome:z.string().min(3,"Nome muito curto").max(20,"O nome deve ter menos caracteres"),
    descricao:z.string().min(3,"A descrição está muito curta").max(40,"A descrição deve ter menos caracteres"),
    categoria:z.string().min(3,"A descrição está muito curta").max(40,"A descrição deve ter menos caracteres"),
    imagem:z.any()
})