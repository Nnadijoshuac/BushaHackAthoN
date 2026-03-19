import { NextResponse } from "next/server";
import { z } from "zod";
import { createPaymentLink, listPaymentLinks } from "@/lib/busha/payment-links";
import { demoProfile } from "@/lib/demo-data";

const schema = z.object({
  title: z.string().min(2),
  amount: z.coerce.number().positive(),
  currency: z.string().min(3),
  description: z.string().min(5),
  expiry: z.string().min(8),
});

export async function GET() {
  const data = await listPaymentLinks();
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const payload = schema.parse(await request.json());
  const data = await createPaymentLink({
    ...payload,
    merchantName: demoProfile.businessName,
  });

  return NextResponse.json({ data }, { status: 201 });
}
