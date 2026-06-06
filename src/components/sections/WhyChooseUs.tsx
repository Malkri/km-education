const tiles = [
  { kicker: "01 / Interaction", title: "Live interactive lessons", desc: "Real-time dialogue between students and educators, not pre-recorded videos." },
  { kicker: "02 / Flexibility", title: "Small group or individual", desc: "Find the format and pace that suits your child's learning style best." },
  { kicker: "03 / Structure", title: "Structured weekly plans", desc: "Every lesson builds on the last, with clear objectives and outcomes." },
  { kicker: "04 / Expertise", title: "Expert teachers", desc: "Hand-picked tutors with deep subject knowledge and classroom experience." },
  { kicker: "05 / Feedback", title: "Practice tasks and feedback", desc: "Regular homework and assessment feedback that meaningfully drives growth." },
  { kicker: "06 / Transparency", title: "Parent-friendly updates", desc: "Concise reports on attendance, effort, and academic growth each week." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-sand/40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-extralight mt-4">
            Designed for serious progress, calmly delivered.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {tiles.map((t) => (
            <div key={t.kicker} className="space-y-3">
              <h5 className="text-brand font-mono uppercase tracking-[0.2em] text-[10px]">
                {t.kicker}
              </h5>
              <h4 className="text-xl font-light">{t.title}</h4>
              <p className="text-sm font-light text-ink/60">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
