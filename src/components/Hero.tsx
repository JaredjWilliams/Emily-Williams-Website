import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../ImageWithFallback";
import headshotImage from "../assets/Emily/headshot_one.jpg";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAE8E3] via-white to-[#F5D5CE]">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#E8B8B0] text-[#0A2E35] rounded-full">
              Fine Art Collection
            </div>
            
            <h1 className="text-6xl lg:text-7xl text-[#0A2E35] leading-tight">
              Original Paintings by{" "}
              <span className="text-[#C9A961]">Emily Wiliams Testing</span>
            </h1>
            
            <p className="text-xl text-[#2D5A63] max-w-xl">
              Discover unique contemporary art pieces that bring color, emotion, and 
              sophistication to your space. Each painting is an original work of art, 
              handcrafted with passion and precision.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-[#C9A961] hover:bg-[#D4B574] text-white"
                onClick={() => scrollToSection("order")}
              >
                Commission a Painting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#2D5A63] text-[#2D5A63] hover:bg-[#F0C8C0]"
                onClick={() => scrollToSection("gallery")}
              >
                View Gallery
              </Button>
            </div>
            
            <div className="flex gap-8 pt-8 border-t border-[#E8B8B0]">
              <div>
                <div className="text-3xl text-[#C9A961]">200+</div>
                <div className="text-[#2D5A63]">WatercolorPaintings Created</div>
              </div>
              <div>
                <div className="text-3xl text-[#C9A961]">10+</div>
                <div className="text-[#2D5A63]">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl text-[#C9A961]">200+</div>
                <div className="text-[#2D5A63]">Happy Collectors</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#C9A961] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 right-4 w-72 h-72 bg-[#E8B8B0] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-4 left-20 w-72 h-72 bg-[#F0C8C0] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            <div className="relative">
              <ImageWithFallback
                src={headshotImage}
                alt="Emily Williams in her studio"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

