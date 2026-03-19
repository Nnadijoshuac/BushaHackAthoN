import { demoTransfers } from "@/lib/demo-data";
import { bushaFetch } from "@/lib/busha/client";

export async function quoteTransfer(payload: Record<string, unknown>) {
  return bushaFetch("/transfers/quote", {
    method: "POST",
    body: JSON.stringify(payload),
  }, {
    fee: 12.5,
    eta: "Under 10 minutes",
    ...payload,
  });
}

export async function createTransfer(payload: Record<string, unknown>) {
  return bushaFetch("/transfers", {
    method: "POST",
    body: JSON.stringify(payload),
  }, {
    id: `trf_${Date.now()}`,
    status: "processing",
    createdAt: new Date().toISOString(),
    ...payload,
  });
}

export async function listTransfers() {
  return bushaFetch("/transfers", undefined, demoTransfers);
}
