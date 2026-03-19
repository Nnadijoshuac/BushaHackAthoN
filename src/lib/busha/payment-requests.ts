import { demoTransactions } from "@/lib/demo-data";
import { bushaFetch } from "@/lib/busha/client";

export async function listPaymentRequests() {
  return bushaFetch("/payment-requests", undefined, demoTransactions);
}
