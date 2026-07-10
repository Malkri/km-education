"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="text-lg tracking-tight font-light text-brand">
          KM<span className="text-ink/40">EDUCATION</span>
        </a>
        <div className="hidden md:flex items-center gap-10 text-[11px] font-light uppercase tracking-[0.2em]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-brand transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#book"
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
            href="#book"
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
