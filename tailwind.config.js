const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  theme: {
    fontFamily: {
      google: ['Neonderthaw'],
      garamond: ['EB Garamond'],
      fredoka: ['Fredoka One'],
      vt323: ['VT323']
    },
    extend: {
      fontFamily: {
        pressstart: ["'Press Start 2P', sans-serif"]
      },
      colors: {
        'spotify-green': '#1DB954',
        'apple-black': '#333333',
        'amazon-orange': '#FF9900'
      }
    }
  }
}
