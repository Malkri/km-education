import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type SubjectPillar = {
  title: string;
  body: string;
};

export type SubjectFaq = {
  q: string;
  a: string;
};

export type SubjectPageData = {
  eyebrow: string;
  title: string;
  intro: string;
  pillars: SubjectPillar[];
  idealFor: string[];
  faqs: SubjectFaq[];
  extra?: React.ReactNode;
};

export function SubjectPageTemplate({ data }: { data: SubjectPageData }) {
  const { eyebrow, title, intro, pillars, idealFor, faqs, extra } = data;

  return (
    <>
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
            {eyebrow}
          </span>
          <h1 className="text-4xl lg:text-5xl font-extralight leading-tight mt-4 text-balance">
            {title}
          </h1>
          <p className="text-ink/60 font-light mt-8 text-lg leading-relaxed max-w-2xl">
            {intro}
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 bg-ink text-paper">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="p-8 border border-paper/10 hover:border-paper/30 transition-colors">
              <h4 className="text-xl font-light mb-4">{p.title}</h4>
              <p className="text-sm text-paper/60 font-light leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {extra}

      <section className="py-24 lg:py-32 px-6 bg-brand/5">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
            Who This Is For
          </span>
          <h2 className="text-4xl lg:text-5xl font-extralight mt-4 mb-10">
            Built for students who want more.
          </h2>
          <ul className="space-y-4">
            {idealFor.map((r) => (
              <li key={r} className="flex items-start gap-4 text-base font-light">
                <span className="size-6 rounded-full border border-brand flex items-center justify-center text-brand text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-extralight mt-4">Common questions.</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-ink/10">
                <AccordionTrigger className="text-left text-lg font-light py-6 hover:no-underline hover:text-brand">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm font-light text-ink/60 leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 bg-ink text-paper text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extralight text-balance">
            Ready to take your VCE results to the next level?
          </h2>
          <a
            href="/#book"
            className="inline-block mt-10 bg-brand text-paper px-8 py-4 text-xs uppercase tracking-[0.2em] font-light hover:bg-paper hover:text-ink transition-colors"
          >
            Book a Free Trial
          </a>
        </div>
      </section>
    </>
  );
}
