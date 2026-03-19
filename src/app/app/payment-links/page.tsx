import Link from "next/link";
import { ArrowUpRight, Clock3, Link2, Plus } from "lucide-react";
import { demoPaymentLinks } from "@/lib/demo-data";
import { StatusBadge } from "@/components/status-badge";
import { formatDate, formatMoney } from "@/lib/utils";

export default function PaymentLinksPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-blue-600">Payment links</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
            Create and manage payment requests
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            Each payment link is a simple client-facing request with a title, amount, expiry, and status.
          </p>
        </div>
        <Link
          href="/app/payment-links/new"
          className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white"
        >
          <Plus className="h-4 w-4" />
          New payment link
        </Link>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm text-slate-400">Total links</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">{demoPaymentLinks.length}</p>
        </div>
        <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm text-slate-400">Pending</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">
            {demoPaymentLinks.filter((link) => link.status === "pending").length}
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm text-slate-400">Paid</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">
            {demoPaymentLinks.filter((link) => link.status === "paid").length}
          </p>
        </div>
      </section>

      <div className="space-y-3">
        {demoPaymentLinks.map((link) => (
          <div key={link.id} className="rounded-[1.75rem] border border-slate-200 bg-white p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-3">
                <div>
                  <p className="text-lg font-semibold text-slate-950">{link.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{link.description}</p>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5">
                    <Link2 className="h-4 w-4" />
                    /pay/{link.slug}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5">
                    <Clock3 className="h-4 w-4" />
                    Expires {formatDate(link.expiry)}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 lg:items-end">
                <p className="text-2xl font-semibold text-slate-950">
                  {formatMoney(link.amount, link.currency)}
                </p>
                <StatusBadge status={link.status} />
                <Link
                  href={`/pay/${link.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-600"
                >
                  Open hosted page
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
