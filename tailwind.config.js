/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E8B8B0',
          light: '#F0C8C0',
          lighter: '#F5D5CE',
          lightest: '#FAE8E3',
        },
        secondary: {
          DEFAULT: '#C9A961',
          light: '#D4B574',
        },
        accent: {
          DEFAULT: '#0A2E35',
          medium: '#2D5A63',
        },
        background: '#FAE8E3',
        'background-alt': '#F5D5CE',
        surface: '#F0C8C0',
        'surface-elevated': '#E8B8B0',
        text: '#0A2E35',
        'text-secondary': '#2D5A63',
        'text-light': '#E8B8B0',
        border: '#2D5A63',
        'border-light': '#F0C8C0',
      },
      fontFamily: {
        primary: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['Pacifico', 'cursive'],
        mono: ['"Courier New"', 'Courier', 'monospace'],
      },
      fontSize: {
        xs: '1rem',      // 10px
        sm: '1.2rem',    // 12px
        base: '1.6rem',  // 16px
        md: '1.8rem',    // 18px
        lg: '2rem',      // 20px
        xl: '2.4rem',    // 24px
        '2xl': '3.2rem', // 32px
        '3xl': '4rem',   // 40px
        '4xl': '4.8rem', // 48px
        '5xl': '6.4rem', // 64px
      },
      spacing: {
        xs: '0.4rem',    // 4px
        sm: '0.8rem',    // 8px
        md: '1.2rem',    // 12px
        base: '1.6rem',  // 16px
        lg: '2.4rem',    // 24px
        xl: '3.2rem',    // 32px
        '2xl': '4.8rem', // 48px
        '3xl': '6.4rem', // 64px
        '4xl': '8rem',   // 80px
        '5xl': '9.6rem', // 96px
      },
      borderRadius: {
        sm: '0.4rem',   // 4px
        md: '0.8rem',   // 8px
        lg: '1.2rem',   // 12px
        xl: '1.6rem',   // 16px
        '2xl': '2.4rem', // 24px
      },
      boxShadow: {
        xs: '0 0.1rem 0.2rem rgba(10, 46, 53, 0.05)',
        sm: '0 0.2rem 0.4rem rgba(10, 46, 53, 0.08)',
        md: '0 0.4rem 0.8rem rgba(10, 46, 53, 0.12)',
        lg: '0 0.8rem 1.6rem rgba(10, 46, 53, 0.16)',
        xl: '0 1.6rem 3.2rem rgba(10, 46, 53, 0.2)',
        '2xl': '0 2.4rem 4.8rem rgba(10, 46, 53, 0.24)',
      },
    },
  },
  plugins: [],
}

