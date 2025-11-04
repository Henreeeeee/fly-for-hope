import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import DonateSection from "@/components/DonateSection";
import MediaSection from "@/components/MediaSection";
import SafetySection from "@/components/SafetySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <DonateSection />
        <SafetySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
