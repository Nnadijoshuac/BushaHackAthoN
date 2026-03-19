"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  CreditCard,
  EllipsisVertical,
  Plus,
  ShieldCheck,
} from "lucide-react";

const features = [
  "Create branded payment links in minutes",
  "Track paid, pending, and failed requests clearly",
  "Settle available funds locally to saved recipients",
];

function PhoneShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[2.75rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(249,246,236,0.96))] p-4 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.45)] backdrop-blur ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function MarketingHero() {
  return (
    <section className="grid gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <span className="inline-flex rounded-full border border-white/80 bg-white/75 px-4 py-1.5 text-xs font-medium text-slate-700 shadow-[0_12px_32px_-24px_rgba(15,23,42,0.28)]">
          Premium collections and settlements for African businesses
        </span>
        <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
          Fintech clarity with a calmer, more premium feel.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          BushaPay gives freelancers, creators, and small businesses a simple workflow for receiving global payments, tracking who paid, and settling locally.
        </p>
        <div className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
          <div className="rounded-[1.75rem] border border-white/80 bg-white/80 px-4 py-4 shadow-[0_20px_40px_-32px_rgba(15,23,42,0.3)]">
            <p className="text-slate-400">Step 1</p>
            <p className="mt-1 font-medium text-slate-950">Create a link</p>
          </div>
          <div className="rounded-[1.75rem] border border-white/80 bg-white/80 px-4 py-4 shadow-[0_20px_40px_-32px_rgba(15,23,42,0.3)]">
            <p className="text-slate-400">Step 2</p>
            <p className="mt-1 font-medium text-slate-950">Receive payment</p>
          </div>
          <div className="rounded-[1.75rem] border border-white/80 bg-white/80 px-4 py-4 shadow-[0_20px_40px_-32px_rgba(15,23,42,0.3)]">
            <p className="text-slate-400">Step 3</p>
            <p className="mt-1 font-medium text-slate-950">Settle locally</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white"
          >
            Create account
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/app"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-medium text-slate-700"
          >
            Open live demo
          </Link>
        </div>
        <div className="mt-8 space-y-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/70 px-4 py-3 text-sm text-slate-700 shadow-[0_20px_40px_-32px_rgba(15,23,42,0.22)]"
            >
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              {feature}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="relative mx-auto flex min-h-[760px] w-full max-w-[760px] items-center justify-center"
      >
        <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle,rgba(255,220,120,0.36),transparent_58%)] blur-3xl" />

        <PhoneShell className="relative z-10 w-[250px] -rotate-[9deg] self-end lg:absolute lg:left-0 lg:top-24">
          <div className="flex items-center justify-between">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-slate-700">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-slate-700">
                <Plus className="h-5 w-5" />
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-slate-700">
                <EllipsisVertical className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-5xl font-semibold tracking-tight text-slate-900">People</p>
            <div className="mt-6 grid grid-cols-3 gap-2 text-xs text-slate-500">
              <div className="rounded-full bg-slate-900 px-3 py-3 text-white">Paid 25%</div>
              <div className="rounded-full bg-[#ffd357] px-3 py-3 text-slate-900">Pending 51%</div>
              <div className="rounded-full border border-slate-300 px-3 py-3">Failed 14%</div>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-[2rem] bg-white p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-950">Harry Bender</p>
                  <p className="text-sm text-slate-500">Head of Design</p>
                </div>
                <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-medium text-lime-700">
                  Paid
                </span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                <div>
                  <p className="text-slate-400">Country</p>
                  <p className="mt-1 text-slate-900">Nigeria</p>
                </div>
                <div>
                  <p className="text-slate-400">Amount</p>
                  <p className="mt-1 text-slate-900">$1,350</p>
                </div>
                <div>
                  <p className="text-slate-400">Method</p>
                  <p className="mt-1 text-slate-900">Card</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] bg-[#ffd357] p-4 text-slate-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Katy Fuller</p>
                  <p className="text-sm text-slate-700">Creator payment</p>
                </div>
                <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium">
                  Pending
                </span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                <div>
                  <p className="text-slate-700">Country</p>
                  <p className="mt-1">US</p>
                </div>
                <div>
                  <p className="text-slate-700">Amount</p>
                  <p className="mt-1">$1,500</p>
                </div>
                <div>
                  <p className="text-slate-700">Method</p>
                  <p className="mt-1">Bank</p>
                </div>
              </div>
            </div>
          </div>
        </PhoneShell>

        <PhoneShell className="relative z-20 w-[280px] lg:absolute lg:left-[235px] lg:top-0">
          <div className="flex items-center justify-between">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-slate-700">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-white/80 px-5 py-3 text-sm text-slate-700">Directory</div>
              <div className="rounded-full bg-white/80 px-5 py-3 text-sm text-slate-700">Org Chat</div>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-slate-700">
                <EllipsisVertical className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-5xl font-semibold tracking-tight text-slate-900">Devices</p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-[1.6rem] bg-white p-4">
              <p className="text-sm font-medium text-slate-900">USD balance</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">$18,450</p>
              <p className="mt-1 text-sm text-slate-500">2 items</p>
            </div>
            <div className="rounded-[1.6rem] bg-white p-4">
              <p className="text-sm font-medium text-slate-900">NGN balance</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">₦15.2m</p>
              <p className="mt-1 text-sm text-slate-500">4 items</p>
            </div>
          </div>
          <div className="mt-5 rounded-[2rem] bg-[linear-gradient(180deg,#fbfaf3,#fff8d9)] p-5">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-medium text-slate-900">Map Session</p>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-700">
                <Plus className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-5 grid h-[260px] place-items-center rounded-[1.7rem] bg-[radial-gradient(circle_at_center,#fffbe8_0%,#f6f2df_100%)]">
              <div className="relative h-[190px] w-[190px] rounded-full border border-dashed border-slate-300/60">
                <span className="absolute left-5 top-12 flex h-7 w-7 items-center justify-center rounded-full bg-[#ffd357] text-xs font-medium text-slate-900">
                  1
                </span>
                <span className="absolute right-8 top-8 flex h-7 w-7 items-center justify-center rounded-full bg-[#ffd357] text-xs font-medium text-slate-900">
                  2
                </span>
                <span className="absolute bottom-10 left-12 flex h-7 w-7 items-center justify-center rounded-full bg-[#ffd357] text-xs font-medium text-slate-900">
                  3
                </span>
                <span className="absolute bottom-12 right-12 h-16 w-16 rounded-full bg-slate-900/16" />
              </div>
            </div>
          </div>
          <div className="mt-5 rounded-[1.6rem] bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-medium text-slate-950">Settlement queue</p>
                <p className="text-sm text-slate-500">Paris, France</p>
              </div>
              <EllipsisVertical className="h-4 w-4 text-slate-500" />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">Today, 13:00</span>
              <span className="text-slate-400">USD to NGN</span>
            </div>
          </div>
        </PhoneShell>

        <PhoneShell className="relative z-10 w-[250px] rotate-[8deg] self-end lg:absolute lg:right-0 lg:top-20">
          <div className="flex items-center justify-between">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-slate-700">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-white/80 px-5 py-3 text-sm text-slate-700">Directory</div>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-slate-700">
                <EllipsisVertical className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-5xl font-semibold tracking-tight text-slate-900">Status</p>
          </div>
          <div className="mt-6 rounded-[2rem] bg-white p-5">
            <p className="text-center text-2xl font-medium text-slate-900">Collection health</p>
            <div className="mt-6 flex justify-center">
              <div className="relative h-40 w-40">
                <div className="absolute inset-0 rounded-full border-[16px] border-slate-900/10 border-t-[#ffd357] border-l-[#ffd357]" />
                <div className="absolute inset-[24px] grid place-items-center rounded-full bg-white">
                  <div className="text-center">
                    <p className="text-4xl font-semibold text-slate-900">78%</p>
                    <p className="mt-1 text-sm text-slate-500">Healthy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 rounded-[2rem] bg-slate-900 p-5 text-white">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-medium">Session history</p>
              <p className="text-4xl font-light">2/8</p>
            </div>
            <div className="mt-6 space-y-4">
              {[
                ["Harry Bender", "Sep 20, 17:30", "Paris"],
                ["Katy Fuller", "Sep 20, 15:00", "New York"],
                ["Jonathan Kelly", "Sep 20, 12:30", "Lagos"],
                ["Billie Wright", "Sep 19, 14:30", "Accra"],
              ].map(([name, time, city]) => (
                <div key={name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12">
                      <CreditCard className="h-4 w-4 text-white/80" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{name}</p>
                      <p className="text-xs text-white/50">{time}</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/55">{city}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 rounded-2xl bg-white/8 px-4 py-3 text-sm text-white/70">
              <ShieldCheck className="h-4 w-4 text-[#ffd357]" />
              Trusted payment and settlement activity
            </div>
          </div>
        </PhoneShell>
      </motion.div>
    </section>
  );
}
