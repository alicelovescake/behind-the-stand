module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#fec700',
        'brand-green-dark': '#007a35',
        'brand-green-light': '#07ae03',
        'brand-black': '#0b0608',
        'brand-gray-dark': '#26282B',
        'brand-gray': '#7a7d86',
        'brand-gray-light': '#c2c4ca',
      },
      fontSize: {
        '7xl': '5.5rem',
        '8xl': '6.25rem',
      },
    },
  },
}
