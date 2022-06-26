/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" }
        }
      },
      animation: {
        "fadeIn": "fade 1s ease-in-out"
      },
      dropShadow: {
        'xl' : '0px 0px 5px linear-gradient( to right, #ffffff , #fffacc)'
      } 
    },
  },
  plugins: [],
}