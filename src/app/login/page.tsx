import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg items-center px-4 py-10">
      <section className="w-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.4)]">
        <p className="text-sm font-medium text-blue-600">BushaPay</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
          Welcome back
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Sign in to manage payment links, balances, and local settlements.
        </p>
        <form className="mt-8 space-y-4">
          <input className="w-full rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="Email address" />
          <input className="w-full rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="Password" type="password" />
          <Link
            href="/app"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white"
          >
            Continue to dashboard
          </Link>
        </form>
        <p className="mt-6 text-sm text-slate-500">
          Need an account?{" "}
          <Link href="/signup" className="font-medium text-slate-950">
            Create one
          </Link>
        </p>
      </section>
    </main>
  );
}
