import HeroCarousel from "@/components/HeroCarousel";
import ProblemSection from "@/components/ProblemSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CloudSection from "@/components/CloudSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ProblemSection />
      <AboutSection />
      <ServicesSection />
      <CloudSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <QuoteForm />
    </>
  );
}
