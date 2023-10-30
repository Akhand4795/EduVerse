/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend:{

      colors: {
        'regal-blue': '#243c5a',
        'custom-yellow': '#FFE143',
        'blue':'#2EB8CB'
        
      },
      backgroundColor:{
        'yellow': '#FFE143',
        'blue':'#2EB8CB'
      },
      fontFamily: {
        'poppins': ['"Poppins", sans'], // 'Poppins' is the font name, 'sans' is a generic font family
      },
      height:{
        '720':'45rem',
        '387':'19rem',
        '616':'38.5rem',

        '221':'14rem'

      }
    }
  },
  plugins: [],
}