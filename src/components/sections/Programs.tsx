const programs = [
  {
    title: "VCE Methods",
    desc: "Master problem-solving, exam techniques and the CAS to dominate SACs and VCAA exams.",
    featured: true,
    href: "/vce-methods",
  },
  {
    title: "VCE English",
    desc: "Develop unique arguments, sophisticated analysis, and exam-ready essays designed to score 40+ with ease. Every 2026 text covered.",
    featured: false,
    href: "/vce-english",
  },
  {
    title: "VCE Specialist Maths",
    desc: "Understand tricky concepts with simple explanations, live walkthroughs, unlimited support out-of-class, CAS support for SACs and exams.",
    featured: false,
    href: "/vce-specialist-maths",
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32 px-6 bg-ink text-paper">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-extralight">
            VCE Subjects Offered
          </h2>
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
              <a
                href={p.href}
                className="block text-center py-3 text-[10px] uppercase tracking-[0.2em] font-light transition-colors bg-brand text-paper hover:bg-paper hover:text-ink"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
