import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { SubjectPageTemplate, SubjectPageData } from "@/components/subject/SubjectPageTemplate";

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
      title: "Custom UDF programs",
      body: "Students get access to our own custom UDF systems, built to give a genuine edge in SACs and exams: spotting high-yield question types, solving problems faster, and recognising the patterns VCAA repeats year after year.",
    },
    {
      title: "Practice SACs & resources",
      body: "Practice SACs, exam-style questions, topic tests, worked solutions, challenge problems and full exam walkthroughs — a resource bank built to prepare students for both school assessments and the real VCAA exam.",
    },
    {
      title: "Support beyond the lesson",
      body: "Every student gets ongoing help outside class: homework questions, SAC revision, CAS troubleshooting, study planning and exam preparation. No one is left stuck studying Methods alone.",
    },
  ],
  idealFor: [
    "Want to lift their SAC performance",
    "Are aiming for a 40+ or Raw 50 study score",
    "Struggle with harder application questions",
    "Want a stronger, more structured exam strategy",
    "Feel school explanations aren't quite enough",
  ],
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
