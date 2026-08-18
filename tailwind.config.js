/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        koko: {
          deep: '#0B0C0E',
          dark: '#16171E',
          brown: '#232530',
          gold: '#F59E0B',
          'gold-light': '#FBBF24',
          cream: '#FEF08A',
          white: '#FFFFFF',
          charcoal: '#0B0C0E',
          muted: '#9CA3AF',
          border: '#2D303E',
          // Legacy mappings for stability
          black: '#0B0C0E',
          card: '#1A1C25',
          gray: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'Manrope', 'sans-serif'],
        serif: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 0 10px rgba(245, 158, 11, 0.2)',
        'gold-md': '0 4px 20px rgba(245, 158, 11, 0.25)',
        'gold-lg': '0 8px 30px rgba(245, 158, 11, 0.35)',
        'card-hover': '0 12px 30px rgba(11, 12, 14, 0.5)',
      },
    },
  },
  plugins: [],
};

