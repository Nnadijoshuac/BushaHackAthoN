"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import {
  ArrowRight,
  CircleDollarSign,
  Clock3,
  Landmark,
  Link2,
  ReceiptText,
} from "lucide-react";
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
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">
            Understand your money at a glance
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
            This dashboard is organized around the questions a business team asks every day:
            what came in, what still needs attention, and what can be settled now.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/app/payment-links/new"
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white"
          >
            Create payment link
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/app/settlements"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700"
          >
            Review settlements
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <MetricCard
          label="Total received"
          value={formatMoney(data.summary.totalReceived, "USD")}
          note="Successful collections across your payment requests."
        />
        <MetricCard
          label="Available balance"
          value={formatMoney(data.summary.availableBalance, "USD")}
          note="Funds currently ready for local settlement."
          tone="accent"
        />
        <MetricCard
          label="Pending payments"
          value={formatMoney(data.summary.pendingPayments, "USD")}
          note="Requests that still need follow-up or more time."
        />
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {[
          {
            title: "Collect",
            copy: "Create or resend a payment link when a client is still pending.",
            href: "/app/payment-links",
            label: "Manage payment links",
            icon: Link2,
          },
          {
            title: "Track",
            copy: "Open transactions to confirm who has paid and what still needs attention.",
            href: "/app/transactions",
            label: "View transactions",
            icon: ReceiptText,
          },
          {
            title: "Settle",
            copy: "Move funds locally when your available balance is ready.",
            href: "/app/settlements",
            label: "Open settlements",
            icon: Landmark,
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-blue-600">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-lg font-semibold text-slate-950">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">{item.copy}</p>
              <Link href={item.href} className="mt-4 inline-flex text-sm font-medium text-blue-600">
                {item.label}
              </Link>
            </div>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-950">Recent payment links</h2>
              <p className="mt-1 text-sm text-slate-500">
                Start here when you need to collect money from a client.
              </p>
            </div>
            <Link href="/app/payment-links" className="text-sm font-medium text-blue-600">
              View all
            </Link>
          </div>
          <div className="mt-5 space-y-3">
            {data.paymentLinks.map((link) => (
              <div key={link.id} className="rounded-[1.5rem] border border-slate-200 p-4">
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
              <p className="mt-1 text-sm text-slate-500">
                Use this view to confirm payment status quickly.
              </p>
            </div>
            <Link href="/app/transactions" className="text-sm font-medium text-blue-600">
              Open ledger
            </Link>
          </div>
          <div className="mt-5 space-y-3">
            {data.transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between rounded-[1.5rem] border border-slate-200 p-4"
              >
                <div>
                  <p className="font-medium text-slate-950">{transaction.customer}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {transaction.linkedTitle} | {formatDate(transaction.createdAt)}
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
