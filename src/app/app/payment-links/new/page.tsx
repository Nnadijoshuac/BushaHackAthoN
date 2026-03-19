"use client";

import { FormEvent, useState } from "react";

export default function NewPaymentLinkPage() {
  const [result, setResult] = useState<string>("Generated links show a public BushaPay checkout experience.");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/payment-links", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    setResult(`Public URL ready: /pay/${data.data.slug}`);
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-blue-600">Payment links</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          Create a payment link
        </h1>
        <p className="mt-3 text-sm text-slate-500">{result}</p>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 md:grid-cols-2">
        {[
          { name: "title", label: "Title", defaultValue: "Monthly Retainer" },
          { name: "amount", label: "Amount", defaultValue: "2400" },
          { name: "currency", label: "Currency", defaultValue: "USD" },
          { name: "description", label: "Description", defaultValue: "Creative support for April deliverables." },
          { name: "expiry", label: "Expiry", defaultValue: "2026-04-30T23:59:59.000Z" },
        ].map((field) => (
          <label key={field.name} className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">{field.label}</span>
            <input
              name={field.name}
              defaultValue={field.defaultValue}
              className="w-full rounded-2xl border bg-white px-4 py-3 outline-none"
            />
          </label>
        ))}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white"
          >
            Generate payment link
          </button>
        </div>
      </form>
    </div>
  );
}
