import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Eye } from "lucide-react";
import { useState } from "react";

interface Painting {
  id: number;
  title: string;
  category: string;
  price: string;
  size: string;
  image: string;
  available: boolean;
}

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const paintings: Painting[] = [
    {
      id: 1,
      title: "Sunset Dreams",
      category: "abstract",
      price: "$3,200",
      size: "36\" × 48\"",
      image: "https://images.unsplash.com/photo-1681235014294-588fea095706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwYXJ0fGVufDF8fHx8MTc2Mjg5MTAxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      available: true
    },
    {
      id: 2,
      title: "Mountain Serenity",
      category: "landscape",
      price: "$2,800",
      size: "30\" × 40\"",
      image: "https://images.unsplash.com/photo-1684410008411-6ccac995726d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwYWludGluZyUyMGNhbnZhc3xlbnwxfHx8fDE3NjI4OTMwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      available: true
    },
    {
      id: 3,
      title: "Vibrant Energy",
      category: "contemporary",
      price: "$4,500",
      size: "48\" × 60\"",
      image: "https://images.unsplash.com/photo-1590968802291-f1e1f86cde34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMG1vZGVybiUyMGFydHxlbnwxfHx8fDE3NjI4Njk0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      available: true
    },
    {
      id: 4,
      title: "Silent Contemplation",
      category: "portrait",
      price: "$3,800",
      size: "24\" × 36\"",
      image: "https://images.unsplash.com/photo-1583934555852-537536e49071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBhaW50aW5nJTIwYXJ0d29ya3xlbnwxfHx8fDE3NjI4OTMwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      available: false
    },
    {
      id: 5,
      title: "Gallery Collection",
      category: "contemporary",
      price: "$5,200",
      size: "40\" × 50\"",
      image: "https://images.unsplash.com/photo-1647792845543-a8032c59cbdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc2Mjc5NDQwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      available: true
    },
    {
      id: 6,
      title: "Abstract Expression",
      category: "abstract",
      price: "$2,900",
      size: "30\" × 30\"",
      image: "https://images.unsplash.com/photo-1681235014294-588fea095706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwYXJ0fGVufDF8fHx8MTc2Mjg5MTAxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      available: true
    }
  ];

  const categories = [
    { id: "all", label: "All Works" },
    { id: "abstract", label: "Abstract" },
    { id: "landscape", label: "Landscape" },
    { id: "portrait", label: "Portrait" },
    { id: "contemporary", label: "Contemporary" }
  ];

  const filteredPaintings = selectedCategory === "all" 
    ? paintings 
    : paintings.filter(p => p.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-[#FAE8E3]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl text-[#0A2E35] mb-6">Featured Gallery</h2>
          <div className="w-24 h-1 bg-[#C9A961] mx-auto mb-8"></div>
          <p className="text-xl text-[#2D5A63]">
            Explore a curated selection of original paintings, each piece telling its own unique story
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? "bg-[#C9A961] hover:bg-[#D4B574] text-white" : "border-[#2D5A63] text-[#2D5A63] hover:bg-[#F0C8C0]"}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPaintings.map((painting) => (
            <div 
              key={painting.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <ImageWithFallback
                  src={painting.image}
                  alt={painting.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {!painting.available && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-red-500 text-white">
                      Sold
                    </Badge>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-12 w-12" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl text-[#0A2E35]">{painting.title}</h3>
                  <Badge variant="outline" className="capitalize border-[#C9A961] text-[#C9A961]">
                    {painting.category}
                  </Badge>
                </div>
                
                <p className="text-[#2D5A63] mb-4">{painting.size}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl text-[#C9A961]">{painting.price}</span>
                  {painting.available && (
                    <Button 
                      variant="outline"
                      className="border-[#2D5A63] text-[#2D5A63] hover:bg-[#F0C8C0]"
                      onClick={() => {
                        const element = document.getElementById("order");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Inquire
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-[#2D5A63] mb-6">
            All paintings are original works, signed by the artist and come with a certificate of authenticity
          </p>
        </div>
      </div>
    </section>
  );
}
