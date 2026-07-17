import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { SubjectPageTemplate, SubjectPageData } from "@/components/subject/SubjectPageTemplate";

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
    "VCE English can feel frustrating and subjective — our approach makes it logical. We help students build clear analytical writing, sharper textual analysis and exam-ready essays, whether you're aiming for a 30, a 40+, or a Raw 50 study score.",
  pillars: [
    {
      title: "Every 2026 text covered",
      body: "We provide specialised support for every major VCE English text, so students receive guidance tailored to their exact school text and assessment requirements.",
    },
    {
      title: "One-on-one essay feedback",
      body: "Personalised weekly classes focused on essay improvement, topic analysis, quote integration, paragraph structure and written expression — with feedback on your own essays, not generic examples.",
    },
    {
      title: "English explained simply",
      body: "We simplify English into repeatable, logical systems: how essays are built, how markers actually read them, and what separates a 40 from a Raw 50 — no vague or confusing interpretations.",
    },
    {
      title: "Structured, weekly support",
      body: "Students get consistent, one-on-one classes each week rather than occasional generic sessions, so progress compounds over the year instead of relying on last-minute cramming.",
    },
  ],
  idealFor: [
    "Want to improve essay writing quickly",
    "Struggle with textual analysis",
    "Feel English is too subjective to study for",
    "Are aiming for a 40+ or Raw 50 study score",
    "Want structured, weekly accountability",
  ],
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
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
          2026 Text List
        </span>
        <h2 className="text-4xl lg:text-5xl font-extralight mt-4 mb-12 text-balance">
          Every major text, covered.
        </h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-sm font-light text-ink/70">
          {texts.map((t) => (
            <li key={t} className="border-b border-ink/10 pb-3">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
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
