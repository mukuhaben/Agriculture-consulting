import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import BlogPreview from "@/components/BlogPreview";
import BookingCTA from "@/components/BookingCTA";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      <Hero />

      <div className="max-w-7xl mx-auto px-8 space-y-32 py-24">
        <Services />
        <Portfolio />
        <CaseStudies />
        <BlogPreview />
      </div>

      <BookingCTA />

    </main>
  );
}