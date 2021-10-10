module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.pug'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': '"Lbre Baskerville", serif',
      'body': '"Libre Franklin", sans-serif',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#FFF2DA',
      'secondary': '#13A706'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#13A706'
    }),
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
