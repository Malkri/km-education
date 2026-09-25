import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";
import { SubjectPageTemplate, SubjectPageData } from "@/components/subject/SubjectPageTemplate";
import { Collage } from "@/components/ui/Collage";

const resourceImages = [
  { src: "/vce-specialist-maths/resource-predicted-questions.png", alt: "Predicted hardest questions in the 2025 VCAA exams", width: 1280, height: 720 },
  { src: "/vce-specialist-maths/resource-support.png", alt: "Unlimited support outside of class from two tutors", width: 1280, height: 720 },
  { src: "/vce-specialist-maths/resource-notes.png", alt: "Weekly detailed notes and homework with handwritten solutions", width: 2667, height: 1500 },
  { src: "/vce-specialist-maths/resource-sacs-udfs.png", alt: "Practice SACs, exam walkthroughs and CAS programs", width: 2667, height: 1500 },
];

export const metadata: Metadata = {
  title: "VCE Specialist Maths Tutoring Melbourne — KM Education",
  description:
    "Elite VCE Specialist Maths tutoring for students aiming for 40+, 45+ and Raw 50 study scores.",
};

const data: SubjectPageData = {
  eyebrow: "VCE Specialist Maths",
  title: "Elite VCE Specialist Maths tutoring for 40+, 45+ and Raw 50 results.",
  intro:
    "Specialist Maths is one of the most demanding VCE subjects — and one of the most rewarding to get right. Our program builds the conceptual understanding, mathematical intuition and exam mastery needed to perform at the highest level, whether you're targeting a 35 or a Raw 50.",
  pillars: [
    {
      title: "Built by a Raw 50 scorer",
      body: "Our Specialist Maths course was designed by a perfect Raw 50 and Premier's Award scorer, with a heavy focus on deep conceptual understanding, advanced problem-solving, efficient CAS usage, SAC optimisation and avoiding the mistakes that cost students marks. Our philosophy: nothing on exam day should surprise you.",
    },
    {
      title: "Practice SACs & resources",
      body: "Practice SACs, exam-style questions, weekly tests, worked solutions, challenge problems and full exam walkthroughs — a resource bank built to prepare students for both school assessments and the real VCAA exam.",
    },
    {
      title: "Weekly practice tests",
      body: "Unlike other tutoring centers, we give regular feedback to our students. Knowing content versus actually being able to perform on the day are completely different skillsets, at KM Education we train both.",
    },
    {
      title: "Support beyond the lesson",
      body: "We don't just stop at our two weekly lessons. We make sure students receive 24/7 support from us via messenger — so students have their questions answered, any time.",
    },
  ],
  hideIdealFor: true,
  idealFor: [],
  extra: (
    <>
      <section className="py-24 lg:py-32 px-6 bg-brand/5">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
            Our Resources
          </span>
          <h2 className="text-4xl lg:text-5xl font-extralight mt-4 mb-8 text-balance">
            Made in-house, every week.
          </h2>
          <p className="text-ink/60 font-light text-lg leading-relaxed text-left">
            We make our own resources, with booklets for our weekly Content Lessons and
            Application (Test) Lessons. Beyond this, students receive support via our practice
            materials — weekly homework questions, practice SACs, live exam walkthroughs and
            unlimited support outside of class.
          </p>
          <p className="text-ink/60 font-light text-lg leading-relaxed mt-2 mb-10 text-left">
            Here&apos;s a collage of some of our resources!
          </p>
          <Collage images={resourceImages} />
        </div>
      </section>

      <Results />
      <Testimonials />
    </>
  ),
  faqs: [
    {
      q: "What makes KM Education different from other Specialist Maths tutoring?",
      a: "We combine elite academic performance, custom resources and personalised mentorship, all aimed specifically at top VCE results.",
    },
    {
      q: "Is this suitable for Year 11 students?",
      a: "Yes. We tutor both Year 11 and Year 12 Specialist Maths students.",
    },
    {
      q: "Do students get individual support?",
      a: "Yes. Every student receives individual feedback and ongoing academic guidance throughout the year.",
    },
    {
      q: "Can students join from anywhere in Melbourne?",
      a: "Yes. Students can join from anywhere across Melbourne and Victoria with a reliable internet connection.",
    },
  ],
};

export default function VceSpecialistMathsPage() {
  return (
    <main className="bg-paper text-ink min-h-screen scroll-smooth">
      <Navbar />
      <SubjectPageTemplate data={data} />
      <Footer />
    </main>
  );
}
