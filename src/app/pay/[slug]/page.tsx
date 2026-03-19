import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, CreditCard, ShieldCheck } from "lucide-react";
import { demoPaymentLinks } from "@/lib/demo-data";
import { StatusBadge } from "@/components/status-badge";
import { formatMoney } from "@/lib/utils";

export default async function PublicPaymentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paymentLink = demoPaymentLinks.find((entry) => entry.slug === slug);

  if (!paymentLink) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f8fbff_0%,_#f4f7fb_50%,_#f6f7f3_100%)] px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white">
            <p className="text-sm text-white/65">BushaPay secure checkout</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight">
              {paymentLink.merchantName}
            </h1>
            <p className="mt-3 text-sm leading-7 text-white/68">
              You are paying a business using a simple hosted payment page. Review the amount and continue when ready.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Clear amount and description before payment",
                "Straightforward status updates",
                "No wallet or exchange style UX",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-3 text-sm text-white/78">
                  <CheckCircle2 className="h-4 w-4 text-blue-300" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="w-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.28)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-blue-600">{paymentLink.merchantName}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                  {paymentLink.title}
                </h2>
              </div>
              <StatusBadge status={paymentLink.status} />
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-500">{paymentLink.description}</p>

            <div className="mt-8 rounded-[1.5rem] bg-slate-50 p-5">
              <p className="text-sm text-slate-400">Amount to pay</p>
              <p className="mt-2 text-4xl font-semibold text-slate-950">
                {formatMoney(paymentLink.amount, paymentLink.currency)}
              </p>
            </div>

            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
                <CreditCard className="h-4 w-4 text-blue-600" />
                Client-friendly hosted payment experience
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
                <ShieldCheck className="h-4 w-4 text-blue-600" />
                Simple status handling for pending, paid, and failed
              </div>
            </div>

            <button className="mt-8 w-full rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white">
              {paymentLink.status === "paid" ? "Payment completed" : "Continue to payment"}
            </button>

            <Link href="/" className="mt-4 inline-flex text-sm font-medium text-slate-500">
              Back to BushaPay
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
