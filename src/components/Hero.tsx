import { useRef, useState, useEffect, type ComponentProps } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../ImageWithFallback";
import headshotImage from "../assets/Emily/headshot_one.jpg";
import styles from "./Hero.module.scss";

export function Hero() {
  const primaryCtaRef = useRef<HTMLDivElement>(null);
  const [stickyCtaVisible, setStickyCtaVisible] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const el = primaryCtaRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const scrolledPast = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        setStickyCtaVisible(scrolledPast);
      },
      { threshold: 0, rootMargin: "0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const commissionButton = (
    extraClassName?: string,
    extraProps?: Pick<ComponentProps<typeof Button>, "tabIndex">
  ) => (
    <Button
      type="button"
      size="lg"
      className={[styles.primaryButton, extraClassName].filter(Boolean).join(" ")}
      onClick={() => scrollToSection("order")}
      {...extraProps}
    >
      Commission a Painting
      <ArrowRight className={styles.buttonIcon} />
    </Button>
  );

  return (
    <>
      <div
        className={`${styles.stickyCtaBar} ${stickyCtaVisible ? styles.stickyCtaBarVisible : ""}`}
        role="region"
        aria-label="Commission a painting"
        aria-hidden={!stickyCtaVisible}
      >
        <div className={styles.stickyCtaInner}>
          {commissionButton(styles.stickyCtaButton, {
            tabIndex: stickyCtaVisible ? 0 : -1,
          })}
        </div>
      </div>

      <section id="top" className={styles.hero}>
        <div className={styles.gridPattern}></div>

        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <div className={styles.badge}>Fine Art Collection</div>

              <h1 className={styles.heading}>
                Original Paintings by <span className={styles.highlight}>Emily Lex</span>
              </h1>

              <p className={styles.description}>
                Discover unique contemporary art pieces that bring color, emotion, and sophistication
                to your space. Each painting is an original work of art, handcrafted with passion
                and precision.
              </p>

              <div className={styles.buttonGroup}>
                <div ref={primaryCtaRef} className={styles.primaryCtaObserve}>
                  {commissionButton()}
                </div>

                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className={styles.outlineButton}
                  onClick={() => scrollToSection("gallery")}
                >
                  View Gallery
                </Button>
              </div>

              <div className={styles.stats}>
                <div>
                  <div className={styles.number}>200+</div>
                  <div className={styles.label}>WatercolorPaintings Created</div>
                </div>
                <div>
                  <div className={styles.number}>10+</div>
                  <div className={styles.label}>Years Experience</div>
                </div>
                <div>
                  <div className={styles.number}>200+</div>
                  <div className={styles.label}>Happy Collectors</div>
                </div>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <div className={`${styles.blob} ${styles.blob1}`}></div>
              <div className={`${styles.blob} ${styles.blob2}`}></div>
              <div className={`${styles.blob} ${styles.blob3}`}></div>

              <div className={styles.imageWrapper}>
                <ImageWithFallback
                  src={headshotImage}
                  alt="Emily Williams in her studio"
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
