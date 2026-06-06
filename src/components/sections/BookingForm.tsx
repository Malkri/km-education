"use client";

import { FormEvent } from "react";

export function BookingForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const reassurance = [
    "Free 45-minute trial session",
    "No commitment, no payment required",
    "Personalised study plan recommendation",
  ];

  const inputClass =
    "w-full border-b border-ink/15 py-3 focus:outline-none focus:border-brand transition-colors text-sm font-light bg-transparent";
  const labelClass = "text-[10px] uppercase tracking-[0.2em] text-ink/40 font-mono block mb-1";

  return (
    <section id="book" className="py-24 lg:py-32 px-6 bg-brand/5">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="lg:sticky lg:top-24">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
            Get Started
          </span>
          <h2 className="text-4xl lg:text-5xl font-extralight leading-tight mt-4 mb-8 text-balance">
            Ready to try your first online class?
          </h2>
          <p className="text-ink/60 font-light mb-10 text-lg">
            No pressure. No commitment. Just see if it&apos;s the right fit for your child.
          </p>
          <ul className="space-y-4">
            {reassurance.map((r) => (
              <li key={r} className="flex items-center gap-4 text-sm font-light">
                <span className="size-6 rounded-full border border-brand flex items-center justify-center text-brand text-xs">
                  ✓
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-paper p-8 lg:p-10 border border-ink/5 shadow-sm space-y-6"
        >
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Student Name</label>
              <input type="text" required className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Parent Name</label>
              <input type="text" required className={inputClass} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input type="email" required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input type="tel" required className={inputClass} />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Year Level</label>
              <select required className={inputClass} defaultValue="">
                <option value="" disabled>Select</option>
                {[7, 8, 9, 10, 11, 12].map((y) => (
                  <option key={y} value={`Year ${y}`}>Year {y}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Class Interest</label>
              <select required className={inputClass} defaultValue="">
                <option value="" disabled>Select</option>
                <option>Academic Support</option>
                <option>Exam Preparation</option>
                <option>Skill-Building</option>
                <option>1:1 Online Coaching</option>
              </select>
            </div>
          </div>
          <div>
            <label className={labelClass}>Preferred Time</label>
            <input type="text" placeholder="e.g. Weekdays after 4pm" className={inputClass} />
          </div>
          <button
            type="submit"
            className="w-full bg-brand text-paper py-4 text-[11px] uppercase tracking-[0.2em] font-light hover:bg-ink transition-colors mt-4"
          >
            Request My Free Trial
          </button>
        </form>
      </div>
    </section>
  );
}
