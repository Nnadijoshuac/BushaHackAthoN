"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, ChartNoAxesCombined, HandCoins, Landmark, Link2, Settings, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/app", label: "Overview", icon: ChartNoAxesCombined },
  { href: "/app/onboarding", label: "Onboarding", icon: Building2 },
  { href: "/app/payment-links", label: "Payment links", icon: Link2 },
  { href: "/app/balances", label: "Balances", icon: Landmark },
  { href: "/app/transactions", label: "Transactions", icon: HandCoins },
  { href: "/app/recipients", label: "Recipients", icon: Users },
  { href: "/app/settlements", label: "Settlements", icon: Landmark },
  { href: "/app/settings", label: "Settings", icon: Settings },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_32%),linear-gradient(180deg,_#f8fbff_0%,_#f7f7f5_100%)]">
      <div className="mx-auto grid min-h-screen max-w-7xl gap-6 px-4 py-4 lg:grid-cols-[250px_1fr] lg:px-6">
        <aside className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 backdrop-blur">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-sm font-semibold text-white">
              B
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-950">BushaPay</p>
              <p className="text-xs text-slate-500">Global payments, local settlement</p>
            </div>
          </Link>
          <nav className="mt-8 space-y-1">
            {items.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition",
                    active
                      ? "bg-slate-950 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-8 rounded-3xl bg-blue-50 p-4 text-sm text-slate-700">
            <p className="font-medium text-slate-950">Demo mode ready</p>
            <p className="mt-2">
              Missing Busha or Supabase keys automatically fall back to realistic mock data.
            </p>
          </div>
        </aside>
        <main className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 backdrop-blur lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
