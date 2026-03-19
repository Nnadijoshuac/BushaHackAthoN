"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Building2,
  ChartNoAxesCombined,
  HandCoins,
  Landmark,
  Link2,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
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
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f7fafc_0%,_#f3f6fb_45%,_#f7f7f5_100%)]">
      <div className="mx-auto grid min-h-screen max-w-7xl gap-5 px-4 py-4 lg:grid-cols-[272px_1fr] lg:px-6">
        <aside className="rounded-[2rem] border border-slate-200/80 bg-white p-5 shadow-[0_28px_80px_-52px_rgba(15,23,42,0.25)]">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-sm font-semibold text-white">
              B
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-950">BushaPay</p>
              <p className="text-xs text-slate-500">Global collections for modern businesses</p>
            </div>
          </Link>
          <div className="mt-8 rounded-[1.5rem] bg-slate-950 p-4 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/55">Workspace</p>
            <p className="mt-2 text-lg font-semibold">Operations dashboard</p>
            <p className="mt-2 text-sm leading-6 text-white/68">
              Track collections, confirm who paid, and settle locally from one calm workspace.
            </p>
            <Link
              href="/app/payment-links/new"
              className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm font-medium text-slate-950"
            >
              New payment link
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-7">
            <p className="px-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Navigation
            </p>
          </div>
          <nav className="mt-3 space-y-1.5">
            {items.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between rounded-2xl px-3 py-3 text-sm transition",
                    active
                      ? "bg-blue-50 text-slate-950 ring-1 ring-blue-100"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-xl",
                        active ? "bg-white text-blue-700" : "bg-slate-100 text-slate-500",
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    {item.label}
                  </span>
                  {active ? <span className="h-2 w-2 rounded-full bg-blue-600" /> : null}
                </Link>
              );
            })}
          </nav>
          <div className="mt-8 rounded-[1.5rem] border border-blue-100 bg-blue-50/70 p-4 text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blue-600" />
              <p className="font-medium text-slate-950">Demo mode ready</p>
            </div>
            <p className="mt-2 leading-6">
              Missing Busha or Supabase keys automatically fall back to realistic mock data.
            </p>
          </div>
        </aside>
        <div className="space-y-5">
          <header className="flex flex-col gap-4 rounded-[2rem] border border-slate-200/80 bg-white px-6 py-5 shadow-[0_24px_80px_-56px_rgba(15,23,42,0.25)] lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600">BushaPay dashboard</p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">
                Simple payment operations for fast-moving businesses
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Everything is organized around three jobs: collect, track, and settle.
              </p>
            </div>
            <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 px-4 py-3">
                <p className="text-slate-400">Collect</p>
                <p className="mt-1 font-medium text-slate-950">Create payment links</p>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3">
                <p className="text-slate-400">Track</p>
                <p className="mt-1 font-medium text-slate-950">See who has paid</p>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-3">
                <p className="text-slate-400">Settle</p>
                <p className="mt-1 font-medium text-slate-950">Move funds locally</p>
              </div>
            </div>
          </header>
          <main className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_24px_80px_-56px_rgba(15,23,42,0.22)] lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
