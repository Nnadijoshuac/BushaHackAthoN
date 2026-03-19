import { createClient } from "@supabase/supabase-js";
import { env } from "@/lib/env";

export function getSupabaseServerClient() {
  if (!env.supabaseUrl || !env.supabaseServiceRoleKey) {
    return null;
  }

  return createClient(env.supabaseUrl, env.supabaseServiceRoleKey);
}
