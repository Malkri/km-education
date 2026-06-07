const stats = [
  { n: "4×", label: "Raw 50 Study Scores" },
  { n: "3×", label: "Premier's Awards" },
  { n: "99.95", label: "ATAR Achievers" },
  { n: "40+", label: "Raw 40+ Study Scores" },
];

export function Stats() {
  return (
    <section id="results" className="py-20 lg:py-24 px-6 border-y border-ink/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-5xl lg:text-6xl font-extralight text-brand mb-3">{s.n}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-mono">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
