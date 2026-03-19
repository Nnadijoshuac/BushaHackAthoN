import { NextResponse } from "next/server";
import { demoPaymentLinks } from "@/lib/demo-data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const link = demoPaymentLinks.find((entry) => entry.id === id);
  return NextResponse.json({ data: link ?? null });
}
