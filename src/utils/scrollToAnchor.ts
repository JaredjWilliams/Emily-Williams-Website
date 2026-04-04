const FALLBACK_PAD_PX = 120;

function readScrollPaddingPx(): number {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--anchor-scroll-padding")
    .trim();
  const parsed = parseFloat(raw);
  if (Number.isNaN(parsed) || parsed < 0) return FALLBACK_PAD_PX;
  return parsed;
}

export type ScrollToAnchorOptions = {
  behavior?: ScrollBehavior;
  /** Wait for layout (e.g. mobile menu close) before measuring */
  deferMs?: number;
};

/**
 * Places the target's top edge (padding box) `scroll-padding` px below the
 * viewport top, matching --anchor-scroll-padding. Prefer this over
 * scrollIntoView — scroll-padding is not applied consistently everywhere.
 */
export function scrollToAnchorId(id: string, options: ScrollToAnchorOptions = {}) {
  const { behavior = "smooth", deferMs = 0 } = options;
  const el = document.getElementById(id);
  if (!el) return;

  const apply = () => {
    const pad = readScrollPaddingPx();
    const y = el.getBoundingClientRect().top + window.scrollY - pad;
    const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({ top: Math.min(Math.max(0, y), maxY), behavior });
  };

  const run = () => {
    if (behavior === "smooth") {
      requestAnimationFrame(() => {
        requestAnimationFrame(apply);
      });
    } else {
      apply();
    }
  };

  if (deferMs > 0) {
    setTimeout(run, deferMs);
  } else {
    run();
  }
}
