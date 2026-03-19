import { NextResponse } from "next/server";
import { z } from "zod";
import { createRecipient, listRecipients } from "@/lib/busha/recipients";

const schema = z.object({
  name: z.string().min(2),
  bankName: z.string().min(2),
  accountNumber: z.string().min(6),
  currency: z.string().min(3),
});

export async function GET() {
  const data = await listRecipients();
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const payload = schema.parse(await request.json());
  const data = await createRecipient(payload);
  return NextResponse.json({ data }, { status: 201 });
}
