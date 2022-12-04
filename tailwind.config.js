/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ['"Adobe Garamond Pro"', "serif"],
      },
      colors: {
        "primary-yellow": "#E0B973",
      },
    },
  },
  plugins: [],
};
