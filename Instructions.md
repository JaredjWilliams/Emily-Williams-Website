# Style System Instructions

## Overview

This document provides comprehensive guidance on using the universal style system for the Emily Williams Website. The system utilizes CSS custom properties (variables) and follows modern design system principles with a mobile-first responsive approach.

**Base Unit:** `10px = 1rem` (all measurements use rem units)

**Reference File:** `src/styles.css`

---

## Table of Contents

1. [Color System](#color-system)
2. [Responsive Breakpoints](#responsive-breakpoints)
3. [Spacing System](#spacing-system)
4. [Typography System](#typography-system)
5. [Shadow & Elevation](#shadow--elevation)
6. [Transitions & Animations](#transitions--animations)
7. [Border Radius](#border-radius)
8. [Z-Index System](#z-index-system)
9. [Usage Examples](#usage-examples)
10. [Best Practices](#best-practices)

---

## Color System

### FAB INDEX Palette

The color system is based on the FAB INDEX color palette with semantic naming:

#### Primary Colors (Pink Tones)
- `--color-primary`: `#E8B8B0` - Blush Pink (Main brand color)
- `--color-primary-light`: `#F0C8C0` - Lighter Blush Pink
- `--color-primary-lighter`: `#F5D5CE` - Pale Pink
- `--color-primary-lightest`: `#FAE8E3` - Very Pale Pink/Off-White

#### Secondary Colors (Gold Tones)
- `--color-secondary`: `#C9A961` - Muted Gold/Mustard Yellow
- `--color-secondary-light`: `#D4B574` - Lighter Gold

#### Accent Colors (Teal Tones)
- `--color-accent`: `#0A2E35` - Dark Teal/Deep Blue-Green
- `--color-accent-medium`: `#2D5A63` - Muted Teal

### Semantic Color Mappings

Use these semantic variables for consistent theming:

#### Backgrounds
```css
--color-background          /* Main page background */
--color-background-alt      /* Alternative background */
--color-surface             /* Card/surface background */
--color-surface-elevated    /* Elevated surface background */
```

#### Text
```css
--color-text                /* Primary text color */
--color-text-secondary      /* Secondary text color */
--color-text-light          /* Light text color */
```

#### Borders
```css
--color-border              /* Standard border */
--color-border-light        /* Light border */
```

#### Interactive States
```css
--color-hover               /* Hover state color */
--color-active              /* Active state color */
--color-focus               /* Focus state color */
```

### Usage Examples

```css
/* Direct color usage */
.my-component {
  background-color: var(--color-primary);
  color: var(--color-accent);
}

/* Semantic usage (recommended) */
.card {
  background-color: var(--color-surface);
  border: 0.1rem solid var(--color-border-light);
  color: var(--color-text);
}

/* Interactive states */
.button {
  background-color: var(--color-secondary);
  transition: var(--transition-background);
}

.button:hover {
  background-color: var(--color-hover);
}
```

---

## Responsive Breakpoints

### Breakpoint Values

- **Mobile:** `0px - 425px` (default, no media query needed)
- **Tablet:** `426px - 768px`
- **Desktop:** `769px and above`

### Breakpoint Variables

```css
--breakpoint-mobile-max: 425px;
--breakpoint-tablet-min: 426px;
--breakpoint-tablet-max: 768px;
--breakpoint-desktop-min: 769px;
```

### Usage in Media Queries

```css
/* Mobile-first approach (default styles for mobile) */
.component {
  padding: var(--spacing-base);
  font-size: var(--font-size-base);
}

/* Tablet styles */
@media (min-width: 426px) {
  .component {
    padding: var(--spacing-lg);
    font-size: var(--font-size-md);
  }
}

/* Desktop styles */
@media (min-width: 769px) {
  .component {
    padding: var(--spacing-xl);
    font-size: var(--font-size-xl);
  }
}

/* Alternative: Using max-width for mobile */
@media (max-width: 425px) {
  .component {
    /* Mobile-specific styles */
  }
}

/* Tablet only */
@media (min-width: 426px) and (max-width: 768px) {
  .component {
    /* Tablet-specific styles */
  }
}
```

---

## Spacing System

All spacing uses rem units (10px = 1rem base).

### Spacing Scale

```css
--spacing-xs: 0.4rem;      /* 4px */
--spacing-sm: 0.8rem;      /* 8px */
--spacing-md: 1.2rem;      /* 12px */
--spacing-base: 1.6rem;    /* 16px */
--spacing-lg: 2.4rem;      /* 24px */
--spacing-xl: 3.2rem;      /* 32px */
--spacing-2xl: 4.8rem;    /* 48px */
--spacing-3xl: 6.4rem;    /* 64px */
--spacing-4xl: 8rem;      /* 80px */
--spacing-5xl: 9.6rem;    /* 96px */
```

### Component-Specific Spacing

```css
--spacing-section: 6.4rem;     /* Section padding */
--spacing-container: 2.4rem;   /* Container padding */
--spacing-card: 1.6rem;        /* Card padding */
--spacing-button: 1rem 2rem;   /* Button padding */
```

### Usage Examples

```css
/* Padding */
.card {
  padding: var(--spacing-card);
}

/* Margin */
.section {
  margin-bottom: var(--spacing-section);
}

/* Gap (for flexbox/grid) */
.container {
  display: flex;
  gap: var(--spacing-lg);
}

/* Multiple values */
.button {
  padding: var(--spacing-button); /* 1rem 2rem */
}

/* Responsive spacing */
.component {
  padding: var(--spacing-base);
}

@media (min-width: 769px) {
  .component {
    padding: var(--spacing-xl);
  }
}
```

---

## Typography System

### Font Families

```css
--font-primary: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--font-display: "Pacifico", cursive;
--font-mono: "Courier New", Courier, monospace;
```

### Font Sizes (rem-based)

```css
--font-size-xs: 1rem;      /* 10px */
--font-size-sm: 1.2rem;     /* 12px */
--font-size-base: 1.6rem;   /* 16px */
--font-size-md: 1.8rem;     /* 18px */
--font-size-lg: 2rem;       /* 20px */
--font-size-xl: 2.4rem;     /* 24px */
--font-size-2xl: 3.2rem;    /* 32px */
--font-size-3xl: 4rem;      /* 40px */
--font-size-4xl: 4.8rem;    /* 48px */
--font-size-5xl: 6.4rem;    /* 64px */
```

### Font Weights

```css
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Line Heights

```css
--line-height-tight: 1.2;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
--line-height-loose: 2;
```

### Letter Spacing

```css
--letter-spacing-tight: -0.02em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.02em;
--letter-spacing-wider: 0.05em;
```

### Usage Examples

```css
/* Basic typography */
.heading {
  font-family: var(--font-display);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-text);
}

.body-text {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  color: var(--color-text);
}

/* Responsive typography */
.title {
  font-size: var(--font-size-2xl);
}

@media (min-width: 769px) {
  .title {
    font-size: var(--font-size-4xl);
  }
}

/* Display font */
.brand-name {
  font-family: var(--font-display);
  font-size: var(--font-size-5xl);
  letter-spacing: var(--letter-spacing-wide);
}
```

---

## Shadow & Elevation

### Shadow Scale

```css
--shadow-xs: 0 0.1rem 0.2rem rgba(10, 46, 53, 0.05);
--shadow-sm: 0 0.2rem 0.4rem rgba(10, 46, 53, 0.08);
--shadow-md: 0 0.4rem 0.8rem rgba(10, 46, 53, 0.12);
--shadow-lg: 0 0.8rem 1.6rem rgba(10, 46, 53, 0.16);
--shadow-xl: 0 1.6rem 3.2rem rgba(10, 46, 53, 0.2);
--shadow-2xl: 0 2.4rem 4.8rem rgba(10, 46, 53, 0.24);
```

### Elevation Levels

```css
--elevation-0: none;
--elevation-1: var(--shadow-xs);
--elevation-2: var(--shadow-sm);
--elevation-3: var(--shadow-md);
--elevation-4: var(--shadow-lg);
--elevation-5: var(--shadow-xl);
```

### Usage Examples

```css
/* Card with elevation */
.card {
  box-shadow: var(--elevation-2);
  transition: var(--transition-shadow);
}

.card:hover {
  box-shadow: var(--elevation-4);
}

/* Button shadow */
.button {
  box-shadow: var(--shadow-sm);
}

.button:active {
  box-shadow: var(--shadow-xs);
}

/* Modal overlay */
.modal {
  box-shadow: var(--shadow-2xl);
}
```

---

## Transitions & Animations

### Durations

```css
--duration-instant: 0ms;
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 350ms;
--duration-slower: 500ms;
```

### Timing Functions

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Pre-defined Transitions

```css
--transition-fast: var(--duration-fast) var(--ease-out);
--transition-base: var(--duration-base) var(--ease-in-out);
--transition-slow: var(--duration-slow) var(--ease-in-out);

--transition-color: color var(--transition-fast);
--transition-background: background-color var(--transition-fast);
--transition-transform: transform var(--transition-base);
--transition-opacity: opacity var(--transition-fast);
--transition-shadow: box-shadow var(--transition-base);
```

### Usage Examples

```css
/* Simple transition */
.button {
  transition: var(--transition-background);
}

.button:hover {
  background-color: var(--color-hover);
}

/* Multiple properties */
.card {
  transition: var(--transition-shadow), var(--transition-transform);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-0.2rem);
}

/* Custom transition */
.custom-animation {
  transition: all var(--duration-base) var(--ease-bounce);
}
```

---

## Border Radius

```css
--radius-none: 0;
--radius-sm: 0.4rem;   /* 4px */
--radius-md: 0.8rem;   /* 8px */
--radius-lg: 1.2rem;   /* 12px */
--radius-xl: 1.6rem;   /* 16px */
--radius-2xl: 2.4rem;  /* 24px */
--radius-full: 9999px; /* Full circle */
```

### Usage Examples

```css
/* Card corners */
.card {
  border-radius: var(--radius-lg);
}

/* Button */
.button {
  border-radius: var(--radius-md);
}

/* Circular avatar */
.avatar {
  border-radius: var(--radius-full);
}
```

---

## Z-Index System

```css
--z-index-base: 0;
--z-index-dropdown: 1000;
--z-index-sticky: 1020;
--z-index-fixed: 1030;
--z-index-modal-backdrop: 1040;
--z-index-modal: 1050;
--z-index-popover: 1060;
--z-index-tooltip: 1070;
```

### Usage Examples

```css
/* Sticky header */
.header {
  position: sticky;
  top: 0;
  z-index: var(--z-index-sticky);
}

/* Modal */
.modal-backdrop {
  z-index: var(--z-index-modal-backdrop);
}

.modal {
  z-index: var(--z-index-modal);
}
```

---

## Usage Examples

### Complete Component Example

```css
.card {
  /* Colors */
  background-color: var(--color-surface);
  color: var(--color-text);
  border: 0.1rem solid var(--color-border-light);
  
  /* Spacing */
  padding: var(--spacing-card);
  margin-bottom: var(--spacing-lg);
  
  /* Typography */
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  
  /* Border & Shadow */
  border-radius: var(--radius-lg);
  box-shadow: var(--elevation-2);
  
  /* Transitions */
  transition: var(--transition-shadow), var(--transition-transform);
}

.card:hover {
  box-shadow: var(--elevation-4);
  transform: translateY(-0.2rem);
}

/* Responsive */
@media (min-width: 769px) {
  .card {
    padding: var(--spacing-xl);
  }
}
```

### Button Example

```css
.button {
  /* Colors */
  background-color: var(--color-secondary);
  color: var(--color-text);
  
  /* Spacing */
  padding: var(--spacing-button);
  
  /* Typography */
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  
  /* Border & Shadow */
  border: none;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  
  /* Transitions */
  transition: var(--transition-background), var(--transition-shadow);
  
  /* Cursor */
  cursor: pointer;
}

.button:hover {
  background-color: var(--color-hover);
  box-shadow: var(--shadow-md);
}

.button:active {
  box-shadow: var(--shadow-xs);
}
```

---

## Best Practices

### 1. Always Use Variables

✅ **DO:**
```css
.component {
  color: var(--color-text);
  padding: var(--spacing-base);
}
```

❌ **DON'T:**
```css
.component {
  color: #0A2E35;
  padding: 16px;
}
```

### 2. Use Semantic Color Variables

✅ **DO:**
```css
.card {
  background-color: var(--color-surface);
  color: var(--color-text);
}
```

❌ **DON'T:**
```css
.card {
  background-color: var(--color-primary-light);
  color: var(--color-accent);
}
```

### 3. Mobile-First Responsive Design

✅ **DO:**
```css
.component {
  padding: var(--spacing-base);
}

@media (min-width: 769px) {
  .component {
    padding: var(--spacing-xl);
  }
}
```

❌ **DON'T:**
```css
.component {
  padding: 3.2rem;
}

@media (max-width: 768px) {
  .component {
    padding: 1.6rem;
  }
}
```

### 4. Use Rem Units for Spacing

✅ **DO:**
```css
.component {
  padding: var(--spacing-lg);
  margin: var(--spacing-base);
}
```

❌ **DON'T:**
```css
.component {
  padding: 24px;
  margin: 16px;
}
```

### 5. Combine Transitions for Smooth Interactions

✅ **DO:**
```css
.button {
  transition: var(--transition-background), var(--transition-shadow);
}
```

❌ **DON'T:**
```css
.button {
  transition: all 0.3s ease;
}
```

### 6. Use Elevation System for Depth

✅ **DO:**
```css
.card {
  box-shadow: var(--elevation-2);
}

.card:hover {
  box-shadow: var(--elevation-4);
}
```

❌ **DON'T:**
```css
.card {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### 7. Maintain Consistent Typography Scale

✅ **DO:**
```css
.heading {
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-tight);
}
```

❌ **DON'T:**
```css
.heading {
  font-size: 28px;
  line-height: 1.3;
}
```

---

## Quick Reference

### Common Patterns

**Card Component:**
- Background: `var(--color-surface)`
- Padding: `var(--spacing-card)`
- Border-radius: `var(--radius-lg)`
- Shadow: `var(--elevation-2)`

**Button:**
- Background: `var(--color-secondary)`
- Padding: `var(--spacing-button)`
- Border-radius: `var(--radius-md)`
- Transition: `var(--transition-background)`

**Section:**
- Padding: `var(--spacing-section)`
- Background: `var(--color-background)`

**Heading:**
- Font-family: `var(--font-display)` or `var(--font-primary)`
- Font-size: `var(--font-size-2xl)` to `var(--font-size-5xl)`
- Color: `var(--color-text)`

---

## Migration Guide

When updating existing components:

1. Replace old color variables:
   - `--primary-color` → `--color-primary`
   - `--primary-accent-color` → `--color-accent`
   - `--secondary-color` → `--color-secondary`

2. Convert px to rem:
   - `16px` → `var(--spacing-base)` or `1.6rem`
   - `24px` → `var(--spacing-lg)` or `2.4rem`

3. Update breakpoints:
   - Use `426px` for tablet min
   - Use `769px` for desktop min

4. Replace hardcoded values with variables:
   - Colors, spacing, typography, shadows, transitions

---

## Reference

- **Main Stylesheet:** `src/styles.css`
- **Base Font Size:** `10px = 1rem`
- **Color Palette:** FAB INDEX
- **Breakpoints:** Mobile (0-425px), Tablet (426-768px), Desktop (769px+)

---

*Last Updated: Based on FAB INDEX color palette and modern CSS design system principles*

