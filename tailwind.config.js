/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#EA9010",
          dark: "#0F0F0F", // Updated to requested #0F0F0F
          gray: "#1A1A1A", // Updated to requested #1A1A1A
        },
        theme: {
          light: {
            bg: "#FBF4EA",
            heading: "#1C1C1C",
            body: "#374151",
          },
          dark: {
            bg: "#0F0F0F",
            card: "#1A1A1A",
            heading: "#FFFFFF",
            body: "#D1D5DB",
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        devanagari: ['"Tiro Devanagari Sanskrit"', 'serif'],
        kalam: ['"Tiro Devanagari Marathi"', 'serif'],
      },
    },
  },
  plugins: [],
};
