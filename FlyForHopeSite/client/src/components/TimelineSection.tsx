import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Compass, Wrench, Hammer, GraduationCap, Plane, Heart } from "lucide-react";
import { useState } from "react";

interface TimelinePhase {
  title: string;
  description: string;
  status: "completed" | "in-progress" | "upcoming";
  icon: any;
}

export default function TimelineSection() {
  const [phases] = useState<TimelinePhase[]>([
    {
      title: "Designing the Paramotor",
      description: "Researching components, creating blueprints, and planning the build process with safety as the top priority.",
      status: "completed",
      icon: Compass,
    },
    {
      title: "Sourcing Parts",
      description: "Finding quality components, comparing suppliers, and securing materials within budget constraints.",
      status: "in-progress",
      icon: Wrench,
    },
    {
      title: "Building Phase",
      description: "Hands-on assembly, testing each component, documenting the process, and learning from every challenge.",
      status: "upcoming",
      icon: Hammer,
    },
    {
      title: "Training + Safety Prep",
      description: "Professional paramotor training, safety certifications, studying FAA regulations, and mastering flight techniques.",
      status: "upcoming",
      icon: GraduationCap,
    },
    {
      title: "Test Flights",
      description: "Controlled test flights with experienced mentors, equipment validation, and building flight hours safely.",
      status: "upcoming",
      icon: Plane,
    },
    {
      title: "Final Charity Flight",
      description: "The culmination of the journey—a symbolic flight to celebrate the mission and honor the kids at VCU Children's Hospital.",
      status: "upcoming",
      icon: Heart,
    },
  ]);

  const completedCount = phases.filter(p => p.status === "completed").length;
  const progressPercentage = Math.round((completedCount / phases.length) * 100);

  return (
    <section id="timeline" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-timeline-title">
            Project Progress
          </h2>
          <p className="text-lg text-muted-foreground mb-8" data-testid="text-timeline-subtitle">
            Follow every step of the journey from concept to flight
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm font-bold text-primary" data-testid="text-progress-percentage">
                {progressPercentage}%
              </span>
            </div>
            <div className="h-3 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div key={index} className="relative">
                {index < phases.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border hidden md:block" />
                )}
                <Card className="p-6 hover-elevate">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          phase.status === "completed"
                            ? "bg-primary text-primary-foreground"
                            : phase.status === "in-progress"
                            ? "bg-accent text-accent-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                        data-testid={`icon-phase-${index}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl font-semibold" data-testid={`text-phase-title-${index}`}>
                          {phase.title}
                        </h3>
                        <Badge
                          variant={
                            phase.status === "completed"
                              ? "default"
                              : phase.status === "in-progress"
                              ? "secondary"
                              : "outline"
                          }
                          className="flex items-center gap-1"
                          data-testid={`badge-status-${index}`}
                        >
                          {phase.status === "completed" ? (
                            <CheckCircle2 className="h-3 w-3" />
                          ) : (
                            <Circle className="h-3 w-3" />
                          )}
                          {phase.status === "completed"
                            ? "Completed"
                            : phase.status === "in-progress"
                            ? "In Progress"
                            : "Upcoming"}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed" data-testid={`text-phase-description-${index}`}>
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
