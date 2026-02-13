/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'charcoal': '#1A1A1A',
        'off-white': '#F5F5F5',
        'gold': '#C9A96E',
        'silver': '#A8A8A8',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      lineHeight: {
        'body': '1.5',
        'heading': '1.2',
      },
    },
  },
  plugins: [],
};
