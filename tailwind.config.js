module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'nature-light': "url('/nature-light.jpg')",
        'nature-dark': "url('/nature-dark.jpg')",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
}
