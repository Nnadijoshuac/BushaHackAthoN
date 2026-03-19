import { NextResponse } from "next/server";
import { listPaymentRequests } from "@/lib/busha/payment-requests";

export async function GET() {
  const data = await listPaymentRequests();
  return NextResponse.json({ data });
}
