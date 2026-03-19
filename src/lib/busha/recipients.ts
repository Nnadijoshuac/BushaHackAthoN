import { demoRecipients } from "@/lib/demo-data";
import { bushaFetch } from "@/lib/busha/client";

export async function listRecipients() {
  return bushaFetch("/recipients", undefined, demoRecipients);
}

export async function createRecipient(payload: Record<string, unknown>) {
  return bushaFetch("/recipients", {
    method: "POST",
    body: JSON.stringify(payload),
  }, {
    id: `rcp_${Date.now()}`,
    ...payload,
  });
}
