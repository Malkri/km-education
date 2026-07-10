import { Star } from "lucide-react";

const videos = [
  {
    src: "https://drive.google.com/file/d/1sJPNamHRSR4vUmqVakL81O-jfTaELDYj/preview",
    name: "Tanmay",
    role: "Raw 49 · MHS · 99.65 ATAR",
  },
  {
    src: "https://drive.google.com/file/d/1pa8tlXE2FWexTIaEq5vtR6nZ2fb6WS-6/preview",
    name: "Ranusha",
    role: "Raw 44 · St Kevin's College",
  },
];

const testimonials = [
  {
    quote: "I'm really glad I chose to go with KM Education. The invaluable insights, comprehensive notes and exemplary model responses helped me approach English — which I had so dreaded at the start of the year — with newfound confidence. KM Education's expertise in writing, teaching and constructive feedback allowed me to improve my essay writing and gain a profound and nuanced understanding of texts and arguments.",
    name: "Patrick Phan",
    role: "Raw 50 English · MHS Dux 2024 · 99.95 ATAR",
  },
  {
    quote: "What I really liked about the classes was that they were structured, organised and complemented by a myriad of practice prompts and resources. Classes delved really deep into the text and presented ideas which were seldom discussed elsewhere. This helped me craft nuanced essays which I was very happy with — especially important in light of the new study design.",
    name: "Elaine Zhang",
    role: "Raw 50 + Premier's Award English · Haileybury Dux 2024 · 99.95 ATAR",
  },
  {
    quote: "KM Education is a most excellent teacher — very enthusiastic about teaching maths and knows everything there is to know about both Methods and Specialist. Their resources and support services are extremely useful, as well as the UDFs Krishav coded himself which saved me so much time in my exams. What I found different was the focus on realistic exam scenarios — not overly difficult questions beyond VCE level that aren't useful for the real exam.",
    name: "Dan Ngo",
    role: "99.7 ATAR · Raw 44 Methods · Raw 40 Specialist · PEGS 2025",
  },
  {
    quote: "I found that I could gain better mastery of concepts through appreciating the nuances between similar question types, rather than spending my time sporadically working through different materials. By the time exams rolled around, I was just consolidating techniques I had practised all year. I was able to achieve a dream study score I never thought was possible — but which the tutors at KM Education always believed I could accomplish.",
    name: "Ethan Wu",
    role: "99.80 ATAR · Raw 48 Specialist · Raw 47 Methods · MHS 2025",
  },
  {
    quote: "Before joining, I had struggled with difficult questions I had never seen before, particularly since my school liked to put curveball questions on SACs. The biggest help was KM Education's knowledge of the full breadth of question types that can appear, alongside ensuring intuitive understanding of all concepts. The step-by-step approaches made solving difficult questions much more manageable.",
    name: "Jian Shi",
    role: "Raw 46 Methods · Raw 41 Specialist · MHS",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
            Student Results
          </span>
          <h2 className="text-4xl lg:text-5xl font-extralight mt-4">
            Real results — 99.95 ATAR & Raw 50 achievements.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {videos.map((v) => (
            <div key={v.src} className="space-y-4">
              <div className="relative aspect-video bg-ink overflow-hidden">
                <iframe
                  src={v.src}
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
              <div>
                <p className="text-sm font-light">{v.name}</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand mt-1">
                  {v.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group">
          <div className="flex gap-6 animate-marquee w-max group-hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="p-8 border border-ink/5 bg-sand/30 space-y-5 flex flex-col w-[380px] shrink-0">
                <div className="flex gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-3.5 fill-brand" />
                  ))}
                </div>
                <p className="text-sm font-light text-ink/80 italic leading-relaxed flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-light">{t.name}</p>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
