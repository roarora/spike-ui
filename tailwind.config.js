/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Ubuntu',
          'Arial',
          'sans-serif'
        ],
      },
      colors: {
        // Supabase brand colors
        brand: {
          DEFAULT: '#3ECF8E',
          light: '#5FE3A1',
          dark: '#2FB479',
        },
        // Warmer, more accurate Supabase grays
        scale: {
          100: '#181818',
          200: '#1f1f1f',
          300: '#282828',
          400: '#2e2e2e',
          500: '#3e3e3e',
          600: '#666666',
          700: '#7e7e7e',
          800: '#9e9e9e',
          900: '#b4b4b4',
          1000: '#cccccc',
          1100: '#e6e6e6',
          1200: '#f8f8f8',
        }
      }
    },
  },
  plugins: [],
}