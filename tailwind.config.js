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
        keyframes: {
            scroll1: {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' },
            },
            scroll2: {
                '0%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(0%)' },
            },
        }
      },
    },
    plugins: []
}