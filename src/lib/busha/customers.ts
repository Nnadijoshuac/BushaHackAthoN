import { demoProfile } from "@/lib/demo-data";
import { bushaFetch } from "@/lib/busha/client";

export async function createCustomer(payload: Record<string, unknown>) {
  return bushaFetch("/customers", {
    method: "POST",
    body: JSON.stringify(payload),
  }, {
    id: demoProfile.bushaCustomerId,
    ...payload,
  });
}
