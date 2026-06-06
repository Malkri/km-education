const programs = [
  {
    title: "Academic Support",
    desc: "Weekly ongoing support to keep students aligned with school curriculum.",
    ideal: "Consistent Improvement",
    featured: false,
  },
  {
    title: "Exam Preparation",
    desc: "Focused test readiness with past papers and proven exam techniques.",
    ideal: "Final Assessments",
    featured: false,
  },
  {
    title: "Skill-Building",
    desc: "Strengthening foundations and building core academic confidence.",
    ideal: "Closing Gaps",
    featured: false,
  },
  {
    title: "1:1 Coaching",
    desc: "Personalised online sessions tailored to individual goals and pace.",
    ideal: "Specific Goals",
    featured: true,
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32 px-6 bg-ink text-paper">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
              Our Programs
            </span>
            <h2 className="text-4xl lg:text-5xl font-extralight mt-4">
              Specialised classes for Years 7–12
            </h2>
          </div>
          <p className="text-paper/60 font-light max-w-sm">
            Curated to support the Australian curriculum across every stage of high school.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className={
                "p-8 flex flex-col h-full border " +
                (p.featured
                  ? "border-brand/40 bg-brand/10"
                  : "border-paper/10 hover:border-paper/30 transition-colors")
              }
            >
              <h4 className="text-xl font-light mb-4">{p.title}</h4>
              <p className="text-sm text-paper/60 font-light flex-grow mb-8">{p.desc}</p>
              <div className="text-[10px] uppercase tracking-[0.2em] text-brand mb-6 font-mono">
                Ideal for: {p.ideal}
              </div>
              <a
                href="#book"
                className={
                  "block text-center py-3 text-[10px] uppercase tracking-[0.2em] font-light transition-colors " +
                  (p.featured
                    ? "bg-brand text-paper hover:bg-paper hover:text-ink"
                    : "border border-paper/20 hover:bg-paper hover:text-ink")
                }
              >
                Book Trial
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
