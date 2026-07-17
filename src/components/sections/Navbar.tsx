"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const subjects = [
  { href: "/vce-english", label: "VCE English" },
  { href: "/vce-methods", label: "VCE Methods" },
  { href: "/vce-specialist-maths", label: "VCE Specialist Maths" },
];

const links = [
  { href: "/about", label: "About Us" },
  { href: "/results", label: "Our Results" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="block relative h-24 w-72 shrink-0">
          <Image src="/km-education-logo.png" alt="KM Education" fill className="object-contain object-left" priority />
        </a>
        <div className="hidden md:flex items-center gap-10 text-[11px] font-light uppercase tracking-[0.2em]">
          <a href="/" className="hover:text-brand transition-colors">
            Home
          </a>
          <div className="relative group">
            <button className="flex items-center gap-1.5 hover:text-brand transition-colors cursor-pointer">
              Subjects Offered
              <ChevronDown className="size-3" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-150">
              <div className="bg-paper border border-ink/10 shadow-sm py-2 w-56 normal-case tracking-normal">
                {subjects.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="block px-5 py-3 text-xs font-light uppercase tracking-[0.15em] hover:bg-brand/5 hover:text-brand transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-brand transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="/#book"
          className="hidden md:inline-flex bg-brand text-paper px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-light hover:bg-ink transition-colors"
        >
          Book a Free Trial
        </a>
        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-ink/5 bg-paper px-6 py-6 space-y-4">
          <a
            href="/"
            onClick={() => setOpen(false)}
            className="block text-sm font-light uppercase tracking-[0.2em]"
          >
            Home
          </a>
          <div>
            <p className="text-sm font-light uppercase tracking-[0.2em] text-ink/40 mb-3">
              Subjects Offered
            </p>
            <div className="space-y-3 pl-4">
              {subjects.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-light"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-light uppercase tracking-[0.2em]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#book"
            onClick={() => setOpen(false)}
            className="block bg-brand text-paper px-5 py-3 text-[11px] uppercase tracking-[0.2em] font-light text-center"
          >
            Book a Free Trial
          </a>
        </div>
      )}
    </nav>
  );
}
