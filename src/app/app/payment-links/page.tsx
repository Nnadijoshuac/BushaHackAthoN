import Link from "next/link";
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
            Send clean payment requests
          </h1>
        </div>
        <Link
          href="/app/payment-links/new"
          className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white"
        >
          New payment link
        </Link>
      </div>
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-6 py-4 font-medium">Title</th>
              <th className="px-6 py-4 font-medium">Amount</th>
              <th className="px-6 py-4 font-medium">Expiry</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {demoPaymentLinks.map((link) => (
              <tr key={link.id} className="border-t border-slate-200">
                <td className="px-6 py-4">
                  <p className="font-medium text-slate-950">{link.title}</p>
                  <p className="mt-1 text-slate-500">/pay/{link.slug}</p>
                </td>
                <td className="px-6 py-4 text-slate-700">{formatMoney(link.amount, link.currency)}</td>
                <td className="px-6 py-4 text-slate-500">{formatDate(link.expiry)}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={link.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
