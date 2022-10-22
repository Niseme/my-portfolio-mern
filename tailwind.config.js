/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#DACBB4',
        'secondary': '#3E2818',
        'tertiary': '#774E2A',
        'quaternary': '#906E49',
      }
    },
    screens: {
      // '2xl': {'max': '1535px'},
      // // => @media (max-width: 1535px) { ... }

      // 'xl': {'max': '1279px'},
      // // => @media (max-width: 1279px) { ... }

      'lg': {'max': '2023px'},
      // => @media (max-width: 1023px) { ... }

      // 'md': {'max': '767px'},
      // // => @media (max-width: 767px) { ... }

      'sm': {'max': '1000px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
