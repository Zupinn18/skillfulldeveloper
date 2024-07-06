/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    fontFamily: {
    inter: ["Inter", "sans-serif"],
    edusa: ["Edu SA Beginner", "cursive"],
    mono: ["Roboto Mono", "monospace"],
    poppins: ["Poppins", "sans-serif"],
    poetsenoneregular: ["Poetsen One", "sans-serif"]
  },
    extend: {},
  },
  plugins: [],
}
