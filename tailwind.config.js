/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': '#F8F9F8',
        'textMainColor': '#1B2932',
        'accentColor': '#43BEB0',
      },
    },
  },
  plugins: [],
}