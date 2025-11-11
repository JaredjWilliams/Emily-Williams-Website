import { Award, Palette, Heart, Users } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Palette,
      title: "Unique Style",
      description: "A distinctive blend of contemporary and abstract expressionism that captivates viewers."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized internationally with multiple awards and exhibitions across Europe and America."
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description: "Every brushstroke is infused with emotion, creating pieces that resonate deeply with collectors."
    },
    {
      icon: Users,
      title: "Collector Favorite",
      description: "Trusted by art collectors worldwide for authentic, museum-quality original paintings."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl text-[#0A2E35] mb-6">About the Artist</h2>
          <div className="w-24 h-1 bg-[#C9A961] mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl text-[#0A2E35]">Elena Rodriguez</h3>
            
            <p className="text-lg text-[#2D5A63]">
              Born in Barcelona in 1985, Elena Rodriguez discovered her passion for painting 
              at an early age. After graduating from the prestigious Royal Academy of Fine Arts, 
              she developed a unique style that bridges the gap between classical techniques 
              and contemporary expression.
            </p>
            
            <p className="text-lg text-[#2D5A63]">
              Her work has been featured in galleries across Madrid, Paris, New York, and Tokyo. 
              Elena's paintings are characterized by bold color choices, dynamic compositions, 
              and an emotional depth that invites viewers to explore their own interpretations.
            </p>
            
            <p className="text-lg text-[#2D5A63]">
              Currently based in her Barcelona studio, Elena continues to create commissioned 
              works for private collectors and institutions worldwide. Each painting is a unique 
              piece, signed and accompanied by a certificate of authenticity.
            </p>
            
            <div className="pt-6">
              <blockquote className="text-xl italic text-[#0A2E35] border-l-4 border-[#C9A961] pl-6">
                "Art is not what you see, but what you make others feel. My goal is to create 
                pieces that spark joy, contemplation, and wonder."
              </blockquote>
              <div className="mt-4 pl-6 text-[#2D5A63]">— Elena Rodriguez</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#FAE8E3] to-[#F5D5CE] p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <highlight.icon className="h-12 w-12 text-[#C9A961] mb-4" />
                <h4 className="text-xl text-[#0A2E35] mb-2">{highlight.title}</h4>
                <p className="text-[#2D5A63]">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-[#FAE8E3] rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-2xl text-[#0A2E35] mb-2">Education</h4>
              <p className="text-[#2D5A63]">Royal Academy of Fine Arts, Barcelona</p>
              <p className="text-[#2D5A63]">MFA in Contemporary Art</p>
            </div>
            <div>
              <h4 className="text-2xl text-[#0A2E35] mb-2">Exhibitions</h4>
              <p className="text-[#2D5A63]">50+ Solo Exhibitions</p>
              <p className="text-[#2D5A63]">100+ Group Exhibitions</p>
            </div>
            <div>
              <h4 className="text-2xl text-[#0A2E35] mb-2">Collections</h4>
              <p className="text-[#2D5A63]">Featured in 30+ Museums</p>
              <p className="text-[#2D5A63]">Private Collections Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
