import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What makes KM Education different for VCE tutoring?", a: "We focus on precisely what you need to score well. No generic textbook content: we make our own in-house resources prepared by Raw 50 scorers. No generic teaching: all our tutors are high-scoring students with prior tutoring experience. The result: you save time AND score high. Our student results prove that our method works." },
  { q: "Is tutoring worth it for VCE?", a: "Absolutely, especially for students aiming very high, for competitive courses, for students needing prerequisite scores for uni, and for students wishing to save time studying. Tutoring is similar to an athlete having a coach. You get a clear roadmap: what to study, how to study, how long to study for, and a support system that helps you 24/7, any day, any time." },
  { q: "How often should I have tutoring for VCE?", a: "Most high-performing students receive regular tutoring throughout the year. Our resources are top-tier: far better than any textbook. The earlier you start, the more time you'll have to digest, practise and apply our hundreds of pages of Raw 50 content." },
  { q: "What subjects do you offer?", a: "We offer elite VCE tutoring in English, Mathematical Methods, and Specialist Maths, all designed by Raw 50 and Premier's Award scorers." },
  { q: "Can students join from anywhere in Melbourne?", a: "Yes. Students can join from anywhere across Melbourne and Victoria with a reliable internet connection." },
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
