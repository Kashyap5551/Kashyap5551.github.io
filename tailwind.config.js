const { fontFamily} = require('tailwindcss/defaultTheme')


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        'sans': ['Montserrat']
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}