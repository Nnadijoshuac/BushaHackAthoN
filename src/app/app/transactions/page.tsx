import { demoTransactions } from "@/lib/demo-data";
import { StatusBadge } from "@/components/status-badge";
import { formatDate, formatMoney } from "@/lib/utils";

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-blue-600">Transactions</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          Payment activity ledger
        </h1>
      </div>
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Amount</th>
              <th className="px-6 py-4 font-medium">Channel</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {demoTransactions.map((transaction) => (
              <tr key={transaction.id} className="border-t border-slate-200">
                <td className="px-6 py-4">
                  <p className="font-medium text-slate-950">{transaction.customer}</p>
                  <p className="mt-1 text-slate-500">{transaction.linkedTitle}</p>
                </td>
                <td className="px-6 py-4 text-slate-700">
                  {formatMoney(transaction.amount, transaction.currency)}
                </td>
                <td className="px-6 py-4 text-slate-500">{transaction.channel}</td>
                <td className="px-6 py-4 text-slate-500">{formatDate(transaction.createdAt)}</td>
                <td className="px-6 py-4">
                  <StatusBadge status={transaction.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
