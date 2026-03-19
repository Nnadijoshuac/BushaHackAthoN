create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  business_name text not null,
  email text not null,
  phone text not null,
  country text not null,
  address text not null,
  created_at timestamptz default now()
);

create table if not exists busha_customers (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references profiles(id) on delete cascade,
  busha_customer_id text not null,
  raw_payload jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

create table if not exists payment_links (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references profiles(id) on delete cascade,
  slug text unique not null,
  title text not null,
  amount numeric not null,
  currency text not null,
  description text,
  expiry timestamptz,
  status text default 'pending',
  raw_payload jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

create table if not exists payment_requests (
  id uuid primary key default gen_random_uuid(),
  payment_link_id uuid references payment_links(id) on delete cascade,
  status text default 'pending',
  raw_payload jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

create table if not exists recipients (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references profiles(id) on delete cascade,
  name text not null,
  bank_name text not null,
  account_number text not null,
  currency text not null,
  raw_payload jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

create table if not exists transfers (
  id uuid primary key default gen_random_uuid(),
  recipient_id uuid references recipients(id),
  amount numeric not null,
  currency text not null,
  status text default 'draft',
  raw_payload jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

create table if not exists balances_cache (
  id uuid primary key default gen_random_uuid(),
  currency text not null,
  available numeric default 0,
  pending numeric default 0,
  raw_payload jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

create table if not exists webhook_events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null,
  payload jsonb not null,
  created_at timestamptz default now()
);
