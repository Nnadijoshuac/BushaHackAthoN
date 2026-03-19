export const env = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  demoMode:
    process.env.DEMO_MODE === "true" ||
    process.env.NEXT_PUBLIC_DEMO_MODE === "true" ||
    !process.env.BUSHA_SECRET_KEY,
  bushaApiBaseUrl: process.env.BUSHA_API_BASE_URL ?? "https://api.busha.so",
  bushaSecretKey: process.env.BUSHA_SECRET_KEY,
  bushaProfileId: process.env.BUSHA_PROFILE_ID,
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
};
