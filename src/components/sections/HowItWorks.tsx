const steps = [
  {
    n: "01",
    title: "Book a free consultation",
    desc: "Tell us your subject, year level, and goals. We'll map the right program for your target score.",
  },
  {
    n: "02",
    title: "Join live weekly classes",
    desc: "Attend structured online sessions with Raw 50 tutors. Unmute any time — it's a real classroom, online.",
  },
  {
    n: "03",
    title: "Practise, get feedback, improve",
    desc: "Weekly test opportunities, essay feedback, and 24/7 support outside class to keep momentum all year.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 lg:py-32 px-6 border-b border-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
            How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-extralight mt-4">The path to progress</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((s) => (
            <div key={s.n} className="text-center group">
              <div className="size-14 rounded-full border border-ink/10 flex items-center justify-center mx-auto mb-8 font-mono text-xs text-brand group-hover:bg-brand group-hover:text-paper transition-all">
                {s.n}
              </div>
              <h4 className="font-light text-xl mb-3">{s.title}</h4>
              <p className="text-sm text-ink/50 font-light max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
