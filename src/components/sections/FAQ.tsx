import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How do online classes work?", a: "Students join a live video session at the scheduled time via our online platform. Lessons are interactive, with screen sharing, digital whiteboards, and real-time discussion." },
  { q: "Is the trial class free?", a: "Yes. Your first trial class is completely free with no commitment. It's a chance to meet your teacher and see how our approach fits your child." },
  { q: "Are classes live or recorded?", a: "All classes are live. Recordings of group lessons may be available afterwards for revision, depending on the program." },
  { q: "Do you offer one-on-one support?", a: "Yes. Our 1:1 Online Coaching program is fully personalised, with sessions tailored to your child's pace and goals." },
  { q: "How do parents track progress?", a: "Parents receive regular updates on attendance, effort, and academic growth, so you always know how your child is progressing." },
  { q: "What subjects do you offer?", a: "We cover the major Year 7–12 subjects across the Australian curriculum, including Maths, English, Science, and more." },
  { q: "Can students join from anywhere?", a: "Yes. Classes are fully online, so students can join from anywhere in Australia with a reliable internet connection." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">FAQ</span>
          <h2 className="text-4xl lg:text-5xl font-extralight mt-4">Common questions.</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-ink/10">
              <AccordionTrigger className="text-left text-lg font-light py-6 hover:no-underline hover:text-brand">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm font-light text-ink/60 leading-relaxed pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
