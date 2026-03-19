import { demoBalances } from "@/lib/demo-data";
import { bushaFetch } from "@/lib/busha/client";

export async function listBalances() {
  return bushaFetch("/balances", undefined, demoBalances);
}
