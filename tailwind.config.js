/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        UltramarineBlue: "#3366ff",
      }
    },
  },
  plugins: [require("daisyui")],
}

