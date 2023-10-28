/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': '#0A192F',
        'textMainColor': '#D1D5DB',
        'accentColor': '#D93271',
      },
    },
  },
  plugins: [],
}