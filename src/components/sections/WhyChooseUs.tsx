const tiles = [
  { kicker: "01 / Resources", title: "In-house Raw 50 resources", desc: "Hundreds of pages of content written by Raw 50 scorers — no generic textbooks, no recycled worksheets." },
  { kicker: "02 / Strategy", title: "Exam strategy, not just content", desc: "We teach students how exams are constructed and how to outperform under time pressure — not just what to memorise." },
  { kicker: "03 / Practice", title: "Weekly test opportunities", desc: "Practice doesn't make perfect — it makes permanent. Regular test conditions build real exam confidence." },
  { kicker: "04 / UDFs", title: "Custom CAS UDF programs", desc: "Students gain access to Krishav's personally coded CAS UDFs — an unfair competitive advantage in SACs and exams." },
  { kicker: "05 / Support", title: "24/7 support outside class", desc: "Help with difficult questions, SAC revision, and exam prep any day, any time — you're never stuck studying alone." },
  { kicker: "06 / Results", title: "Proven state-topping results", desc: "Multiple 99.95 ATAR and Raw 50 achievers across English, Methods, and Specialist Maths every year." },
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
            Among the best Melbourne VCE tutoring providers.
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
