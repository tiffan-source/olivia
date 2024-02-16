/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'inter': ['Inter', 'sans-serif'],
          'bodoni': ['Bodoni Moda', 'serif'],
          'lato': ['Lato', 'sans-serif'],
        },
      },
    },
    plugins: [],
}