import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Paramotor_flying_through_sky_48d2bc57.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" data-testid="text-hero-title">
          Fly For Hope
        </h1>
        <p className="text-2xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent leading-relaxed" data-testid="text-mission-statement">
          One student. One paramotor. One mission:<br />
          lift spirits + raise hope.
        </p>
        <p className="text-lg md:text-xl mb-12 text-blue-100 max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
          Follow my journey as I build and fly a paramotor to raise awareness and donations for the Children's Hospital of Richmond at VCU.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("timeline")}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-semibold text-base"
            data-testid="button-track-build"
          >
            Track the Build
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("donate")}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-white/30 text-white font-semibold text-base"
            data-testid="button-support-mission"
          >
            Support the Mission
          </Button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce hover-elevate p-2 rounded-full"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
