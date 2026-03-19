import { cn } from "@/lib/utils";
import type { PaymentStatus, TransferStatus } from "@/lib/types";

const styles: Record<PaymentStatus | TransferStatus, string> = {
  pending: "bg-amber-50 text-amber-700 ring-amber-200",
  paid: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  failed: "bg-rose-50 text-rose-700 ring-rose-200",
  draft: "bg-slate-100 text-slate-700 ring-slate-200",
  processing: "bg-blue-50 text-blue-700 ring-blue-200",
  completed: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

export function StatusBadge({
  status,
}: {
  status: PaymentStatus | TransferStatus;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-1 text-xs font-medium capitalize ring-1 ring-inset",
        styles[status],
      )}
    >
      {status}
    </span>
  );
}
