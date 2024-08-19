/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:['"Poppins"', "sans-serif"]
      },
      grayscale: {
        100: '100%',
      }
    },
  },
  plugins: [],
}

