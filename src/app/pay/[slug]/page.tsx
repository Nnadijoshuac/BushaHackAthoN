import { notFound } from "next/navigation";
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
    <main className="mx-auto flex min-h-screen max-w-xl items-center px-4 py-10">
      <section className="w-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.4)]">
        <p className="text-sm font-medium text-blue-600">{paymentLink.merchantName}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
          {paymentLink.title}
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-500">{paymentLink.description}</p>
        <p className="mt-8 text-4xl font-semibold text-slate-950">
          {formatMoney(paymentLink.amount, paymentLink.currency)}
        </p>
        <div className="mt-5">
          <StatusBadge status={paymentLink.status} />
        </div>
        <button className="mt-8 w-full rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white">
          {paymentLink.status === "paid" ? "Payment completed" : "Simulate successful payment"}
        </button>
      </section>
    </main>
  );
}
