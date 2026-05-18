import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  CalendarCheck,
  Check,
  ChevronDown,
  CirclePlay,
  Clock3,
  FileText,
  GraduationCap,
  HeartHandshake,
  LayoutGrid,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorPlay,
  PenTool,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  Video,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Classes", href: "#classes" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const heroBenefits = [
  { label: "Live interactive lessons", icon: MonitorPlay },
  { label: "Weekly progress support", icon: BarChart3 },
  { label: "Flexible online access", icon: Clock3 },
  { label: "Trusted by students & parents", icon: ShieldCheck },
];

const trustItems = [
  { label: "Live online classes", icon: Video },
  { label: "Experienced teachers", icon: GraduationCap },
  { label: "Parent progress updates", icon: MessageCircle },
  { label: "Flexible schedules", icon: CalendarCheck },
  { label: "Free trial available", icon: BadgeCheck },
];

const problems = [
  "Falling behind in class",
  "Not knowing what to study each week",
  "Low confidence before tests",
  "Lack of individual support",
];

const solutions = [
  "Clear weekly lesson structure",
  "Supportive online teachers",
  "Practice-focused learning",
  "Feedback and progress tracking",
  "Easy booking for trial classes",
];

const programs = [
  {
    title: "Academic Support Classes",
    description:
      "Guided weekly lessons that help students stay aligned with schoolwork and build stronger study habits.",
    ideal: "Students who want steady support throughout the term.",
    included: "Live lessons, recap notes, practice tasks, and progress check-ins.",
    badge: "Weekly support",
    icon: BookOpenCheck,
  },
  {
    title: "Exam Preparation Classes",
    description:
      "Focused preparation for assessments, topic tests, and exam periods with clear revision plans.",
    ideal: "Students preparing for upcoming tests or major exams.",
    included: "Revision structure, worked examples, timed practice, and feedback.",
    badge: "Test ready",
    icon: Target,
  },
  {
    title: "Skill-Building Classes",
    description:
      "Confidence-building sessions for core skills, study routines, problem solving, and clearer thinking.",
    ideal: "Students who want stronger foundations and better learning strategies.",
    included: "Skill workshops, guided practice, resources, and teacher support.",
    badge: "Stronger skills",
    icon: Lightbulb,
  },
  {
    title: "One-on-One Online Coaching",
    description:
      "Personalised online coaching for students who need targeted help, accountability, or extension.",
    ideal: "Students who benefit from individual attention and flexible goals.",
    included: "Custom plan, private sessions, feedback, and parent-friendly updates.",
    badge: "Personalised",
    icon: Users,
  },
];

const steps = [
  {
    title: "Choose your class",
    description:
      "Pick the class style that matches your goals, schedule, and current confidence level.",
    icon: LayoutGrid,
  },
  {
    title: "Book a free trial online",
    description:
      "Share a few details and we will help match you with the right starting point.",
    icon: CalendarCheck,
  },
  {
    title: "Join live lessons and track progress",
    description:
      "Learn in structured sessions, practise consistently, and see what to focus on next.",
    icon: MonitorPlay,
  },
];

const benefits = [
  { title: "Live interactive online lessons", icon: MonitorPlay },
  { title: "Small group or individual options", icon: Users },
  { title: "Structured weekly learning plans", icon: CalendarCheck },
  { title: "Expert teachers who explain clearly", icon: GraduationCap },
  { title: "Practice tasks and feedback", icon: PenTool },
  { title: "Parent-friendly progress updates", icon: MessageCircle },
];

const stats = [
  { value: "[X]+", label: "students supported" },
  { value: "[X]%", label: "improved confidence" },
  { value: "[X]+", label: "live classes delivered" },
  { value: "[X]/5", label: "average student rating" },
];

const videoTestimonials = [
  {
    name: "Student name",
    role: "Year level placeholder",
    quote: "The lessons helped me feel prepared and less stressed each week.",
  },
  {
    name: "Parent name",
    role: "Parent testimonial",
    quote: "The structure made it much easier to understand what my child was working on.",
  },
  {
    name: "Student name",
    role: "Subject placeholder",
    quote: "I liked being able to ask questions and practise with feedback.",
  },
];

