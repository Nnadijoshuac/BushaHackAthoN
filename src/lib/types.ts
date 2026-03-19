export type PaymentStatus = "pending" | "paid" | "failed";
export type TransferStatus = "draft" | "processing" | "completed";

export type Profile = {
  id: string;
  businessName: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  bushaCustomerId: string;
};

export type PaymentLink = {
  id: string;
  slug: string;
  title: string;
  merchantName: string;
  amount: number;
  currency: string;
  description: string;
  expiry: string;
  status: PaymentStatus;
  createdAt: string;
};

export type Transaction = {
  id: string;
  customer: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  channel: string;
  linkedTitle: string;
  createdAt: string;
};

export type Balance = {
  currency: string;
  available: number;
  pending: number;
};

export type Recipient = {
  id: string;
  name: string;
  bankName: string;
  accountNumber: string;
  currency: string;
};

export type Transfer = {
  id: string;
  recipientName: string;
  amount: number;
  currency: string;
  status: TransferStatus;
  createdAt: string;
};

export type WebhookEvent = {
  id: string;
  type: string;
  receivedAt: string;
  payload: Record<string, unknown>;
};
