import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Programs } from "@/components/sections/Programs";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";
import { Teachers } from "@/components/sections/Teachers";
import { BookingForm } from "@/components/sections/BookingForm";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-paper text-ink min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <Results />
      <Testimonials />
      <Teachers />
      <Programs />
      <BookingForm />
      <FAQ />
      <Footer />
    </main>
  );
}