const writtenTestimonials = [
  {
    quote:
      "KM Education gave our family a clearer weekly rhythm. The online classes felt organised, supportive, and easy to fit around school.",
    name: "Parent testimonial placeholder",
  },
  {
    quote:
      "The teacher explained the hard parts in a way that finally made sense. I felt more confident going into my assessment.",
    name: "Student testimonial placeholder",
  },
];

const galleryItems = [
  {
    title: "Online class screenshot",
    description: "Live lesson interface placeholder",
    icon: MonitorPlay,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Teacher explaining concept",
    description: "Whiteboard moment placeholder",
    icon: Lightbulb,
    className: "",
  },
  {
    title: "Student studying from home",
    description: "Focused study setup placeholder",
    icon: BookOpenCheck,
    className: "",
  },
  {
    title: "Class resources / worksheets",
    description: "Guided practice placeholder",
    icon: FileText,
    className: "md:col-span-2",
  },
];

const teachers = [
  {
    name: "Teacher Name",
    specialty: "Mathematics & study support",
    bio: "Clear explanations, calm pacing, and plenty of guided practice.",
  },
  {
    name: "Teacher Name",
    specialty: "English & communication",
    bio: "Supportive feedback that helps students structure stronger responses.",
  },
  {
    name: "Teacher Name",
    specialty: "Exam preparation",
    bio: "Focused revision plans that make assessment periods feel manageable.",
  },
];

const faqs = [
  {
    question: "How do online classes work?",
    answer:
      "Students join live online lessons with a teacher, work through structured content, practise key skills, and receive guidance on what to focus on next.",
  },
  {
    question: "Is the trial class free?",
    answer:
      "Yes. The trial class is designed to help students and parents see whether the class format, teacher support, and structure are the right fit.",
  },
  {
    question: "Are the classes live or recorded?",
    answer:
      "Classes are designed around live online teaching so students can ask questions, practise actively, and receive support during the lesson.",
  },
  {
    question: "Do you offer one-on-one support?",
    answer:
      "Yes. Students can choose from small-group options or one-on-one online coaching depending on their goals and the level of support they need.",
  },
  {
    question: "How do parents track progress?",
    answer:
      "Parent-friendly updates can summarise focus areas, attendance, confidence, and recommended next steps as the student progresses.",
  },
  {
    question: "What subjects/classes do you offer?",
    answer:
      "KM Education can support academic classes, exam preparation, skill-building, and personalised coaching. Specific subjects can be confirmed during the trial booking process.",
  },
  {
    question: "Can students join from anywhere?",
    answer:
      "Yes. Classes are online, so students can join from home or any quiet study space with a reliable internet connection.",
  },
];

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 shadow-sm shadow-emerald-950/5">
      <Icon aria-hidden="true" size={21} strokeWidth={2.1} />
    </span>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/70 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm shadow-emerald-950/5">
      <Sparkles aria-hidden="true" size={16} />
      {children}
    </p>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#33483d]">{label}</span>
      <input
        className="mt-2 h-12 w-full rounded-2xl border border-emerald-900/10 bg-[#fcfbf4] px-4 text-sm text-[#24382f] outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
}

