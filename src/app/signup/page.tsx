import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg items-center px-4 py-10">
      <section className="w-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.4)]">
        <p className="text-sm font-medium text-blue-600">BushaPay</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
          Create your business account
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Start with a clean setup flow and switch to live Busha + Supabase keys when ready.
        </p>
        <form className="mt-8 space-y-4">
          <input className="w-full rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="Business name" />
          <input className="w-full rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="Work email" />
          <input className="w-full rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="Phone number" />
          <Link
            href="/app/onboarding"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white"
          >
            Start onboarding
          </Link>
        </form>
        <p className="mt-6 text-sm text-slate-500">
          Already have access?{" "}
          <Link href="/login" className="font-medium text-slate-950">
            Log in
          </Link>
        </p>
      </section>
    </main>
  );
}
