import { Placeholder } from "./Placeholder";

const achievements = [
  "4 Raw 50 study scores — English, Specialist Maths, Mathematics, Physics",
  "3 Premier's Awards — Specialist Maths, Mathematics, Physics",
  "Only person in the state to achieve this combination (1 in 50,000)",
  "Featured in The Age and Herald Sun",
];

export function Teachers() {
  return (
    <section className="py-24 lg:py-32 px-6 border-y border-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
            Who We Are
          </span>
          <h2 className="text-4xl lg:text-5xl font-extralight mt-4">Built on state-topping performance.</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div className="aspect-[3/4] relative">
            <Placeholder label="Krishav — Founder, KM Education" />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-extralight">Krishav</h3>
              <p className="text-brand text-[10px] uppercase tracking-[0.2em] font-mono mt-2">
                Founder · KM Education
              </p>
            </div>
            <p className="text-base font-light text-ink/70 leading-relaxed">
              When I was in Year 12, I realised something early: there was no shortage of tutoring in
              Melbourne — but there was a shortage of clarity. Most programs overloaded students with
              content, relied on repetitive practice, and lacked a clear system for achieving top
              results. KM Education was created to answer the question: what actually separates a 40
              from a Raw 50?
            </p>
            <ul className="space-y-3">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-4 text-sm font-light text-ink/70">
                  <span className="text-brand mt-0.5 shrink-0">→</span>
                  {a}
                </li>
              ))}
            </ul>
            <a
              href="#book"
              className="inline-block bg-brand text-paper px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-light hover:bg-ink transition-colors"
            >
              Book a Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
