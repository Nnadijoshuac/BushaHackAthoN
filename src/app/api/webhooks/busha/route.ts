import { NextResponse } from "next/server";
import { demoWebhookEvents } from "@/lib/demo-data";

export async function GET() {
  return NextResponse.json({ data: demoWebhookEvents });
}

export async function POST(request: Request) {
  const payload = await request.json();
  return NextResponse.json({
    received: true,
    payload,
  });
}
