const programs = [
  {
    title: "VCE English",
    desc: "Develop unique arguments, sophisticated analysis, and exam-ready essays designed to score 40+ with ease. Every 2026 text covered.",
    ideal: "40+ & Raw 50",
    featured: false,
    href: "#book",
  },
  {
    title: "VCE Methods",
    desc: "Master problem-solving, exam techniques, and custom CAS UDFs to dominate SACs and VCAA exams.",
    ideal: "Raw 40+ & Raw 50",
    featured: true,
    href: "#book",
  },
  {
    title: "VCE Specialist Maths",
    desc: "Understand the complexities of Spesh with clear explanations, CAS UDFs, live walkthroughs, and elite practice material.",
    ideal: "40+, 45+ & Raw 50",
    featured: false,
    href: "#book",
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
              Melbourne VCE Tutoring Across Key Subjects
            </h2>
          </div>
          <p className="text-paper/60 font-light max-w-sm">
            All programs designed by Raw 50 and Premier&apos;s Award scorers — nothing generic.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
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
                href={p.href}
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
