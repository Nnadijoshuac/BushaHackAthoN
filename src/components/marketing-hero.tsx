"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Receive global client payments with branded links",
  "Track paid, pending, and failed transactions in one place",
  "Settle to local bank accounts without exposing crypto rails",
];

export function MarketingHero() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          Built for African businesses getting paid globally
        </span>
        <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
          Premium global payments with calm, local settlement control.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          BushaPay helps freelancers, creators, and lean finance teams collect international payments, see exactly who paid, and settle funds locally with zero crypto friction.
        </p>
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
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700"
          >
            Open live demo
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_32px_100px_-48px_rgba(15,23,42,0.4)]"
      >
        <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
          <p className="text-sm text-white/65">Available balance</p>
          <p className="mt-3 text-4xl font-semibold">$24,650.00</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs text-white/60">Pending</p>
              <p className="mt-2 text-lg font-medium">$3,650.00</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs text-white/60">Settlements this week</p>
              <p className="mt-2 text-lg font-medium">NGN 720,000</p>
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              {feature}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
