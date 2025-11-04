import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ExternalLink } from "lucide-react";

export default function DonateSection() {
  const handleDonateClick = () => {
    window.open("https://support.chfrichmond.org/site/Donation2?df_id=1920&mfc_pref=T&1920.donation=form1");
  };

  const handleSupportMeClick = () => {
    window.open("https://www.google.com", "_blank"); // Temporary personal support link
  };

  return (
    <section id="donate" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <Heart className="h-10 w-10 text-primary" data-testid="icon-heart" />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-donate-title">
          Help Bring Hope to Children
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground mb-12">
          <p data-testid="text-donate-paragraph-1">
            The Children's Hospital of Richmond at VCU provides life-saving care to thousands of children every year. These brave kids and their families face challenges that most of us can't imagine—long hospital stays, difficult treatments, and uncertain futures.
          </p>
          <Card className="bg-accent/50 p-8 border-none">
            <p className="text-xl font-semibold text-foreground italic" data-testid="text-donate-quote">
              "Every donation helps provide medical care, research, and support services that give these children a fighting chance and their families hope for tomorrow."
            </p>
          </Card>
          <p data-testid="text-donate-paragraph-2">
            While I'm building this paramotor and preparing to fly, I'm asking you to join me in supporting these incredible kids. Your contribution directly supports VCU Children's Hospital's mission to heal, comfort, and inspire hope.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={handleSupportMeClick}
            className="text-lg px-8 py-6 h-auto bg-green-600 hover:bg-green-700 text-white"
            data-testid="button-support-me-cta"
          >
            Support My Build
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>

          <Button
            size="lg"
            onClick={handleDonateClick}
            className="text-lg px-8 py-6 h-auto bg-gray-600 hover:bg-gray-700 text-white"
            data-testid="button-donate-cta"
          >
            <Heart className="mr-2 h-5 w-5" />
            Donate to VCU Children's Hospital
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-4" data-testid="text-donate-disclaimer">
          You'll be redirected to the official VCU Health donation page
        </p>
      </div>
    </section>
  );
}
