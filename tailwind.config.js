/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Supabase brand colors
        brand: {
          DEFAULT: '#3ECF8E',
          light: '#5FE3A1',
          dark: '#2FB479',
        },
        // Supabase grays
        scale: {
          100: '#1C1C1C',
          200: '#232323',
          300: '#282828',
          400: '#2E2E2E',
          500: '#3E3E3E',
          600: '#4E4E4E',
          700: '#6E6E6E',
          800: '#8E8E8E',
          900: '#AEAEAE',
          1000: '#CECECE',
          1100: '#EEEEEE',
          1200: '#F3F3F3',
        }
      }
    },
  },
  plugins: [],
}