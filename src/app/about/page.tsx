import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";
import { Collage } from "@/components/ui/Collage";

const proofImages = [
  { src: "/about/atar-result.png", alt: "VTAC ATAR result — 99.95", width: 1486, height: 771 },
  { src: "/about/study-scores.png", alt: "VCE Data Service study scores — four Raw 50s", width: 755, height: 441 },
  { src: "/about/the-age-feature.png", alt: "The Age feature on perfect VCE study scores", width: 419, height: 353 },
  { src: "/about/premiers-award.jpg", alt: "Premier's VCE Award presentation", width: 1500, height: 1200 },
];

export const metadata: Metadata = {
  title: "Who We Are — KM Education",
  description:
    "KM Education was built on one idea: students don't fall short because they lack ability — they fall short because they're never taught how to perform.",
};

const achievements = [
  { stat: "3×", label: "Premier's Awards — 1 in 50,000" },
  { stat: "4×", label: "Raw 50 study scores — 1 in 50,000" },
  { stat: "2", label: "Features in The Age & Herald Sun" },
];


export default function AboutPage() {
  return (
    <main className="bg-paper text-ink min-h-screen scroll-smooth">
      <Navbar />

      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">Who We Are</span>
          <h1 className="text-4xl lg:text-5xl font-extralight leading-tight mt-4 text-balance">
            We teach the part of VCE that nobody actually teaches.
          </h1>
          <p className="text-ink/60 font-light mt-8 text-lg leading-relaxed max-w-2xl">
            Every kid in a 3/4 class gets the same content. The ones who walk out with a 45+ know
            something extra: how the exam is really marked, and how to hand an assessor exactly
            what they&apos;re hunting for. That&apos;s the bit we teach.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 bg-ink text-paper">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_auto] gap-16 items-start">
          <div className="border-l-2 border-paper/20 pl-8 space-y-6 text-paper/70 font-light leading-relaxed">
            <p>Hi, I&apos;m Krishav.</p>
            <p>
              I finished Year 12 with three Premier&apos;s Awards and four Raw 50s. That&apos;s not the
              useful part of the story though. The useful part is Year 11, when I was sitting on
              70s in English and genuinely could not tell you why. I got &quot;go deeper&quot; written
              on three essays in a row. Nobody ever explained what deeper meant.
            </p>
            <p>
              I worked it out the slow way: assessor reports, then pulling apart top-scoring essays
              line by line until I could see what they were all quietly doing. Then I did the same
              thing for Methods and Specialist.
            </p>
            <p>
              KM Education is just that, taught properly. Not more worksheets. The stuff I had to
              reverse-engineer on my own, handed over on day one, so nobody wastes a year guessing.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-paper/10">
          {achievements.map((a) => (
            <div key={a.label}>
              <div className="text-4xl lg:text-5xl font-extralight text-brand">{a.stat}</div>
              <div className="text-sm uppercase tracking-[0.2em] text-paper/50 font-mono mt-3">
                {a.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extralight mb-8 text-balance">
            Practice doesn&apos;t make perfect.
          </h2>
          <p className="text-ink/60 font-light text-lg leading-relaxed mb-6">
            Many tutoring centers rely on the belief that &quot;practice makes perfect,&quot; but we
            know the truth:
          </p>
          <p className="italic text-brand text-xl text-center mb-6">&quot;Practice makes permanent.&quot;</p>
          <p className="text-ink/60 font-light text-lg leading-relaxed mb-6">
            And permanence requires <span className="font-semibold italic">quality</span>.
          </p>
          <p className="text-ink/60 font-light text-lg leading-relaxed">
            Whilst other tutoring services provide endless, repetitive resources, at KM Education
            we&apos;re <span className="font-semibold italic">different</span>. Instead, we equip you
            with the exact tools you need to reach your goal—whether it&apos;s a 35, 40, 45, or the
            elusive 50. I&apos;ve been through every stage of VCE preparation, ultimately topping the
            state and achieving <span className="italic">four perfect raw scores of 50</span>. I know
            what it takes to reach each target efficiently,{" "}
            <span className="font-semibold italic">without wasted effort or time</span>.
          </p>
        </div>
      </section>

      <Results />
      <Testimonials />

      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-2xl mx-auto flex justify-center">
          <Collage images={proofImages} />
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 bg-ink text-paper text-center">
        <div className="max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">Our Goal</span>
          <h2 className="text-4xl lg:text-5xl font-extralight mt-4 text-balance">
            Help every student reach the highest result they&apos;re capable of.
          </h2>
          <a
            href="/#book"
            className="inline-block mt-10 bg-brand text-paper px-8 py-4 text-xs uppercase tracking-[0.2em] font-light hover:bg-paper hover:text-ink transition-colors"
          >
            Book a Free Trial
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