function SelectField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#33483d]">{label}</span>
      <select className="mt-2 h-12 w-full rounded-2xl border border-emerald-900/10 bg-[#fcfbf4] px-4 text-sm text-[#24382f] outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100">
        {children}
      </select>
    </label>
  );
}

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen overflow-hidden bg-[#fcfbf4] text-[#24382f]"
    >
      <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-950/10 bg-[#fcfbf4]/88 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"
        >
          <a
            href="#home"
            className="flex h-14 w-[9.5rem] items-center justify-start transition hover:-translate-y-0.5 sm:w-[10.75rem]"
          >
            <Image
              src="/km-education-logo.svg"
              alt="KM Education"
              width={180}
              height={90}
              className="h-12 w-full object-contain"
              priority
            />
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="text-sm font-semibold text-[#536250] transition hover:text-emerald-800"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#3f642c] px-5 text-sm font-bold text-white shadow-lg shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-[#345426]"
              href="#booking"
            >
              <CalendarCheck aria-hidden="true" size={18} />
              Book a Free Trial
            </a>
          </div>

          <details className="group relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-2xl border border-emerald-900/10 bg-white text-[#24382f] shadow-sm">
              <Menu
                aria-hidden="true"
                className="block group-open:hidden"
                size={22}
              />
              <X
                aria-hidden="true"
                className="hidden group-open:block"
                size={22}
              />
              <span className="sr-only">Toggle navigation menu</span>
            </summary>
            <div className="absolute right-0 mt-4 w-[min(82vw,22rem)] rounded-[1.5rem] border border-emerald-900/10 bg-white p-4 shadow-2xl shadow-emerald-950/15">
              <div className="grid gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-[#536250] transition hover:bg-emerald-50 hover:text-emerald-800"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#3f642c] px-5 py-3 text-sm font-bold text-white"
                href="#booking"
              >
                <CalendarCheck aria-hidden="true" size={18} />
                Book a Free Trial
              </a>
            </div>
          </details>
        </nav>
      </header>

      <section className="relative isolate overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#fcfbf4_0%,#f2f8e8_48%,#eaf5d5_100%)]" />
        <div className="absolute left-0 top-32 -z-10 h-60 w-2/3 rotate-[-8deg] bg-emerald-200/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 -z-10 h-80 w-2/3 rotate-[9deg] bg-[#dcefb7]/45 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:pb-24 lg:pt-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-700/15 bg-white/70 px-4 py-2 text-sm font-bold text-emerald-900 shadow-sm shadow-emerald-950/5">
              <Star
                aria-hidden="true"
                className="fill-[#b89534] text-[#b89534]"
                size={16}
              />
              Online classes that help students learn with confidence.
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-[#203325] sm:text-6xl lg:text-7xl">
              Online Classes That Help Students Learn Smarter, Stay Consistent,
              and Feel Confident
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#66725f] sm:text-xl">
              Live, structured online lessons with expert teachers, clear study
              plans, progress support, and flexible class options for busy
              students.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#3f642c] px-7 text-base font-bold text-white shadow-xl shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-[#345426]"
                href="#booking"
              >
                <CalendarCheck aria-hidden="true" size={20} />
                Book a Free Trial Class
              </a>
              <a
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-emerald-900/15 bg-white/75 px-7 text-base font-bold text-[#24382f] shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-700/30 hover:bg-white"
                href="#classes"
              >
                View Classes
                <ArrowRight aria-hidden="true" size={19} />
              </a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {heroBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.label}
                    className="rounded-3xl border border-white/70 bg-white/65 p-4 shadow-lg shadow-emerald-950/5 backdrop-blur"
                  >
                    <Icon className="text-emerald-700" size={20} />
                    <p className="mt-3 text-sm font-semibold leading-5 text-[#33483d]">
                      {benefit.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 hidden h-32 w-32 rotate-12 rounded-[2.5rem] border border-emerald-300/50 bg-white/35 backdrop-blur md:block" />
            <div className="absolute -right-4 bottom-20 hidden h-28 w-44 -rotate-6 rounded-[2rem] border border-mint/70 bg-mint/25 backdrop-blur md:block" />
            <div className="relative rounded-[2.5rem] border border-white/70 bg-white/55 p-3 shadow-[0_34px_90px_-38px_rgba(61,91,43,0.6)] backdrop-blur">
              <div className="overflow-hidden rounded-[2rem] bg-[#3f642c]">
                <div className="flex items-center justify-between border-b border-white/10 bg-white/8 px-5 py-4 text-white">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#edc77b]" />
                    <span className="h-3 w-3 rounded-full bg-mint" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-sm font-semibold text-mint">
                    Live Class Studio
                  </span>
                </div>
                <div className="grid gap-4 p-4 sm:grid-cols-[1.4fr_0.8fr]">
                  <div className="relative min-h-[22rem] overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_20%_20%,rgba(220,239,183,0.42),transparent_32%),linear-gradient(135deg,#72994a,#304b2e)] p-5 text-white">
                    <div className="absolute inset-x-8 top-8 h-24 rotate-[-3deg] rounded-[2rem] border border-white/10 bg-white/10" />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#263f2a] to-transparent" />
                    <div className="relative flex h-full min-h-[19rem] flex-col justify-between">
                      <div className="max-w-64 rounded-3xl border border-white/15 bg-white/12 p-4 backdrop-blur">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">
                          Today&apos;s focus
                        </p>
                        <p className="mt-2 text-xl font-bold">
                          Algebra confidence sprint
                        </p>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-3xl border border-white/15 bg-white/12 p-4 backdrop-blur">
                          <p className="text-sm text-mint">Teacher screen</p>
                          <div className="mt-4 h-24 rounded-2xl bg-white/15" />
                        </div>
                        <div className="rounded-3xl border border-white/15 bg-white/12 p-4 backdrop-blur">
                          <p className="text-sm text-mint">Student notes</p>
                          <div className="mt-4 space-y-2">
                            <span className="block h-2 rounded-full bg-white/35" />
                            <span className="block h-2 w-4/5 rounded-full bg-white/25" />
                            <span className="block h-2 w-2/3 rounded-full bg-white/20" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      aria-label="Play online class preview"
                      className="absolute left-1/2 top-1/2 grid h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-emerald-800 shadow-2xl shadow-emerald-950/35"
                      type="button"
                    >
                      <Play
                        aria-hidden="true"
                        className="ml-1 fill-current"
                        size={30}
                      />
                    </button>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.5rem] bg-[#f0f7df] p-5">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-bold text-[#24382f]">
                          Weekly progress
                        </p>
                        <BarChart3 className="text-emerald-700" size={20} />
                      </div>
                      <div className="mt-5 space-y-3">
                        {["Concept clarity", "Practice", "Confidence"].map(
                          (label, index) => (
                            <div key={label}>
                              <div className="mb-2 flex items-center justify-between text-xs font-semibold text-[#66725f]">
                                <span>{label}</span>
                                <span>{78 + index * 6}%</span>
                              </div>
                              <div className="h-2 rounded-full bg-white">
                                <div
                                  className="h-2 rounded-full bg-emerald-600"
                                  style={{ width: `${78 + index * 6}%` }}
                                />
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 text-white">
                      <p className="text-sm font-semibold text-mint">
                        Next live lesson
                      </p>
                      <p className="mt-3 text-2xl font-bold">Tue, 6:00 PM</p>
                      <p className="mt-2 text-sm leading-6 text-white/70">
                        Flexible online access with clear reminders.
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] bg-white p-5">
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
                          <Check size={20} />
                        </div>
                        <p className="text-sm font-bold text-[#24382f]">
                          Practice uploaded
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-emerald-950/10 bg-white/65">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-5 sm:px-8 md:grid-cols-5">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl px-2 py-2 text-sm font-bold text-[#33483d]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-emerald-100 text-emerald-800">
                  <Icon aria-hidden="true" size={19} />
                </span>
                {item.label}
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionEyebrow>Structure over pressure</SectionEyebrow>
            <h2 className="text-4xl font-bold tracking-tight text-[#203325] sm:text-5xl">
              Most students don&apos;t need more pressure — they need the right
              structure.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#e6d7bd] bg-[#fffdf4] p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f2e8c9] text-[#6f5b24]">
                  <Target aria-hidden="true" size={22} />
                </span>
                <h3 className="text-2xl font-bold text-[#24382f]">
                  Common problems
                </h3>
              </div>
              <div className="mt-7 grid gap-3">
                {problems.map((problem) => (
                  <div
                    key={problem}
                    className="flex items-start gap-3 rounded-2xl bg-white px-4 py-4 text-[#66725f]"
                  >
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#b89534]" />
                    <span className="font-medium">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-emerald-900/10 bg-[#3f642c] p-7 text-white shadow-2xl shadow-emerald-950/20">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/12 text-mint">
                  <HeartHandshake aria-hidden="true" size={22} />
                </span>
                <h3 className="text-2xl font-bold">Our solution</h3>
              </div>
              <div className="mt-7 grid gap-3">
                {solutions.map((solution) => (
                  <div
                    key={solution}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-4"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-mint"
                      size={20}
                    />
                    <span className="font-semibold text-white/88">
                      {solution}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="classes"
        className="bg-[#f4faeb] px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <SectionEyebrow>Classes and programs</SectionEyebrow>
              <h2 className="text-4xl font-bold tracking-tight text-[#203325] sm:text-5xl">
                Choose the right online class for your goals
              </h2>
            </div>
            <a
              className="inline-flex h-[3.25rem] w-fit items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-emerald-900 shadow-sm transition hover:-translate-y-0.5"
              href="#booking"
            >
              Compare options
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <article
                  key={program.title}
                  className="group flex min-h-[28rem] flex-col rounded-[2rem] border border-emerald-900/10 bg-white p-6 shadow-[0_26px_70px_-46px_rgba(61,91,43,0.45)] transition hover:-translate-y-1 hover:shadow-[0_34px_80px_-46px_rgba(61,91,43,0.6)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <IconBadge icon={Icon} />
                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800">
                      {program.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#24382f]">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#66725f]">
                    {program.description}
                  </p>
                  <div className="mt-6 space-y-4 border-t border-emerald-900/10 pt-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                        Ideal for
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#536250]">
                        {program.ideal}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                        What&apos;s included
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#536250]">
                        {program.included}
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto pt-7">
                    <a
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-900/10 bg-[#f8fbef] px-5 py-3 text-sm font-bold text-[#24382f] transition group-hover:border-emerald-700/25 group-hover:bg-[#3f642c] group-hover:text-white"
                      href="#booking"
                    >
                      Book Trial
                      <ArrowRight aria-hidden="true" size={17} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Simple start</SectionEyebrow>
            <h2 className="text-4xl font-bold tracking-tight text-[#203325] sm:text-5xl">
              Start learning in 3 simple steps
            </h2>
          </div>
          <div className="relative mt-14 grid gap-5 lg:grid-cols-3">
            <div className="absolute left-16 right-16 top-16 hidden h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent lg:block" />
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative rounded-[2rem] border border-emerald-900/10 bg-white p-7 text-center shadow-[0_24px_70px_-46px_rgba(61,91,43,0.45)]"
                >
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-[#3f642c] text-white shadow-xl shadow-emerald-950/20">
                    <Icon aria-hidden="true" size={26} />
                  </div>
                  <span className="mt-6 inline-flex h-8 items-center rounded-full bg-emerald-50 px-3 text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">
                    Step {index + 1}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-[#24382f]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#66725f]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <a
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#3f642c] px-7 text-base font-bold text-white shadow-xl shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-[#345426]"
              href="#booking"
            >
              <CalendarCheck aria-hidden="true" size={20} />
              Book Your Trial Class
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#3f642c] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-mint">
              <ShieldCheck aria-hidden="true" size={16} />
              Why choose us
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Built for students who want clarity, confidence, and consistent
              progress
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/9 p-6 shadow-lg shadow-emerald-950/10"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint/15 text-mint">
                    <Icon aria-hidden="true" size={23} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold leading-snug">
                    {benefit.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="results" className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-emerald-900/10 bg-white shadow-[0_34px_90px_-52px_rgba(61,91,43,0.55)]">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[#f4faeb] p-8 sm:p-10 lg:p-12">
                <SectionEyebrow>Results and impact</SectionEyebrow>
                <h2 className="text-4xl font-bold tracking-tight text-[#203325] sm:text-5xl">
                  Credible progress starts with consistent support
                </h2>
                <p className="mt-5 text-base leading-7 text-[#66725f]">
                  These statistic blocks are ready for verified outcomes,
                  confidence surveys, class counts, and student feedback.
                </p>
                <p className="mt-6 rounded-2xl border border-emerald-900/10 bg-white px-4 py-3 text-sm font-semibold text-emerald-900">
                  Replace these with your real numbers once available.
                </p>
              </div>
              <div className="grid gap-px bg-emerald-900/10 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white p-8 sm:p-10">
                    <p className="text-5xl font-bold tracking-tight text-[#3f642c]">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-base font-semibold text-[#66725f]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="bg-[#fffdf4] px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionEyebrow>Student and parent voices</SectionEyebrow>
            <h2 className="text-4xl font-bold tracking-tight text-[#203325] sm:text-5xl">
              Hear from our students and parents
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {videoTestimonials.map((testimonial) => (
              <article
                key={`${testimonial.name}-${testimonial.role}`}
                className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white shadow-[0_26px_70px_-48px_rgba(61,91,43,0.45)]"
              >
                <div className="relative aspect-video bg-[linear-gradient(135deg,#3f642c,#93c45a_58%,#eef8da)]">
                  <div className="absolute inset-4 rounded-[1.4rem] border border-white/20 bg-white/10" />
                  <button
                    aria-label={`Play testimonial from ${testimonial.name}`}
                    className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-emerald-800 shadow-xl"
                    type="button"
                  >
                    <CirclePlay aria-hidden="true" size={32} />
                  </button>
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-emerald-900">
                    Video testimonial
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#24382f]">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-emerald-700">
                    {testimonial.role}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[#66725f]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {writtenTestimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[2rem] border border-emerald-900/10 bg-white p-7 shadow-sm"
              >
                <div className="flex gap-1 text-[#b89534]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      aria-hidden="true"
                      className="fill-current"
                      size={18}
                    />
                  ))}
                </div>
                <p className="mt-5 text-lg leading-8 text-[#33483d]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-5 text-sm font-bold text-emerald-800">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionEyebrow>Learning experience</SectionEyebrow>
            <h2 className="text-4xl font-bold tracking-tight text-[#203325] sm:text-5xl">
              See what learning with us looks like
            </h2>
          </div>
          <div className="mt-12 grid auto-rows-[16rem] gap-5 md:grid-cols-4">
            {galleryItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`relative overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[linear-gradient(135deg,#f8fbef,#eaf5d5)] p-6 shadow-sm ${item.className}`}
                >
                  <div className="absolute -right-10 -top-10 h-36 w-36 rotate-12 rounded-[2rem] bg-white/45" />
                  <div className="relative flex h-full flex-col justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-emerald-800 shadow-sm">
                      <Icon aria-hidden="true" size={25} />
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-[#24382f]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-[#66725f]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f4faeb] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionEyebrow>Teacher support</SectionEyebrow>
            <h2 className="text-4xl font-bold tracking-tight text-[#203325] sm:text-5xl">
              Supportive teachers. Structured lessons. Real progress.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#66725f]">
              Our classes are designed to make difficult topics easier to
              understand through clear explanations, guided practice, and
              regular feedback.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {teachers.map((teacher, index) => (
              <article
                key={`${teacher.name}-${teacher.specialty}`}
                className="rounded-[2rem] border border-emerald-900/10 bg-white p-6 shadow-[0_24px_70px_-50px_rgba(61,91,43,0.45)]"
              >
                <div className="grid aspect-square place-items-center rounded-[1.5rem] bg-[linear-gradient(135deg,#3f642c,#93c45a)] text-white">
                  <span className="text-4xl font-bold">
                    T{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#24382f]">
                  {teacher.name}
                </h3>
                <p className="mt-1 text-sm font-bold text-emerald-700">
                  {teacher.specialty}
                </p>
                <p className="mt-4 text-sm leading-6 text-[#66725f]">
                  {teacher.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 overflow-hidden rounded-[2.5rem] bg-[#3f642c] p-5 text-white shadow-[0_34px_90px_-46px_rgba(61,91,43,0.65)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
            <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/8 p-8">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-mint/15 px-4 py-2 text-sm font-bold text-mint">
                  <CalendarCheck aria-hidden="true" size={16} />
                  Free trial class
                </p>
                <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                  Ready to try your first online class?
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/74">
                  Book a free trial and see how our classes can help you learn
                  with more structure and confidence.
                </p>
              </div>
              <div className="mt-10 space-y-4">
                {[
                  "No pressure.",
                  "No commitment.",
                  "Just see if it's the right fit.",
                ].map((line) => (
                  <div key={line} className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-2xl bg-white/10 text-mint">
                      <Check aria-hidden="true" size={18} />
                    </span>
                    <span className="text-sm font-semibold text-white/82">
                      {line}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <form className="rounded-[2rem] bg-white p-6 text-[#24382f] sm:p-8">
              <div className="flex flex-col justify-between gap-4 border-b border-emerald-900/10 pb-6 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-2xl font-bold">Book a Free Trial Class</h3>
                  <p className="mt-2 text-sm leading-6 text-[#66725f]">
                    Tell us what you&apos;re looking for and we&apos;ll help
                    choose the best starting point.
                  </p>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800">
                  <BadgeCheck aria-hidden="true" size={15} />
                  UI placeholder
                </span>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field label="Student name" placeholder="Student full name" />
                <Field label="Parent name" placeholder="Parent full name" />
                <Field
                  label="Email"
                  placeholder="you@example.com"
                  type="email"
                />
                <Field label="Phone" placeholder="+61 400 000 000" type="tel" />
                <SelectField label="Year level">
                  <option>Select year level</option>
                  <option>Year 7</option>
                  <option>Year 8</option>
                  <option>Year 9</option>
                  <option>Year 10</option>
                  <option>Year 11</option>
                  <option>Year 12</option>
                </SelectField>
                <SelectField label="Subject/class interest">
                  <option>Select class interest</option>
                  <option>Academic Support Classes</option>
                  <option>Exam Preparation Classes</option>
                  <option>Skill-Building Classes</option>
                  <option>One-on-One Online Coaching</option>
                </SelectField>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-semibold text-[#33483d]">
                    Preferred time
                  </span>
                  <input
                    className="mt-2 h-12 w-full rounded-2xl border border-emerald-900/10 bg-[#fcfbf4] px-4 text-sm text-[#24382f] outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                    placeholder="e.g. Weekdays after 5 PM"
                    type="text"
                  />
                </label>
              </div>
              <button
                className="mt-7 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#3f642c] px-7 text-base font-bold text-white shadow-xl shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-[#345426]"
                type="button"
              >
                <CalendarCheck aria-hidden="true" size={20} />
                Request My Free Trial
              </button>
              <p className="mt-4 text-center text-xs font-medium text-[#73806f]">
                Form submission will be connected in the next functionality
                pass.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#f4faeb] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="text-4xl font-bold tracking-tight text-[#203325] sm:text-5xl">
              Questions before your first class?
            </h2>
            <p className="mt-5 text-base leading-7 text-[#66725f]">
              A clear starting point helps students and parents feel confident
              before joining.
            </p>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.5rem] border border-emerald-900/10 bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-bold text-[#24382f]">
                  {faq.question}
                  <ChevronDown
                    aria-hidden="true"
                    className="shrink-0 text-emerald-700 transition group-open:rotate-180"
                    size={22}
                  />
                </summary>
                <p className="mt-4 text-sm leading-7 text-[#66725f]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#203325] px-5 py-12 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.9fr]">
            <div>
              <a
                href="#home"
                className="flex w-[11rem] items-center"
              >
                <Image
                  src="/km-education-logo.svg"
                  alt="KM Education"
                  width={180}
                  height={90}
                  className="h-14 w-full object-contain"
                />
              </a>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
                Premium, supportive online learning for students who want
                structure, clarity, and consistent progress.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-mint">
                Quick links
              </h3>
              <div className="mt-5 grid gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    className="text-sm font-semibold text-white/68 transition hover:text-white"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-mint">
                Contact
              </h3>
              <div className="mt-5 grid gap-4 text-sm text-white/68">
                <p className="flex items-center gap-3">
                  <Mail aria-hidden="true" size={17} />
                  hello@kmeducation.com
                </p>
                <p className="flex items-center gap-3">
                  <Phone aria-hidden="true" size={17} />
                  +61 000 000 000
                </p>
                <p className="flex items-center gap-3">
                  <MapPin aria-hidden="true" size={17} />
                  Online classes
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-mint">
                Start here
              </h3>
              <a
                className="mt-5 inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-mint px-6 text-sm font-bold text-[#3f642c] transition hover:-translate-y-0.5 hover:bg-white"
                href="#booking"
              >
                <CalendarCheck aria-hidden="true" size={18} />
                Book a Free Trial
              </a>
              <div className="mt-6 flex gap-3">
                {["IG", "FB", "YT"].map((social) => (
                  <a
                    key={social}
                    aria-label={`${social} social profile placeholder`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-xs font-bold text-white/70 transition hover:bg-white hover:text-[#3f642c]"
                    href="#home"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
            Copyright © 2026 KM Education. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
