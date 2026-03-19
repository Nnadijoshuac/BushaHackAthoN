import type {
  Balance,
  PaymentLink,
  Profile,
  Recipient,
  Transaction,
  Transfer,
  WebhookEvent,
} from "@/lib/types";

export const demoProfile: Profile = {
  id: "profile_demo",
  businessName: "BushaPay Studio",
  email: "team@bushapay.app",
  phone: "+234 801 234 5678",
  country: "Nigeria",
  address: "42 Alfred Rewane Road, Ikoyi, Lagos",
  bushaCustomerId: "cus_demo_001",
};

export const demoPaymentLinks: PaymentLink[] = [
  {
    id: "plink_01",
    slug: "brand-sprint",
    title: "Brand Sprint Retainer",
    merchantName: demoProfile.businessName,
    amount: 2400,
    currency: "USD",
    description: "Creative retainer for April campaign support.",
    expiry: "2026-04-30T23:59:59.000Z",
    status: "pending",
    createdAt: "2026-03-15T09:00:00.000Z",
  },
  {
    id: "plink_02",
    slug: "design-ops",
    title: "Design Ops Workshop",
    merchantName: demoProfile.businessName,
    amount: 850,
    currency: "USD",
    description: "One-day facilitation and team enablement session.",
    expiry: "2026-03-25T23:59:59.000Z",
    status: "paid",
    createdAt: "2026-03-11T11:30:00.000Z",
  },
  {
    id: "plink_03",
    slug: "creator-partnership",
    title: "Creator Partnership Package",
    merchantName: demoProfile.businessName,
    amount: 1250,
    currency: "EUR",
    description: "Cross-border campaign package for a media partner.",
    expiry: "2026-03-28T23:59:59.000Z",
    status: "failed",
    createdAt: "2026-03-08T16:15:00.000Z",
  },
];

export const demoTransactions: Transaction[] = [
  {
    id: "txn_01",
    customer: "Ola Media LLC",
    amount: 850,
    currency: "USD",
    status: "paid",
    channel: "Card",
    linkedTitle: "Design Ops Workshop",
    createdAt: "2026-03-12T10:00:00.000Z",
  },
  {
    id: "txn_02",
    customer: "Nord Atelier",
    amount: 2400,
    currency: "USD",
    status: "pending",
    channel: "Bank transfer",
    linkedTitle: "Brand Sprint Retainer",
    createdAt: "2026-03-16T14:30:00.000Z",
  },
  {
    id: "txn_03",
    customer: "Kora Talent",
    amount: 1250,
    currency: "EUR",
    status: "failed",
    channel: "Card",
    linkedTitle: "Creator Partnership Package",
    createdAt: "2026-03-09T08:45:00.000Z",
  },
];

export const demoBalances: Balance[] = [
  { currency: "USD", available: 18450, pending: 2400 },
  { currency: "EUR", available: 6200, pending: 1250 },
  { currency: "NGN", available: 15200000, pending: 0 },
];

export const demoRecipients: Recipient[] = [
  {
    id: "rcp_01",
    name: "BushaPay Operations",
    bankName: "Providus Bank",
    accountNumber: "1012345678",
    currency: "NGN",
  },
  {
    id: "rcp_02",
    name: "BushaPay Dollar Pool",
    bankName: "Standard Chartered",
    accountNumber: "0098234756",
    currency: "USD",
  },
];

export const demoTransfers: Transfer[] = [
  {
    id: "trf_01",
    recipientName: "BushaPay Operations",
    amount: 720000,
    currency: "NGN",
    status: "completed",
    createdAt: "2026-03-17T09:20:00.000Z",
  },
  {
    id: "trf_02",
    recipientName: "BushaPay Dollar Pool",
    amount: 1800,
    currency: "USD",
    status: "processing",
    createdAt: "2026-03-18T13:10:00.000Z",
  },
];

export const demoWebhookEvents: WebhookEvent[] = [
  {
    id: "evt_01",
    type: "payment_link.paid",
    receivedAt: "2026-03-18T13:12:00.000Z",
    payload: { linkId: "plink_02", status: "paid" },
  },
  {
    id: "evt_02",
    type: "transfer.processing",
    receivedAt: "2026-03-18T13:14:00.000Z",
    payload: { transferId: "trf_02", status: "processing" },
  },
];

export const dashboardSummary = {
  totalReceived: 32650,
  availableBalance: 24650,
  pendingPayments: 3650,
};
