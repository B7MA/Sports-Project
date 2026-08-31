// عدّل هذين السطرين بقيمك من Supabase (Settings → API)
const SUPABASE_URL = "ضع_رابط_مشروعك_هنا";
const SUPABASE_ANON_KEY = "ضع_المفتاح_العام_هنا";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
