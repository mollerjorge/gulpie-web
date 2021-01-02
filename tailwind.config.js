const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '1.5rem'
        },
        screens: {
          lg: '1152px'
        }
      },
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
        medium: '0.312rem'
      }
    },
    fontFamily: {
      inter: 'Inter, sans-serif'
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      pointerEvents: ['disabled'],
      textColor: ['checked']
    }
  },
  plugins: []
}
