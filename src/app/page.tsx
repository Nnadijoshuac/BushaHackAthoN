import Link from "next/link";
import { ArrowUpRight, BanknoteArrowUp, Globe2, Landmark, Link2 } from "lucide-react";
import { MarketingHero } from "@/components/marketing-hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f8fbff_0%,_#f5f7fb_42%,_#f6f7f3_100%)]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <header className="flex items-center justify-between rounded-[2rem] border border-slate-200 bg-white px-5 py-4 shadow-[0_24px_80px_-56px_rgba(15,23,42,0.25)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-sm font-semibold text-white">
              B
            </div>
            <div>
              <p className="font-semibold text-slate-950">BushaPay</p>
              <p className="text-sm text-slate-500">Business payments that feel familiar</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-slate-600">
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-medium text-white"
            >
              Get started
            </Link>
          </div>
        </header>
        <main className="space-y-14 py-12">
          <MarketingHero />
          <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-blue-600">Why it feels easier</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Clear flows, not finance clutter
              </h2>
              <div className="mt-6 space-y-4">
                {[
                  "Start from a single overview dashboard",
                  "Use plain labels for links, transactions, and settlements",
                  "See next actions immediately instead of decoding a wallet interface",
                ].map((copy) => (
                  <div key={copy} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-600">
                    {copy}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white">
              <p className="text-sm text-white/60">Designed for daily operations</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/8 p-5">
                  <Link2 className="h-5 w-5 text-blue-300" />
                  <p className="mt-4 text-lg font-medium">Payment links</p>
                  <p className="mt-2 text-sm leading-6 text-white/68">
                    Send a professional payment request your client can understand instantly.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/8 p-5">
                  <BanknoteArrowUp className="h-5 w-5 text-blue-300" />
                  <p className="mt-4 text-lg font-medium">Local settlement</p>
                  <p className="mt-2 text-sm leading-6 text-white/68">
                    Move available funds to your bank account without crypto-style mental overhead.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Branded payment links",
                icon: Link2,
                copy: "Launch clean payment pages in minutes with fixed amount, currency, expiry, and description.",
              },
              {
                title: "Clear payment tracking",
                icon: Globe2,
                copy: "See what is pending, paid, or failed without digging through chats or bank alerts.",
              },
              {
                title: "Local settlements",
                icon: Landmark,
                copy: "Route funds to saved recipients and settle in local currency with a calm finance workflow.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
                </div>
              );
            })}
          </section>
          <section className="flex flex-col justify-between gap-6 rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-8 text-white lg:flex-row lg:items-center">
            <div>
              <p className="text-sm text-white/60">Ready to see the simpler flow?</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                Open the BushaPay dashboard and follow the product from collection to settlement.
              </h3>
            </div>
            <Link
              href="/app"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950"
            >
              Enter dashboard
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}
