import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Our Results — KM Education",
  description:
    "State-topping VCE results from KM Education students — Raw 50s, 99.95 ATARs, and Dux placements.",
};

export default function ResultsPage() {
  return (
    <main className="bg-paper text-ink min-h-screen scroll-smooth">
      <Navbar />

      <section className="pt-24 lg:pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">Since Launching</span>
          <h1 className="text-4xl lg:text-5xl font-extralight leading-tight mt-4 text-balance">
            Our students don&apos;t just improve. They top the state.
          </h1>
          <p className="text-ink/60 font-light mt-8 text-lg leading-relaxed max-w-2xl">
            We&apos;ve helped students move from mid-range scores into top percentiles, build
            confidence in subjects they once struggled with, and walk into exams with structure
            and clarity.
          </p>
        </div>
      </section>

      <Results showAllDefault />
      <Testimonials />

      <section className="py-24 lg:py-32 px-6 bg-ink text-paper text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extralight text-balance">
            Ready to become our next result?
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
