import { Instagram, Youtube, Heart } from "lucide-react";
import { SiTiktok } from "react-icons/si"; // TikTok icon

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Progress", id: "timeline" },
    { label: "Safety", id: "safety" },
    { label: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", url: "https://instagram.com/placeholder" },
    { icon: Youtube, label: "YouTube", url: "https://youtube.com/@placeholder" },
    { icon: SiTiktok, label: "TikTok", url: "https://tiktok.com/@placeholder" },
  ];

  return (
    <footer className="bg-card border-t py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">
              Fly For Hope
            </h3>
            <p className="text-sm text-muted-foreground">
              One student. One paramotor. One mission to lift spirits and raise hope.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded-md"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Future Partners</h4>
            <p className="text-sm text-muted-foreground">
              Space reserved for sponsors who believe in this mission.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <button
                    key={i}
                    onClick={() => window.open(social.url, "_blank")}
                    className="w-9 h-9 bg-muted rounded-md flex items-center justify-center hover-elevate active-elevate-2"
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                );
              })}
            </div>
            <a
              href="mailto:rishavasingh4@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground mt-4 block"
            >
              rishavasingh4@gmail.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Fly For Hope. Built with <Heart className="h-4 w-4 text-primary" /> and passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
