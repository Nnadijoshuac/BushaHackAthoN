import { demoRecipients } from "@/lib/demo-data";

export default function RecipientsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-blue-600">Recipients</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          Saved bank accounts
        </h1>
      </div>
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <form className="space-y-4 rounded-[2rem] border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-950">Add recipient</h2>
          <input className="w-full rounded-2xl border px-4 py-3 outline-none" placeholder="Recipient name" />
          <input className="w-full rounded-2xl border px-4 py-3 outline-none" placeholder="Bank name" />
          <input className="w-full rounded-2xl border px-4 py-3 outline-none" placeholder="Account number" />
          <input className="w-full rounded-2xl border px-4 py-3 outline-none" placeholder="Currency" />
          <button type="button" className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white">
            Save recipient
          </button>
        </form>
        <div className="space-y-3">
          {demoRecipients.map((recipient) => (
            <div key={recipient.id} className="rounded-[2rem] border border-slate-200 bg-white p-6">
              <p className="font-semibold text-slate-950">{recipient.name}</p>
              <p className="mt-2 text-sm text-slate-500">{recipient.bankName}</p>
              <p className="mt-1 text-sm text-slate-500">{recipient.accountNumber}</p>
              <p className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                {recipient.currency}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
