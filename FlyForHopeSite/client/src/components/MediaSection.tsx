import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import paramotorWing from "@assets/generated_images/Paramotor_wing_on_grass_79e1a86a.png";
import safetyGear from "@assets/generated_images/Paramotor_safety_equipment_c14e657c.png";
import buildProgress from "@assets/generated_images/Student_building_paramotor_414665f1.png";

interface MediaItem {
  type: "photo" | "video" | "blog";
  title: string;
  date: string;
  image: string;
  category: string;
}

export default function MediaSection() {
  const [filter, setFilter] = useState<"all" | "photo" | "video" | "blog">("all");

  const mediaItems: MediaItem[] = [
    {
      type: "photo",
      title: "Paramotor Wing Inspection",
      date: "March 15, 2025",
      image: paramotorWing,
      category: "Build Progress",
    },
    {
      type: "photo",
      title: "Safety Equipment Overview",
      date: "March 10, 2025",
      image: safetyGear,
      category: "Safety Prep",
    },
    {
      type: "blog",
      title: "Week 8: First Major Assembly",
      date: "March 8, 2025",
      image: buildProgress,
      category: "Build Log",
    },
    {
      type: "photo",
      title: "Workshop Setup Complete",
      date: "February 28, 2025",
      image: buildProgress,
      category: "Build Progress",
    },
    {
      type: "video",
      title: "Engine Testing Day 1",
      date: "March 12, 2025",
      image: paramotorWing,
      category: "Testing",
    },
    {
      type: "blog",
      title: "Why I'm Doing This",
      date: "February 20, 2025",
      image: safetyGear,
      category: "Personal Story",
    },
  ];

  const filteredItems = filter === "all" 
    ? mediaItems 
    : mediaItems.filter(item => item.type === filter);

  const filterButtons: Array<{ label: string; value: typeof filter }> = [
    { label: "All", value: "all" },
    { label: "Photos", value: "photo" },
    { label: "Videos", value: "video" },
    { label: "Blog", value: "blog" },
  ];

  return (
    <section id="media" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-media-title">
            Media & Updates
          </h2>
          <p className="text-lg text-muted-foreground mb-8" data-testid="text-media-subtitle">
            Follow the build process through photos, videos, and blog updates
          </p>

          <div className="flex justify-center gap-2 flex-wrap">
            {filterButtons.map((btn) => (
              <Badge
                key={btn.value}
                variant={filter === btn.value ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 hover-elevate active-elevate-2"
                onClick={() => setFilter(btn.value)}
                data-testid={`button-filter-${btn.value}`}
              >
                {btn.label}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer group"
              data-testid={`card-media-${index}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-media-${index}`}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Badge variant="default" data-testid={`badge-type-${index}`}>
                    {item.type === "photo" ? "Photo" : item.type === "video" ? "Video" : "Blog Post"}
                  </Badge>
                </div>
              </div>
              <div className="p-4">
                <Badge variant="outline" className="mb-2" data-testid={`badge-category-${index}`}>
                  {item.category}
                </Badge>
                <h3 className="font-semibold mb-1" data-testid={`text-media-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-media-date-${index}`}>
                  {item.date}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
