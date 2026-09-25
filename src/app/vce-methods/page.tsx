import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";
import { SubjectPageTemplate, SubjectPageData } from "@/components/subject/SubjectPageTemplate";
import { Collage } from "@/components/ui/Collage";

const resourceImages = [
  { src: "/vce-methods/resource-predicted-2025.png", alt: "Predicted hardest questions in the 2025 VCAA exams", width: 1280, height: 720 },
  { src: "/vce-methods/resource-support.png", alt: "Unlimited support outside of class from two tutors", width: 1280, height: 720 },
  { src: "/vce-methods/resource-homework.png", alt: "Weekly detailed notes and homework with handwritten solutions", width: 2667, height: 1500 },
  { src: "/vce-methods/resource-sacs-udfs.png", alt: "Practice SACs, exam walkthroughs and CAS programs", width: 2667, height: 1500 },
];

export const metadata: Metadata = {
  title: "VCE Methods Tutoring Melbourne — KM Education",
  description:
    "Elite VCE Mathematical Methods tutoring for students aiming for 40+ and Raw 50 study scores.",
};

const data: SubjectPageData = {
  eyebrow: "VCE Methods",
  title: "Elite VCE Mathematical Methods tutoring for 40+ and Raw 50 results.",
  intro:
    "KM Education's Methods program is built for ambitious students who want to maximise their SAC marks, exam scores and final study score through structured teaching, advanced resources and personalised support. Whether you're aiming for a 30, a 40+, or a Raw 50, our high-scoring tutors give you the systems and guidance to get there.",
  pillars: [
    {
      title: "Built by a Raw 50 scorer",
      body: "Our Methods course was designed by a perfect Raw 50 and Premier's Award scorer, with a heavy focus on deep conceptual understanding, advanced problem-solving, efficient CAS usage, SAC optimisation and avoiding the mistakes that cost students marks. Our philosophy: nothing on exam day should surprise you.",
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
      q: "What makes KM Education different from other Methods tutoring?",
      a: "We combine elite-level academic performance, custom resources and personalised mentorship, all aimed specifically at high VCE results — not generic classroom repetition.",
    },
    {
      q: "Is this suitable for Year 11 students?",
      a: "Yes. We tutor both Year 11 and Year 12 Methods students.",
    },
    {
      q: "Do students get individual support?",
      a: "Yes. Every student receives personalised feedback and guidance throughout the year, not just a seat in a group class.",
    },
    {
      q: "Can students join from anywhere in Melbourne?",
      a: "Yes. Students can join from anywhere across Melbourne and Victoria with a reliable internet connection.",
    },
  ],
};

export default function VceMethodsPage() {
  return (
    <main className="bg-paper text-ink min-h-screen scroll-smooth">
      <Navbar />
      <SubjectPageTemplate data={data} />
      <Footer />
    </main>
  );
}
