import { scrollToAnchorId } from "../utils/scrollToAnchor";
import { ImageWithFallback } from "../ImageWithFallback";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Eye } from "lucide-react";
import { useState, useEffect } from "react";
import detroitHome from "../assets/homes/detroit_home.jpg";
import homeOne from "../assets/homes/home_1.jpg";
import homeTwo from "../assets/homes/home_2.jpg";
import homeThree from "../assets/homes/home_3.jpg";
import homeFour from "../assets/homes/home_4.jpg";
import styles from "./Gallery.module.scss";

interface Painting {
  id: number;
  title: string;
  category: string;
  /** Subject filter for nav (homes / pets / campuses) */
  subject: "home" | "pets" | "campuses";
  price: string;
  size: string;
  image: string;
  available: boolean;
}

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const onSetCategory = (e: Event) => {
      const detail = (e as CustomEvent<{ category: string }>).detail;
      if (detail?.category) setSelectedCategory(detail.category);
    };
    window.addEventListener("gallery:setCategory", onSetCategory);
    return () => window.removeEventListener("gallery:setCategory", onSetCategory);
  }, []);

  const paintings: Painting[] = [
    {
      id: 1,
      title: "Detroit Home",
      category: "abstract",
      subject: "home",
      price: "$3,200",
      size: "36\" × 48\"",
      image: detroitHome,
      available: true
    },
    {
      id: 3,
      title: "Home Painting",
      category: "contemporary",
      subject: "home",
      price: "$4,500",
      size: "48\" × 60\"",
      image: homeOne,
      available: true
    },
    {
      id: 4,
      title: "Home Painting",
      category: "portrait",
      subject: "home",
      price: "$3,800",
      size: "24\" × 36\"",
      image: homeTwo,
      available: false
    },
    {
      id: 5,
      title: "Home Painting",
      category: "contemporary",
      subject: "home",
      price: "$5,200",
      size: "40\" × 50\"",
      image: homeThree,
      available: true
    },
    {
      id: 6,
      title: "Home Painting",
      category: "Home Painting",
      subject: "home",
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

  const filteredPaintings =
    selectedCategory === "all"
      ? paintings
      : paintings.filter((p) => p.subject === selectedCategory);

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Gallery</h2>
          <div className={styles.divider}></div>
          <p className={styles.description}>
            Explore a curated selection of original paintings, each piece telling its own unique story
          </p>
        </div>

        <div className={styles.filters}>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? styles.active : styles.inactive}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className={styles.paintingsGrid}>
          {filteredPaintings.length === 0 && (
            <div className={styles.empty}>
              <p className={styles.emptyText}>
                Nothing in this category yet. View all works or start a custom commission.
              </p>
              <Button
                type="button"
                className={styles.emptyButton}
                onClick={() => setSelectedCategory("all")}
              >
                View all works
              </Button>
            </div>
          )}
          {filteredPaintings.map((painting) => (
            <div 
              key={painting.id}
              className={styles.paintingCard}
            >
              <div className={styles.imageContainer}>
                <ImageWithFallback
                  src={painting.image}
                  alt={painting.title}
                  className={styles.image}
                />
                
                {!painting.available && (
                  <div className={styles.soldBadge}>
                    <Badge variant="secondary" className={styles.soldBadgeInner}>
                      Sold
                    </Badge>
                  </div>
                )}
                
                <div className={styles.overlay}>
                  <Eye className={styles.eyeIcon} />
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{painting.title}</h3>
                  <Badge variant="outline" className={styles.categoryBadge}>
                    {painting.category}
                  </Badge>
                </div>
                
                <p className={styles.size}>{painting.size}</p>
                
                <div className={styles.cardFooter}>
                  <span className={styles.price}>{painting.price}</span>
                  {painting.available && (
                    <Button 
                      variant="outline"
                      className={styles.inquireButton}
                      onClick={() => {
                        scrollToAnchorId("order", { behavior: "smooth" });
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
      </div>
    </section>
  );
}
