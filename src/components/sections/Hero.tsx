import Image from "next/image";

export function Hero() {
  return (
    <header id="top" className="min-h-[88vh] grid grid-cols-1 lg:grid-cols-12 border-b border-ink/5">
      <div className="lg:col-span-7 flex flex-col justify-center p-8 lg:p-20">
        <h1 className="text-5xl lg:text-7xl font-extralight leading-[1.05] tracking-tight text-balance mb-10 max-w-[18ch]">
          Melbourne VCE Tutoring.{" "}
          <span className="italic text-brand">
            Helping students study smarter, build confidence, and maximise their ATAR.
          </span>
        </h1>
        <p className="text-base lg:text-lg font-light text-ink/60 max-w-xl mb-10">
          We help high-performing students achieve elite results in VCE English, Methods, and
          Specialist Maths.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#book"
            className="bg-brand text-paper px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-light hover:bg-ink transition-colors"
          >
            Book a Free Trial
          </a>
          <a
            href="#programs"
            className="border border-ink/15 px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-light hover:bg-sand transition-colors"
          >
            View Our Programs
          </a>
        </div>
      </div>
      <div className="lg:col-span-5 flex items-center justify-center min-h-[400px] lg:min-h-0 p-8">
        <div className="relative w-full h-full">
          <Image
            src="/Krishav's Premier's Award Photo.jpg"
            alt="Student achievement"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </header>
  );
}
