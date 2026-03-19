"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { ArrowRight, CircleDollarSign, Clock3, Link2 } from "lucide-react";
import { MetricCard } from "@/components/metric-card";
import { StatusBadge } from "@/components/status-badge";
import type { PaymentLink, Transaction } from "@/lib/types";
import { formatDate, formatMoney } from "@/lib/utils";

type DashboardData = {
  summary: {
    totalReceived: number;
    availableBalance: number;
    pendingPayments: number;
  };
  paymentLinks: PaymentLink[];
  transactions: Transaction[];
};

async function getDashboardData(): Promise<DashboardData> {
  const [linksRes, balancesRes, txRes] = await Promise.all([
    fetch("/api/payment-links"),
    fetch("/api/balances"),
    fetch("/api/transactions"),
  ]);

  const [{ data: paymentLinks }, { summary }, { data: transactions }] = await Promise.all([
    linksRes.json(),
    balancesRes.json(),
    txRes.json(),
  ]);

  return { paymentLinks, summary, transactions };
}

export default function AppHomePage() {
  const { data } = useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboardData,
  });

  if (!data) {
    return <div className="text-sm text-slate-500">Loading dashboard...</div>;
  }

  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-medium text-blue-600">Overview</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">
            Global inflows, local control.
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            Keep payment collection, link performance, and settlement readiness visible from one workspace.
          </p>
        </div>
        <Link
          href="/app/payment-links/new"
          className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white"
        >
          Create payment link
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <MetricCard
          label="Total received"
          value={formatMoney(data.summary.totalReceived, "USD")}
          note="Successful collections across your linked payment requests."
        />
        <MetricCard
          label="Available balance"
          value={formatMoney(data.summary.availableBalance, "USD")}
          note="Funds currently ready for local settlement."
        />
        <MetricCard
          label="Pending payments"
          value={formatMoney(data.summary.pendingPayments, "USD")}
          note="Open links and bank transfers still awaiting completion."
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-950">Recent payment links</h2>
              <p className="mt-1 text-sm text-slate-500">See which client requests need attention.</p>
            </div>
            <Link href="/app/payment-links" className="text-sm font-medium text-blue-600">
              View all
            </Link>
          </div>
          <div className="mt-5 space-y-3">
            {data.paymentLinks.map((link) => (
              <div key={link.id} className="rounded-3xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-slate-950">{link.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{link.description}</p>
                  </div>
                  <StatusBadge status={link.status} />
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <CircleDollarSign className="h-4 w-4" />
                    {formatMoney(link.amount, link.currency)}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    Expires {formatDate(link.expiry)}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Link2 className="h-4 w-4" />/pay/{link.slug}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-950">Recent transactions</h2>
              <p className="mt-1 text-sm text-slate-500">Who paid and how the payment moved.</p>
            </div>
            <Link href="/app/transactions" className="text-sm font-medium text-blue-600">
              Open ledger
            </Link>
          </div>
          <div className="mt-5 space-y-3">
            {data.transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between rounded-3xl border border-slate-200 p-4">
                <div>
                  <p className="font-medium text-slate-950">{transaction.customer}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {transaction.linkedTitle} • {formatDate(transaction.createdAt)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-slate-950">
                    {formatMoney(transaction.amount, transaction.currency)}
                  </p>
                  <div className="mt-2">
                    <StatusBadge status={transaction.status} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
