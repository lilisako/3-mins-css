const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  theme: {
    fontFamily: {
      google: ['Neonderthaw'],
      garamond: ['EB Garamond'],
      fredoka: ['Fredoka One'],
      vt323: ['VT323'],
      inria: ['Inria Sans'],
      kanit: ['Kanit'],
      dohyeon: ['Do Hyeon'],
      dmsans: ['DM Sans']
    },
    extend: {
      fontFamily: {
        pressstart: ["'Press Start 2P', sans-serif"]
      },
      colors: {
        'spotify-green': '#1DB954',
        'apple-black': '#333333',
        'amazon-orange': '#FF9900'
      },
      boxShadow: {
        neu1: '-5px -5px 15px 2px rgb(0 0 0 / 0.1)',
        neu2: '-5px -5px 10px 2px rgb(0.9 0.9 0.9 / 0.1)',
        innerneu1: 'inset -5px -5px 10px 2px rgb(0.9 0.9 0.9 / 1)',
        innerneu2: 'inset -5px -5px 15px 2px rgb(0 0 0 / 0.1)'
      }
    }
  }
}
