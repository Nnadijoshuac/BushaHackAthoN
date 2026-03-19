import { NextResponse } from "next/server";
import { z } from "zod";
import { createCustomer } from "@/lib/busha/customers";

const schema = z.object({
  businessName: z.string().min(2),
  email: z.email(),
  phone: z.string().min(7),
  country: z.string().min(2),
  address: z.string().min(5),
});

export async function POST(request: Request) {
  const payload = schema.parse(await request.json());
  const customer = await createCustomer(payload);

  return NextResponse.json({
    data: {
      ...payload,
      bushaCustomerId: customer.id,
    },
  });
}
