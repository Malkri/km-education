const problems = [
  "Tutoring that overloads you with content",
  "Repetitive practice with no clear exam strategy",
  "Generic teaching that ignores what actually scores marks",
  "No support between classes when you're stuck",
];

const solutions = [
  "Weekly test-taking opportunities — not just passive learning",
  "Study techniques that maximise marks and minimise time",
  "Exam strategy built by Raw 50 and Premier's Award scorers",
  "Focused practice — because practice doesn't make perfect, it makes permanent",
];

export function ProblemSolution() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="p-10 lg:p-14 bg-sand/60 border border-ink/5">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40 mb-8">
            The Challenge
          </h3>
          <ul className="space-y-6 text-lg font-light text-ink/70">
            {problems.map((p) => (
              <li key={p} className="flex items-start gap-4">
                <span className="text-brand/40 mt-1">—</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-10 lg:p-14 bg-brand text-paper">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50 mb-8">
            The KM Way
          </h3>
          <ul className="space-y-6 text-lg font-light">
            {solutions.map((s) => (
              <li key={s} className="flex items-start gap-4">
                <span className="text-paper/50 mt-1">→</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
