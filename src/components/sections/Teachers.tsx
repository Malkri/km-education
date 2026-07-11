import { Placeholder } from "./Placeholder";

const achievements = [
  "99.95 ATAR and Dux of MHS",
  "Published in The Age and Herald Sun for excellent ATAR results",
  "4× Raw 50's (state record, #1 out of 50,000) and 3× Premier's Award (also state record, #1 out of 50,000)",
  "Dream student outcomes such as Monash Medicine, Chancellor's Scholarships, and Engineering",
];

export function Teachers() {
  return (
    <section className="py-24 lg:py-32 px-6 border-y border-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
            Who We Are
          </span>
          <h2 className="text-4xl lg:text-5xl font-extralight mt-4">What makes KM Education different.</h2>
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
            <div className="space-y-5 text-base font-light text-ink/70 leading-relaxed">
              <p>
                Hi! I&apos;m Krishav, the founder of KM Education. At KM Education, we understand one
                thing: most students don&apos;t struggle because they&apos;re lazy.
              </p>
              <p>
                They struggle because nobody has shown them exactly what examiners want. Every lesson
                is built around one key philosophy:
              </p>
              <p className="italic text-brand text-xl">Confidence comes from clarity.</p>
              <p>
                Instead of overwhelming students with content, we design our own notes and resources
                covering only what examiners will assess. This saves students precious time, and helps
                them score top marks.
              </p>
              <p>
                As founder of KM Education, I personally used these principles for my own success:
              </p>
            </div>
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
