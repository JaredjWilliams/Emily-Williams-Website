# Emily Website

A modern React application built with Vite, TypeScript, and Tailwind CSS - optimized for porting Figma designs.

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework for easy Figma design porting
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:4200`

### Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Porting Figma Designs

This project is configured with Tailwind CSS and custom design tokens that match your existing color palette:

- **Primary Colors**: Blush Pink (#E8B8B0) and variations
- **Secondary Colors**: Muted Gold (#C9A961)
- **Accent Colors**: Dark Teal (#0A2E35)

All design tokens from your `styles.css` are available as Tailwind utilities. You can easily match Figma designs by:

1. Using Tailwind's utility classes directly
2. Referencing the custom color palette (e.g., `bg-primary`, `text-accent`)
3. Using the spacing system (e.g., `p-lg`, `m-xl`)
4. Leveraging the typography system (e.g., `font-display`, `text-2xl`)

## Project Structure

```
src/
  ├── App.tsx          # Main app component
  ├── main.tsx         # Application entry point
  ├── styles.css       # Global styles with Tailwind directives
  └── assets/          # Static assets (images, etc.)
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Design System

The project includes a comprehensive design system with:
- Custom color palette (matching your existing styles)
- Typography scale
- Spacing system
- Shadow/elevation system
- Border radius utilities

All available in both CSS variables (in `styles.css`) and Tailwind utilities.
