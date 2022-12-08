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
        gold: {
          200: '#EBCFA9',
          300: '#E8C797',
          400: '#E4C085',
          500: '#E0B973',
          600: '#E4B161',
          700: '#E09C41',
          800: '#D69033',
        },
      },
    },
  },
  plugins: [],
};
