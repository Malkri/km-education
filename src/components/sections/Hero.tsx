import { Placeholder } from "./Placeholder";

export function Hero() {
  return (
    <header id="top" className="min-h-[88vh] grid grid-cols-1 lg:grid-cols-12 border-b border-ink/5">
      <div className="lg:col-span-7 flex flex-col justify-center p-8 lg:p-20">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand mb-8">
          Online Tutoring · Years 7–12 · Australia
        </span>
        <h1 className="text-5xl lg:text-7xl font-extralight leading-[1.05] tracking-tight text-balance mb-10 max-w-[18ch]">
          Live online classes with a clear study plan for{" "}
          <span className="italic text-brand">confident progress.</span>
        </h1>
        <p className="text-base lg:text-lg font-light text-ink/60 max-w-xl mb-10">
          Weekly live sessions, structured curriculum, and expert teachers who genuinely care about
          your child&apos;s growth.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#book"
            className="bg-brand text-paper px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-light hover:bg-ink transition-colors"
          >
            Book a Free Trial
          </a>
          <a
            href="#programs"
            className="border border-ink/15 px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-light hover:bg-sand transition-colors"
          >
            View Classes
          </a>
        </div>
      </div>
      <div className="lg:col-span-5 bg-sand relative min-h-[400px] lg:min-h-0">
        <Placeholder label="Hero image · Student in live online class" className="border-0" />
      </div>
    </header>
  );
}
