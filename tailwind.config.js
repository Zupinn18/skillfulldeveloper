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
    poetsenoneregular: ["Poetsen One", "sans-serif"],
    volkhov: ["Volkhov", "serif"],
  },
    extend: {
      keyframes: {
        'zoom-in-zoom-out': {
          '0%': { transform: 'scale(1, 1)' },
          '50%': { transform: 'scale(1.2, 1.2)' },
          '100%': { transform: 'scale(1, 1)' },
        },
      },
      animation: {
        'zoom-in-zoom-out': 'zoom-in-zoom-out 2s ease-out infinite',
      },
    },
  },
  plugins: [],
}
