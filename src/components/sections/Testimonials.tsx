import { Play, Star } from "lucide-react";
import { Placeholder } from "./Placeholder";

const videos = [
  { quote: "[Short parent or student quote placeholder.]", name: "[Name Placeholder], Parent" },
  { quote: "[Short parent or student quote placeholder.]", name: "[Name Placeholder], Year 12" },
  { quote: "[Short parent or student quote placeholder.]", name: "[Name Placeholder], Year 10" },
];

const written = [
  { quote: "[Longer written testimonial placeholder describing the experience and the change it created.]", name: "[Name Placeholder]", role: "Parent of Year 11 Student" },
  { quote: "[Longer written testimonial placeholder describing the experience and the change it created.]", name: "[Name Placeholder]", role: "Year 9 Student" },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-extralight mt-4">In their own words.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {videos.map((v, i) => (
            <div key={i} className="space-y-5">
              <div className="aspect-video relative group cursor-pointer">
                <Placeholder label="Video testimonial · placeholder">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-14 rounded-full bg-paper/90 flex items-center justify-center text-brand group-hover:scale-110 transition-transform shadow-sm">
                      <Play className="size-5 ml-0.5 fill-brand" />
                    </div>
                  </div>
                </Placeholder>
              </div>
              <p className="text-sm italic font-light text-ink/70">&ldquo;{v.quote}&rdquo;</p>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink/40">
                — {v.name}
              </p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {written.map((w, i) => (
            <div key={i} className="p-10 border border-ink/5 bg-sand/30 space-y-6">
              <div className="flex gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="size-4 fill-brand" />
                ))}
              </div>
              <p className="text-lg font-light text-ink/80 italic">&ldquo;{w.quote}&rdquo;</p>
              <div>
                <p className="text-sm font-light">{w.name}</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink/40 mt-1">
                  {w.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
