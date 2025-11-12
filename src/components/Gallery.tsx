import { ImageWithFallback } from "../ImageWithFallback";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Eye } from "lucide-react";
import { useState } from "react";
import detroitHome from "../assets/homes/detroit_home.jpg";
import homeOne from "../assets/homes/home_1.jpg";
import homeTwo from "../assets/homes/home_2.jpg";
import homeThree from "../assets/homes/home_3.jpg";
import homeFour from "../assets/homes/home_4.jpg";

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
      title: "Detroit Home",
      category: "abstract",
      price: "$3,200",
      size: "36\" × 48\"",
      image: detroitHome,
      available: true
    },
    {
      id: 3,
      title: "Home Painting",
      category: "contemporary",
      price: "$4,500",
      size: "48\" × 60\"",
      image: homeOne,
      available: true
    },
    {
      id: 4,
      title: "Home Painting",
      category: "portrait",
      price: "$3,800",
      size: "24\" × 36\"",
      image: homeTwo,
      available: false
    },
    {
      id: 5,
      title: "Home Painting",
      category: "contemporary",
      price: "$5,200",
      size: "40\" × 50\"",
      image: homeThree,
      available: true
    },
    {
      id: 6,
      title: "Home Painting",
      category: "Home Painting",
      price: "$2,900",
      size: "30\" × 30\"",
      image: homeFour,
      available: true
    }
  ];

  const categories = [
    { id: "all", label: "All Works" },
    { id: "home", label: "Home" },
    { id: "pets", label: "Pets" },
    { id: "campuses", label: "Campuses" },
  ];

  const filteredPaintings = selectedCategory === "all" 
    ? paintings 
    : paintings.filter(p => p.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-[#FAE8E3]">
      <div className="container mx-auto px-4 max-w-[1240px]">
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

