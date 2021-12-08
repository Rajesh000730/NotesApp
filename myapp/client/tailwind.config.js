module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '500': '500px',
       },
       screens: {
        'sl':'max-width: 505px;'
        
      }, 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
