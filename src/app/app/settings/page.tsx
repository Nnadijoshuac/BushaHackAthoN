import { env } from "@/lib/env";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-blue-600">Settings</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          Environment and integration status
        </h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-500">Busha mode</p>
          <p className="mt-3 text-2xl font-semibold text-slate-950">
            {env.demoMode ? "Demo mode active" : "Live Busha connection"}
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-500">Supabase</p>
          <p className="mt-3 text-2xl font-semibold text-slate-950">
            {env.supabaseUrl ? "Configured" : "Awaiting environment keys"}
          </p>
        </div>
      </div>
    </div>
  );
}
