const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        turqoise: colors.cyan,
        gray: colors.blueGray
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
