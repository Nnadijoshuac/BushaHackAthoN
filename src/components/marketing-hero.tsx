"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Create a payment link in minutes",
  "See paid, pending, and failed requests clearly",
  "Settle funds locally to saved bank accounts",
];

export function MarketingHero() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          Built for businesses in Africa getting paid globally
        </span>
        <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
          Get paid globally. Track every payment. Settle locally.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          BushaPay gives freelancers, creators, and small businesses one simple workflow for international collections and local settlements, without confusing wallet-style UX.
        </p>
        <div className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <p className="text-slate-400">Step 1</p>
            <p className="mt-1 font-medium text-slate-950">Create a link</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <p className="text-slate-400">Step 2</p>
            <p className="mt-1 font-medium text-slate-950">Get paid</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
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
        className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_32px_100px_-54px_rgba(15,23,42,0.28)]"
      >
        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">Today&apos;s overview</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">$24,650.00</p>
              <p className="mt-1 text-sm text-slate-500">Available to settle</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
              12 payments this month
            </span>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs text-slate-400">Pending payments</p>
              <p className="mt-2 text-lg font-medium text-slate-950">$3,650.00</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs text-slate-400">Last settlement</p>
              <p className="mt-2 text-lg font-medium text-slate-950">NGN 720,000</p>
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
            >
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              {feature}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
