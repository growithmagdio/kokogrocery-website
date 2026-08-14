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
          black: '#1C1C1C',
          dark: '#141414',
          card: '#242424',
          border: '#333333',
          gold: '#EFA721',
          'gold-light': '#F8C765',
          'gold-dark': '#C9850E',
          'gold-glow': 'rgba(239, 167, 33, 0.15)',
          white: '#FFFFFF',
          gray: '#A1A1AA',
          'gray-light': '#F4F4F5',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 0 10px rgba(239, 167, 33, 0.2)',
        'gold-md': '0 0 20px rgba(239, 167, 33, 0.3)',
        'gold-lg': '0 0 30px rgba(239, 167, 33, 0.4)',
        'card-hover': '0 12px 30px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #EFA721 0%, #F8C765 50%, #C9850E 100%)',
        'dark-gradient': 'linear-gradient(180deg, #1C1C1C 0%, #141414 100%)',
      },
    },
  },
  plugins: [],
};
