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
        'blue':'#2EB8CB',
        'grey': '#F8F6F2',
      },
      height: {
        '384': '18rem',
      },
    }
  },
  plugins: [],
}

