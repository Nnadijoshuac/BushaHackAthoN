import { demoBalances } from "@/lib/demo-data";
import { formatMoney } from "@/lib/utils";

export default function BalancesPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-blue-600">Balances</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          Currency positions
        </h1>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {demoBalances.map((balance) => (
          <div key={balance.currency} className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <p className="text-sm text-slate-500">{balance.currency}</p>
            <p className="mt-4 text-3xl font-semibold text-slate-950">
              {formatMoney(balance.available, balance.currency)}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Pending {formatMoney(balance.pending, balance.currency)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
