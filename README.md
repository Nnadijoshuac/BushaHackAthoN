# BushaPay

BushaPay is a premium business tool for freelancers, creators, and small businesses that need to receive global payments, track who paid, and settle funds locally without exposing crypto mechanics.

## Setup

1. Run `npm install`
2. Copy `.env.example` to `.env.local`
3. Run `npm run dev`

## Environment variables

- `DEMO_MODE=true`
- `NEXT_PUBLIC_DEMO_MODE=true`
- `NEXT_PUBLIC_APP_URL=http://localhost:3000`
- `NEXT_PUBLIC_SUPABASE_URL=...`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY=...`
- `SUPABASE_SERVICE_ROLE_KEY=...`
- `BUSHA_API_BASE_URL=https://api.busha.so`
- `BUSHA_SECRET_KEY=...`
- `BUSHA_PROFILE_ID=...`

If `BUSHA_SECRET_KEY` is missing, BushaPay falls back to demo responses automatically.

## Supabase

Run [schema.sql](/c:/Users/chimd/Desktop/0xserenity/Busha/supabase/schema.sql) to create:

- `profiles`
- `busha_customers`
- `payment_links`
- `payment_requests`
- `recipients`
- `transfers`
- `balances_cache`
- `webhook_events`

## Busha integration

The client wrapper is in [client.ts](/c:/Users/chimd/Desktop/0xserenity/Busha/src/lib/busha/client.ts). It injects `X-BU-PROFILE-ID`, centralizes auth headers, handles API errors, and swaps to mock data in demo mode.

## Demo flow

1. Visit `/`
2. Go through `/signup`
3. Complete `/app/onboarding`
4. Create a link in `/app/payment-links/new`
5. Open `/pay/brand-sprint`
6. Review `/app`, `/app/balances`, `/app/transactions`, `/app/recipients`, and `/app/settlements`
