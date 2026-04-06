import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 1. Único export global permitido (Seguro para o Browser)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 2. O Admin deve ser SEMPRE uma função, nunca uma constante exportada direto
export const getSupabaseAdmin = () => {
  // Isso garante que se algum erro de import acontecer, 
  // a chave não vaze e o código não quebre no browser
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  if (!supabaseServiceKey) {
    throw new Error("Service Role Key não encontrada. Verifique se está no .env.local")
  }

  return createClient(supabaseUrl, supabaseServiceKey)
}