import type { Metadata } from "next";
import HeroCarousel from "@/components/HeroCarousel";
import ProblemSection from "@/components/ProblemSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CloudSection from "@/components/CloudSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Spicebridge | Expert IT Services & Consulting Nigeria",
  description:
    "Your trusted technology partner. Managed IT services, cloud solutions, cyber security, and software development. Get a free quote for IT services in Lagos, Nigeria.",
  openGraph: {
    title: "Spicebridge | Expert IT Services & Consulting Nigeria",
    description:
      "Your trusted technology partner. Managed IT services, cloud solutions, cyber security in Nigeria.",
    url: "/",
  },
};

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
