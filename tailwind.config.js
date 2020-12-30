const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        turqoise: colors.cyan,
        gray: colors.blueGray,
        black: {
          dark: '#333333',
          DEFAULT: '#858A8F',
          light: '#AAB0B7'
        }
      },
      borderRadius: {
        medium: '0.312rem',
      }

    },
    fontFamily: {
      inter: 'Inter, sans-serif'
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      pointerEvents: ['disabled']
    }
  },
  plugins: []
}
