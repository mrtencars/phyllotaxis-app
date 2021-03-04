const colors = require('tailwindcss/colors')

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        aufgabe: colors.yellow,
        folgerung: colors.indigo,
        definition: colors.fuchsia,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}