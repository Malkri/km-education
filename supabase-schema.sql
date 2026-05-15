-- Run this in Supabase SQL editor

create table bookings (
  id uuid primary key default gen_random_uuid(),
  role text not null check (role in ('student', 'parent')),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  subject text not null check (subject in ('VCE English', 'VCE Methods', 'VCE Specialist')),
  year_level text not null,
  location text not null default 'online',
  message text,
  created_at timestamptz default now()
);

-- Allow anonymous inserts only (no read/update/delete from frontend)
alter table bookings enable row level security;

create policy "Allow insert" on bookings
  for insert to anon
  with check (true);
