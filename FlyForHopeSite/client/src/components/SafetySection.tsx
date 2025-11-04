import { Card } from "@/components/ui/card";
import { ShieldCheck, GraduationCap, Headphones, Users } from "lucide-react";

export default function SafetySection() {
  const safetyItems = [
    {
      icon: ShieldCheck,
      title: "FAA Compliance",
      description: "Following all Federal Aviation Administration regulations for ultralight paramotors and adhering to Part 103 requirements.",
    },
    {
      icon: GraduationCap,
      title: "Professional Training",
      description: "Completing certified paramotor training courses with experienced instructors, including ground school and supervised flights.",
    },
    {
      icon: Headphones,
      title: "Safety Equipment",
      description: "Using professional-grade safety gear including helmet, reserve parachute, protective clothing, and emergency communication devices.",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Working closely with experienced paramotor pilots and aviation mentors who provide guidance throughout the entire process.",
    },
  ];

  return (
    <section id="safety" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-safety-title">
            Safety & Training
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-safety-subtitle">
            This project is built on a foundation of safety, responsibility, and proper training. Every step is taken with care and expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-6 text-center hover-elevate" data-testid={`card-safety-${index}`}>
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" data-testid={`icon-safety-${index}`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3" data-testid={`text-safety-item-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-safety-item-description-${index}`}>
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
