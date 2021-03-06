const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./**/**/*.html', './**/**/*.svelte'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'warning': '#ef4444',
      'cemex-red': '#E3303D',
      'cemex-blue': '#023185',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
