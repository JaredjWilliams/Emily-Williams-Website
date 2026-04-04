import { scrollToAnchorId } from "../utils/scrollToAnchor";
import { ImageWithFallback } from "../ImageWithFallback";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
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

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const emblaOptions = useMemo(
    () =>
      ({
        align: "center",
        loop: false,
        containScroll: "keepSnaps",
      }) as const,
    [],
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  /** Only sync slide 0 / reInit when the filtered list actually changes — avoids snapping back after swipe */
  const lastSyncedPaintingIdsRef = useRef<string>("");

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
      size: '36" × 48"',
      image: detroitHome,
      available: true,
    },
    {
      id: 3,
      title: "Home Painting",
      category: "contemporary",
      subject: "home",
      price: "$4,500",
      size: '48" × 60"',
      image: homeOne,
      available: true,
    },
    {
      id: 4,
      title: "Home Painting",
      category: "portrait",
      subject: "home",
      price: "$3,800",
      size: '24" × 36"',
      image: homeTwo,
      available: false,
    },
    {
      id: 5,
      title: "Home Painting",
      category: "contemporary",
      subject: "home",
      price: "$5,200",
      size: '40" × 50"',
      image: homeThree,
      available: true,
    },
    {
      id: 6,
      title: "Home Painting",
      category: "Home Painting",
      subject: "home",
      price: "$2,900",
      size: '30" × 30"',
      image: homeFour,
      available: true,
    },
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

  const paintingIdsKey = filteredPaintings.map((p) => p.id).join(",");

  useEffect(() => {
    if (filteredPaintings.length === 0) {
      lastSyncedPaintingIdsRef.current = "";
      return;
    }
    if (!emblaApi) return;
    if (lastSyncedPaintingIdsRef.current === paintingIdsKey) return;

    const jump = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const key = paintingIdsKey;
    const id = requestAnimationFrame(() => {
      emblaApi.reInit();
      emblaApi.scrollTo(0, jump);
      lastSyncedPaintingIdsRef.current = key;
    });
    return () => cancelAnimationFrame(id);
  }, [emblaApi, paintingIdsKey, filteredPaintings.length]);

  useEffect(() => {
    if (!emblaApi) return;
    const api: EmblaCarouselType = emblaApi;
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev(prefersReducedMotion);
  }, [emblaApi, prefersReducedMotion]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext(prefersReducedMotion);
  }, [emblaApi, prefersReducedMotion]);

  const scrollToSnap = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index, prefersReducedMotion);
    },
    [emblaApi, prefersReducedMotion],
  );

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

        {filteredPaintings.length === 0 ? (
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
        ) : (
          <div
            className={styles.carouselRegion}
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured works"
          >
            <span className={styles.visuallyHidden} aria-live="polite">
              {filteredPaintings[selectedIndex]
                ? `Slide ${selectedIndex + 1} of ${filteredPaintings.length}: ${filteredPaintings[selectedIndex].title}`
                : ""}
            </span>
            <div className={styles.embla}>
              <div className={styles.emblaViewport} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                  {filteredPaintings.map((painting) => (
                    <div key={painting.id} className={styles.emblaSlide}>
                      <div className={styles.paintingCard}>
                        <div className={styles.imageContainer}>
                          <ImageWithFallback
                            src={painting.image}
                            alt={painting.title}
                            className={styles.image}
                            draggable={false}
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
                          <h3 className={styles.cardTitle}>{painting.title}</h3>

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
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.carouselControls}>
              <button
                type="button"
                className={styles.carouselIconButton}
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                aria-label="Previous slide"
              >
                <ChevronLeft className={styles.carouselIcon} aria-hidden />
              </button>
              <div className={styles.dots} role="group" aria-label="Choose slide to show">
                {filteredPaintings.map((painting, i) => (
                  <button
                    key={painting.id}
                    type="button"
                    className={styles.dot}
                    aria-label={`Go to slide ${i + 1}, ${painting.title}`}
                    aria-current={i === selectedIndex ? "true" : undefined}
                    onClick={() => scrollToSnap(i)}
                  />
                ))}
              </div>
              <button
                type="button"
                className={styles.carouselIconButton}
                onClick={scrollNext}
                disabled={!canScrollNext}
                aria-label="Next slide"
              >
                <ChevronRight className={styles.carouselIcon} aria-hidden />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
