import { demoWebhookEvents } from "@/lib/demo-data";
import { bushaFetch } from "@/lib/busha/client";

export async function listWebhookEvents() {
  return bushaFetch("/webhooks", undefined, demoWebhookEvents);
}
