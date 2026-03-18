import { Hero } from "@/components/landing/hero";
import { ServicesCarousel } from "@/components/landing/services-carousel";
import { CareTabs } from "@/components/landing/care-tabs";
import { Professionals } from "@/components/landing/professionals";
import { Testimonials } from "@/components/landing/testimonials";
import { B2BSection } from "@/components/landing/b2b-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1F292E]">
      <Hero />
      <ServicesCarousel />
      <CareTabs />
      <Professionals />
      <Testimonials />
      <B2BSection />
      <Footer />
    </main>
  );
}
