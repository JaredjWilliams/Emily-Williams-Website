import { MessageCircle, Palette, Truck, Sparkles, ArrowRight } from "lucide-react";
import { scrollToAnchorId } from "../utils/scrollToAnchor";
import { Button } from "../ui/button";
import styles from "./TrustSection.module.scss";

const steps = [
  {
    icon: MessageCircle,
    title: "Tell me your idea",
    description:
      "Share reference photos, size, and where the piece will live. I reply within 24 hours with questions and a ballpark timeline.",
  },
  {
    icon: Palette,
    title: "Refine the commission",
    description:
      "We align on composition, palette, and framing. You’ll know what to expect before brush meets paper.",
  },
  {
    icon: Sparkles,
    title: "I paint your original",
    description:
      "Your painting is created by hand in watercolor with the same care as every collector piece in my portfolio.",
  },
  {
    icon: Truck,
    title: "Safe delivery",
    description:
      "Finished work is packaged securely and shipped insured, or arranged for local pickup when that’s easier.",
  },
];

const faqs = [
  {
    q: "How long does a commission take?",
    a: "Most originals take 4–8 weeks depending on size, detail, and my current queue. Rush timing can sometimes be arranged—ask in your inquiry.",
  },
  {
    q: "Do you require a deposit?",
    a: "Yes. A deposit reserves your spot on the calendar and covers initial materials. The balance is due before shipping or pickup.",
  },
  {
    q: "What if I need changes?",
    a: "We finalize the concept up front so surprises are rare. Minor adjustments may be possible at certain stages; major changes may affect timeline and price.",
  },
  {
    q: "Can you match my room’s colors?",
    a: "Absolutely. Send paint swatches, fabric samples, or photos in natural light and I’ll design a palette that feels at home in your space.",
  },
];

const testimonials = [
  {
    quote:
      "Emily captured our home so beautifully—the watercolor feels alive. Communication was clear from start to finish.",
    name: "Sarah M.",
    detail: "House portrait, Indiana",
  },
  {
    quote:
      "We gave her a tricky reference and she still nailed the light. It’s the first thing guests comment on in our living room.",
    name: "James & Michelle K.",
    detail: "Custom home commission, Ohio",
  },
];

export function TrustSection() {
  return (
    <section id="how-it-works" className={styles.trust} aria-labelledby="how-it-works-heading">
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 id="how-it-works-heading" className={styles.title}>
            How commissioning works
          </h2>
          <div className={styles.divider} />
          <p className={styles.lead}>
            A simple, transparent path from your first message to an original on your wall.
          </p>
        </div>

        <ol className={styles.steps}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {index + 1}
                </span>
                <Icon className={styles.stepIcon} aria-hidden />
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.description}</p>
              </li>
            );
          })}
        </ol>

        <div className={styles.testimonials}>
          <h3 className={styles.subheading}>What collectors say</h3>
          <div className={styles.quoteGrid}>
            {testimonials.map((t) => (
              <figure key={t.name} className={styles.quoteCard}>
                <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className={styles.attribution}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.detail}>{t.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className={styles.faq}>
          <h3 className={styles.subheading}>Common questions</h3>
          <div className={styles.faqList}>
            {faqs.map((item) => (
              <details key={item.q} className={styles.details}>
                <summary className={styles.summary}>{item.q}</summary>
                <p className={styles.answer}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className={styles.bottomCta}>
          <Button
            type="button"
            size="lg"
            className={styles.ctaButton}
            onClick={() => {
              scrollToAnchorId("order", { behavior: "smooth" });
            }}
          >
            Request a commission
            <ArrowRight className={styles.ctaIcon} aria-hidden />
          </Button>
        </div>
      </div>
    </section>
  );
}
