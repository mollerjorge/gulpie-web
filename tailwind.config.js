const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {
      lineClamp: {
        10: '10'
      },
      spacing: {
        128: '32rem',
        160: '40rem'
      },
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
        },
        'dark-100': '#13151D',
        'dark-200': '#1F2129',
        'dark-300': '#2B2D33',
      },
      borderRadius: {
        medium: '0.312rem'
      },
      boxShadow: {
        drawer: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        testimonial: '0 63px 50px 0 rgba(0,0,0,0.07)',
        blue: '0 0px 60px 15px rgba(55, 125, 255, 0.1)'
      },
      gradientColorStops: ['group-hover']
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
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')]
}
