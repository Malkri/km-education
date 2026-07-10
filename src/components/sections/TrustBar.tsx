const items = [
  "99.95 ATAR Achievers",
  "Raw 50 Study Scores",
  "3× Premier's Award Winner",
  "Free Trial Available",
];

export function TrustBar() {
  return (
    <section className="border-b border-ink/5 bg-paper">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-6">
        {items.map((t) => (
          <div
            key={t}
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-ink/60 font-light"
          >
            <span className="size-1.5 bg-brand rounded-full" />
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}
