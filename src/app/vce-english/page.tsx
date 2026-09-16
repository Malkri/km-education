import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { SubjectPageTemplate, SubjectPageData } from "@/components/subject/SubjectPageTemplate";
import { Collage } from "@/components/ui/Collage";

const resourceImages = [
  { src: "/vce-english/resource-oedipus.png", alt: "Oedipus the King content lesson resource", width: 707, height: 612 },
  { src: "/vce-english/resource-voice-referendum.png", alt: "The Voice Referendum persuasive analysis resource", width: 789, height: 716 },
  { src: "/vce-english/resource-regeneration.png", alt: "Regeneration content lesson resource", width: 832, height: 642 },
  { src: "/vce-english/resource-holdovers.png", alt: "The Holdovers model point of analysis resource", width: 747, height: 602 },
];

export const metadata: Metadata = {
  title: "VCE English Tutoring Melbourne — KM Education",
  description:
    "High-scoring VCE English tutoring for students aiming for 40+ and Raw 50 study scores. Every 2026 text covered.",
};

const texts = [
  "Regeneration — Pat Barker",
  "Jane Eyre — Charlotte Brontë",
  "My Brilliant Career — Miles Franklin",
  "Chronicle of a Death Foretold — Gabriel García Márquez",
  "Orbital — Samantha Harvey",
  "Edenglassie — Melissa Lucashenko",
  "Ghost Wall — Sarah Moss",
  "The Memory Police — Yōko Ogawa",
  "The Lottery and Other Stories — Shirley Jackson",
  "The Complete Stories — David Malouf",
  "The One Day of the Year — Alan Seymour",
  "Twelfth Night — William Shakespeare",
  "Oedipus the King — Sophocles",
  "Selected Poems — Langston Hughes",
  "New and Selected Poems, Volume One — Mary Oliver",
  "The Holdovers — Alexander Payne",
  "Picnic at Hanging Rock — Peter Weir",
  "Gurrumul — Paul Williams",
  "We Come with This Place — Debra Dank",
  "Educated — Tara Westover",
];

const data: SubjectPageData = {
  eyebrow: "VCE English",
  title: "High-scoring VCE English tutoring for 40+ and Raw 50 results.",
  intro:
    "VCE English can feel frustrating and subjective, at KM Education we make it logical. We help students build clear analytical writing, sharper textual analysis and exam-ready essays, whether you're aiming for a 30, a 40+, or a Raw 50 study score.",
  pillars: [
    {
      title: "Every text covered",
      body: "We provide specialised support for EVERY VCE English text, so students receive guidance tailored to their exact school text and assessment requirements.",
    },
    {
      title: "One-on-one feedback consults",
      body: "Individual consults to receive direct feedback from your tutor about your analysis, expression, essays and planning skills.",
    },
    {
      title: "English explained simply",
      body: "We simplify English into repeatable, logical systems: how essays are built, how markers actually read them, and what separates a 30 from a Raw 40, 45 and 50.",
    },
  ],
  hideIdealFor: true,
  idealFor: [],
  faqs: [
    {
      q: "What makes your VCE English tutoring different?",
      a: "We focus on clarity, structure and personalised feedback: teaching students to write analytically, logically and confidently, rather than guessing at vague interpretations.",
    },
    {
      q: "Do you cover all VCE English texts?",
      a: "Yes. We support every major VCE English text on the 2026 list.",
    },
    {
      q: "Can weaker English students improve significantly?",
      a: "Absolutely. Many students start with little confidence in English and improve substantially through structured guidance and weekly essay feedback.",
    },
    {
      q: "Can students join from anywhere in Melbourne?",
      a: "Yes. Students can join from anywhere across Melbourne and Victoria with a reliable internet connection.",
    },
  ],
  extra: (
    <>
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extralight mb-12 text-balance">
            Every major text, covered.
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-light text-ink/70">
            {texts.map((t) => (
              <li
                key={t}
                className="border border-ink/10 px-5 py-4 hover:border-brand hover:bg-brand/5 hover:text-ink transition-colors"
              >
                {t}
              </li>
            ))}
          </ul>
          <a
            href="/blog"
            className="inline-block mt-12 border border-ink/20 px-8 py-4 text-xs uppercase tracking-[0.2em] font-light hover:bg-ink hover:text-paper hover:border-ink transition-colors"
          >
            Read Our Blog
          </a>
        </div>
      </section>

      <section className="py-24 lg:py-32 px-6 bg-brand/5">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
            Our Resources
          </span>
          <h2 className="text-4xl lg:text-5xl font-extralight mt-4 mb-8 text-balance">
            Made in-house, for every text.
          </h2>
          <p className="text-ink/60 font-light text-lg leading-relaxed text-left">
            We make our own resources, with weekly booklets for EVERY single text. For each text
            you&apos;ll receive sample essays and model points of analysis, all walked through live
            and explained simply by our expert tutors.
          </p>
          <p className="text-ink/60 font-light text-lg leading-relaxed mt-2 mb-10 text-left">
            Here&apos;s a collage of some of our resources!
          </p>
          <Collage images={resourceImages} />
        </div>
      </section>
    </>
  ),
};

export default function VceEnglishPage() {
  return (
    <main className="bg-paper text-ink min-h-screen scroll-smooth">
      <Navbar />
      <SubjectPageTemplate data={data} />
      <Footer />
    </main>
  );
}
