import 'dotenv/config'
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.PROJECT_URL, process.env.PROJECT_API_PUBLIC_ANON_KEY)

export default supabase
