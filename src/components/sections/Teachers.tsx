import { Placeholder } from "./Placeholder";

const teachers = [
  { name: "[Teacher Name]", subject: "Maths Specialist", bio: "[One-line bio placeholder describing experience and approach.]" },
  { name: "[Teacher Name]", subject: "English Literature", bio: "[One-line bio placeholder describing experience and approach.]" },
  { name: "[Teacher Name]", subject: "Physics & Chemistry", bio: "[One-line bio placeholder describing experience and approach.]" },
];

export function Teachers() {
  return (
    <section className="py-24 lg:py-32 px-6 border-y border-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
            The Team
          </span>
          <h2 className="text-4xl lg:text-5xl font-extralight mt-4">Meet your teachers.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {teachers.map((t) => (
            <div key={t.subject} className="text-center space-y-6">
              <div className="size-48 mx-auto">
                <Placeholder label="Teacher photo" />
              </div>
              <div>
                <h4 className="text-xl font-light">{t.name}</h4>
                <p className="text-brand text-[10px] uppercase tracking-[0.2em] font-mono mt-2">
                  {t.subject}
                </p>
                <p className="text-sm font-light text-ink/60 mt-4 px-4">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
