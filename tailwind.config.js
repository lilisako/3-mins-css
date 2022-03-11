const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  theme: {
    fontFamily: {
      google: ['Neonderthaw']
    },
    extend: {
      colors: {
        'spotify-green': '#1DB954',
        'apple-black': '#333333',
        'amazon-orange': '#FF9900'
      }
    }
  }
}
