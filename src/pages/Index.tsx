import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExpertiseCards from "@/components/ExpertiseCards";
import ZonesIntervention from "@/components/ZonesIntervention";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ExpertiseCards />
      <ZonesIntervention />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
