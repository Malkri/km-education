import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Blog — KM Education",
  description:
    "Articles on VCE English texts, essay writing and exam technique from KM Education.",
};

export default function BlogPage() {
  return (
    <main className="bg-paper text-ink min-h-screen scroll-smooth">
      <Navbar />

      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">Blog</span>
          <h1 className="text-4xl lg:text-5xl font-extralight leading-tight mt-4 text-balance">
            Articles on every text, and how to write about them.
          </h1>
          <p className="text-ink/60 font-light mt-8 text-lg leading-relaxed max-w-2xl">
            New posts on VCE English texts, essay technique and exam strategy are coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
