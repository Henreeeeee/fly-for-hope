import { Card } from "@/components/ui/card";
import aboutImage from "@assets/generated_images/Student_building_paramotor_414665f1.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-about-title">
              About My Mission
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p data-testid="text-about-paragraph-1">
                This isn’t just me trying to build a paramotor, but rather, pushing myself way past my comfort zone, learning as I go, and turning that journey into something bigger. omething that can help kids at VCU Children’s Hospital who are fighting battles way tougher than anything I’m facing.
              </p>
              <p data-testid="text-about-paragraph-2">
                As an engineering student, I've always been fascinated by aviation and the freedom of flight. Building a paramotor from the ground up is my ultimate personal challenge—combining my passion for engineering, my love of adventure, and my desire to give back.
              </p>
              <Card className="border-l-4 border-l-primary bg-accent/50 p-6">
                <p className="text-xl font-semibold italic text-foreground" data-testid="text-about-quote">
                  "Every hour I spend building, every challenge I overcome, every moment I'll spend in the sky—it's all dedicated to bringing hope to kids at VCU Children's Hospital."
                </p>
              </Card>
              <p data-testid="text-about-paragraph-3">

              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={aboutImage}
              alt="Student working on paramotor build"
              className="rounded-md w-full h-auto"
              data-testid="img-about"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
