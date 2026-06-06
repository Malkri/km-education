import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Programs } from "@/components/sections/Programs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { Teachers } from "@/components/sections/Teachers";
import { BookingForm } from "@/components/sections/BookingForm";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-paper text-ink min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <Programs />
      <HowItWorks />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <Gallery />
      <Teachers />
      <BookingForm />
      <FAQ />
      <Footer />
    </main>
  );
}
