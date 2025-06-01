import { HeroSection } from "@/components/hero-section";
import { OurTeam } from "@/components/our-team";
import { OurServices } from "@/components/our-services";
import { Pricing } from "@/components/pricing";
import { ExtrasPayments } from "@/components/extras-payments";
import { ClientTestimonials } from "@/components/client-testimonials";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full h-full container mx-auto">
      <div className="flex flex-col gap-12 pt-4">
        <HeroSection
          title="Your sound deserves more than a preset."
          subtitle="Professional Mixing, Mastering, and Custom Beat Production — 100% Remote."
        />
        <div id="team" className="scroll-mt-16">
          <OurTeam />
        </div>
        <div id="services" className="scroll-mt-16">
          <OurServices />
        </div>
        <div id="pricing" className="scroll-mt-16">
          <Pricing />
        </div>
        <div id="extras" className="scroll-mt-16">
          <ExtrasPayments />
        </div>
        <div id="testimonials" className="scroll-mt-16">
          <ClientTestimonials />
        </div>
        <div id="contact" className="scroll-mt-16">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
