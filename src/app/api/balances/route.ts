import { NextResponse } from "next/server";
import { listBalances } from "@/lib/busha/balances";

export async function GET() {
  const data = await listBalances();
  const summary = {
    totalReceived: 32650,
    availableBalance: 24650,
    pendingPayments: 3650,
  };

  return NextResponse.json({ data, summary });
}
