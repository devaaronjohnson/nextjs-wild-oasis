import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = "https://quwwrtxqkjthsxhfosvu.supabase.co";
// const supabaseKey = "sb_publishable_t1GDKL_ndodVQ5TvmGxZsg_LoRqaDU4";
export const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY,
);
