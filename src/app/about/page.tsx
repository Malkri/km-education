import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

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

const different = [
  "Clarity over content overload",
  "High-level thinking over memorisation",
  "Exam performance over passive learning",
  "Deliberate practice over repetition",
];

export default function AboutPage() {
  return (
    <main className="bg-paper text-ink min-h-screen scroll-smooth">
      <Navbar />

      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">Who We Are</span>
          <h1 className="text-4xl lg:text-5xl font-extralight leading-tight mt-4 text-balance">
            Melbourne VCE tutoring built for top results.
          </h1>
          <p className="text-ink/60 font-light mt-8 text-lg leading-relaxed max-w-2xl">
            Students don&apos;t fall short because they lack ability — they fall short because they&apos;re
            never taught how to perform. We provide Melbourne VCE tutoring designed for students who
            want more than average results, whether that&apos;s a 35+ or a Raw 50.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 bg-ink text-paper">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_auto] gap-16 items-start">
          <div>
            <h3 className="text-3xl font-extralight">Krishav</h3>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand mt-2 mb-8">
              Founder, KM Education
            </p>
            <p className="text-paper/70 font-light leading-relaxed mb-6">
              Hi, I&apos;m Krishav, founder of KM Education. When I was in Year 12, I realised something
              early: there was no shortage of tutoring in Melbourne, but there was a shortage of
              clarity. Most programs overloaded students with content, relied on repetitive
              practice, and lacked a clear system for achieving top results — and even strong
              students were left guessing what actually separates a 40 from a Raw 50.
            </p>
            <p className="text-paper/70 font-light leading-relaxed">
              KM Education was created to answer that question. The systems we teach aren&apos;t
              theoretical: they come from results achieved at the highest level, and from
              understanding how exams actually work.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-paper/10">
          {achievements.map((a) => (
            <div key={a.label}>
              <div className="text-4xl lg:text-5xl font-extralight text-brand">{a.stat}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-paper/50 font-mono mt-3">
                {a.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">Our Philosophy</span>
          <h2 className="text-4xl lg:text-5xl font-extralight mt-4 mb-8 text-balance">
            Practice doesn&apos;t make perfect.
          </h2>
          <p className="text-ink/60 font-light text-lg leading-relaxed mb-4">
            Most tutoring teaches students to practise more. We teach students to practise
            correctly — because practice doesn&apos;t make perfect, it makes permanent.
          </p>
          <p className="text-ink/60 font-light text-lg leading-relaxed">
            At KM Education, students are trained to recognise patterns before they appear,
            understand how exam questions are constructed, and apply concepts with precision
            under time pressure. That&apos;s what builds real confidence: not repetition, but
            certainty.
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 bg-brand/5">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">What Makes Us Different</span>
          <h2 className="text-4xl lg:text-5xl font-extralight mt-4 mb-10 text-balance">
            We don&apos;t aim to be the biggest. We aim to be the most effective.
          </h2>
          <ul className="space-y-4">
            {different.map((d) => (
              <li key={d} className="flex items-start gap-4 text-base font-light">
                <span className="size-6 rounded-full border border-brand flex items-center justify-center text-brand text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                {d}
              </li>
            ))}
          </ul>
          <p className="text-ink/60 font-light text-lg leading-relaxed mt-10">
            Every lesson, resource and piece of feedback is designed with one goal: to move
            students closer to top 1% performance. The students who succeed aren&apos;t the ones
            who know the most — they&apos;re the ones who can execute when it matters.
          </p>
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
