export function MetricCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_80px_-48px_rgba(15,23,42,0.35)]">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
        {value}
      </p>
      <p className="mt-2 text-sm text-slate-500">{note}</p>
    </div>
  );
}
