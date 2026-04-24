/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#CEA273",
          beige: "#FCEDD3",
          light: "#f1efe7",
          blueNavy: "#102A6B",
          blue: "#015185",
          blueLight: "#5990C0"

        }
      }
    },
  },
  plugins: [],
}