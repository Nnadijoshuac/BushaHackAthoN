"use client";

import { FormEvent, useState } from "react";

export default function OnboardingPage() {
  const [message, setMessage] = useState("Complete the fields below to create a Busha customer profile.");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/onboarding/create-customer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    setMessage(`Customer created: ${result.data.bushaCustomerId}`);
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-blue-600">Onboarding</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          Create your business profile
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">{message}</p>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 md:grid-cols-2">
        {[
          { name: "businessName", label: "Business name", defaultValue: "BushaPay Studio" },
          { name: "email", label: "Email", defaultValue: "team@bushapay.app" },
          { name: "phone", label: "Phone", defaultValue: "+234 801 234 5678" },
          { name: "country", label: "Country", defaultValue: "Nigeria" },
          { name: "address", label: "Address", defaultValue: "42 Alfred Rewane Road, Ikoyi, Lagos" },
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
            Create Busha customer
          </button>
        </div>
      </form>
    </div>
  );
}
