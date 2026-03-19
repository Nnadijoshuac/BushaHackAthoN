"use client";

import { useAppStore } from "@/store/app-store";
import { demoBalances, demoRecipients } from "@/lib/demo-data";
import { formatMoney } from "@/lib/utils";

export default function SettlementsPage() {
  const dismissed = useAppStore((state) => state.smartSuggestionDismissed);
  const dismiss = useAppStore((state) => state.dismissSuggestion);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-blue-600">Settlements</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          Move funds locally
        </h1>
      </div>
      {!dismissed && (
        <div className="flex items-start justify-between gap-4 rounded-[2rem] border border-blue-200 bg-blue-50 p-5">
          <div>
            <p className="font-medium text-slate-950">Smart settlement suggestion</p>
            <p className="mt-2 text-sm text-slate-600">
              Settle in NGN now for faster access while USD inflows continue to clear.
            </p>
          </div>
          <button onClick={dismiss} className="text-sm font-medium text-blue-700">
            Dismiss
          </button>
        </div>
      )}
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <form className="space-y-4 rounded-[2rem] border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-950">New settlement</h2>
          <select className="w-full rounded-2xl border px-4 py-3 outline-none">
            {demoBalances.map((balance) => (
              <option key={balance.currency}>
                {balance.currency} available {formatMoney(balance.available, balance.currency)}
              </option>
            ))}
          </select>
          <select className="w-full rounded-2xl border px-4 py-3 outline-none">
            {demoRecipients.map((recipient) => (
              <option key={recipient.id}>{recipient.name}</option>
            ))}
          </select>
          <input className="w-full rounded-2xl border px-4 py-3 outline-none" placeholder="Amount" />
          <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
            Preview: Fee $12.50 • ETA under 10 minutes • Friendly validation for KYC and network issues
          </div>
          <button type="button" className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white">
            Confirm transfer
          </button>
        </form>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-950">Settlement checklist</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p className="rounded-2xl bg-slate-50 px-4 py-3">KYC incomplete: show guided next step before transfer confirmation.</p>
            <p className="rounded-2xl bg-slate-50 px-4 py-3">Invalid input: keep amount and recipient errors inline and friendly.</p>
            <p className="rounded-2xl bg-slate-50 px-4 py-3">API failure: return fallback messaging with retry path in demo mode.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
