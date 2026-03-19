import { NextResponse } from "next/server";
import { z } from "zod";
import { createTransfer } from "@/lib/busha/transfers";

const schema = z.object({
  currency: z.string().min(3),
  recipientId: z.string().min(2),
  amount: z.coerce.number().positive(),
});

export async function POST(request: Request) {
  const payload = schema.parse(await request.json());
  const data = await createTransfer(payload);
  return NextResponse.json({ data }, { status: 201 });
}
