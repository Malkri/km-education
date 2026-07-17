import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { SubjectPageTemplate, SubjectPageData } from "@/components/subject/SubjectPageTemplate";

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
      body: "Our Specialist Maths course was designed by a perfect Raw 50 and Premier's Award scorer, covering advanced problem-solving, mathematical reasoning, efficient CAS usage and the application questions that catch students out. Our philosophy: nothing on the exam should feel unfamiliar.",
    },
    {
      title: "Custom UDF programs",
      body: "Students get access to our own custom UDF systems, designed to give a real edge in SACs and VCAA exams: recognising difficult question patterns, solving problems faster, and building the instincts that separate elite students from the rest.",
    },
    {
      title: "Practice SACs & resources",
      body: "Practice SACs, advanced exam-style questions, revision booklets, worked solutions and full exam walkthroughs — built specifically for the complexity of modern VCAA Specialist exams.",
    },
    {
      title: "Support beyond the lesson",
      body: "Every student gets ongoing help outside class: tricky homework questions, SAC preparation, CAS troubleshooting and study planning, so support is always there when it's needed.",
    },
  ],
  idealFor: [
    "Want to maximise their SAC performance",
    "Are aiming for a 40+, 45+ or Raw 50 study score",
    "Struggle with harder application questions",
    "Want a stronger, more structured exam technique",
    "Feel school explanations aren't quite enough",
  ],
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
