import { demoPaymentLinks } from "@/lib/demo-data";
import { bushaFetch } from "@/lib/busha/client";

export async function listPaymentLinks() {
  return bushaFetch("/payment-links", undefined, demoPaymentLinks);
}

export async function createPaymentLink(payload: Record<string, unknown>) {
  return bushaFetch("/payment-links", {
    method: "POST",
    body: JSON.stringify(payload),
  }, {
    id: `plink_${Date.now()}`,
    slug: String(payload.title ?? "payment-link")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    status: "pending",
    createdAt: new Date().toISOString(),
    ...payload,
  });
}
