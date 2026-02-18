import { createClient } from '@supabase/supabase-js'

// 1. Asegúrate que esta URL sea la de tu nuevo proyecto (el de la captura)
const supabaseUrl = 'https://nykajjhfnnlaybdqsbxn.supabase.co'

// 2. PEGA AQUÍ LA NUEVA LLAVE QUE COPIASTE (la que empieza con eyJ...)
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55a2Fqamhmbm5sYXliZHFzYnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NTk1NjEsImV4cCI6MjA3MTMzNTU2MX0.l-a71P5Whazoa_ElVuwr08To5dXqn7eEVTH0smnJ18c' 

export const BUCKET_ID = 'galerias'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)