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