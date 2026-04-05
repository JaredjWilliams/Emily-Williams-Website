import { useRef, useState, useEffect, useLayoutEffect, useCallback, type ComponentProps } from "react";
import { ArrowRight } from "lucide-react";
import { scrollToAnchorId } from "../utils/scrollToAnchor";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../ImageWithFallback";
import headshotImage from "../assets/Emily/headshot_one.jpg";
import styles from "./Hero.module.scss";

/** Sync with Header (--sticky-cta-top) + measured sticky CTA bar when visible */
function publishAnchorScrollPadding(stickyCtaVisible: boolean, stickyBarEl: HTMLElement | null) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--sticky-cta-top").trim();
  let stickyTop = parseFloat(raw);
  if (Number.isNaN(stickyTop)) stickyTop = 0;
  const gapPx = 8;
  const headerBottom = Math.max(0, stickyTop - gapPx);
  let padding = headerBottom;
  if (stickyCtaVisible && stickyBarEl) {
    padding = stickyTop + stickyBarEl.offsetHeight;
  }
  const minPx = 48;
  document.documentElement.style.setProperty(
    "--anchor-scroll-padding",
    `${Math.max(minPx, Math.ceil(padding) + 6)}px`
  );
}

export function Hero() {
  const primaryCtaRef = useRef<HTMLDivElement>(null);
  const stickyBarRef = useRef<HTMLDivElement>(null);
  const [stickyCtaVisible, setStickyCtaVisible] = useState(false);

  const syncAnchorPadding = useCallback(() => {
    publishAnchorScrollPadding(stickyCtaVisible, stickyBarRef.current);
  }, [stickyCtaVisible]);

  useLayoutEffect(() => {
    syncAnchorPadding();
    const onLayout = () => syncAnchorPadding();
    window.addEventListener("resize", onLayout);
    window.addEventListener("scroll", onLayout, { passive: true });
    window.addEventListener("site:sticky-layout", onLayout);
    const bar = stickyBarRef.current;
    const ro = new ResizeObserver(onLayout);
    if (bar) ro.observe(bar);
    return () => {
      window.removeEventListener("resize", onLayout);
      window.removeEventListener("scroll", onLayout);
      window.removeEventListener("site:sticky-layout", onLayout);
      ro.disconnect();
    };
  }, [syncAnchorPadding]);

  const scrollToSection = (id: string) => {
    scrollToAnchorId(id, { behavior: "smooth" });
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
        ref={stickyBarRef}
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
              <h1 className={styles.heading}>
                Original Paintings by <span className={styles.highlight}>Emily Lex</span>
              </h1>

              <p className={styles.description}>Handcrafted originals—one-of-a-kind paintings made slowly, with care, for spaces that
              deserve something personal and lasting.</p>

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
                  <div className={styles.label}>Happy Customers</div>
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
