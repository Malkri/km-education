"use client";

import { FormEvent } from "react";

export function BookingForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const reassurance = [
    "Free trial lesson",
    "No commitment, no payment required",
  ];

  const subjectOptions = [
    "VCE English Units 3 and 4",
    "VCE Methods Units 3 and 4",
    "VCE Specialist Math Units 3 and 4",
    "VCE English Units 1 and 2",
    "VCE Methods Units 1 and 2",
  ];

  const inputClass =
    "w-full border-b border-ink/15 py-3 focus:outline-none focus:border-brand transition-colors text-sm font-light bg-transparent";
  const labelClass = "text-[10px] uppercase tracking-[0.2em] text-ink/40 font-mono block mb-1";

  return (
    <section id="book" className="py-24 lg:py-32 px-6 bg-brand/5">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="lg:sticky lg:top-24">
          <h2 className="text-4xl lg:text-5xl font-extralight leading-tight mb-8 text-balance">
            Start your journey to your dream ATAR.
          </h2>
          <p className="text-ink/60 font-light mb-10 text-lg">
            Book your free trial today — just see if it&apos;s the right fit.
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
          <div>
            <label className={labelClass}>Subject(s)</label>
            <div className="grid grid-cols-1 gap-3 pt-2">
              {subjectOptions.map((s) => (
                <label key={s} className="flex items-center gap-3 text-sm font-light cursor-pointer">
                  <input type="checkbox" name="subjects" value={s} className="accent-brand size-4" />
                  {s}
                </label>
              ))}
            </div>
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
