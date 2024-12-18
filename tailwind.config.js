/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],

  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      clipPath: {
        'custom-shape': 'polygon(50% 0%, 0% 100%, 100% 100%)', 
      },

      colors: {
        'primary-purple': '#A29CDF',
        'white': '#ffffff',
        'black': '#05040B',
      },
      fontFamily: { 
        'santoshi': ['Satoshi-Variable', "sans-serif"],
        'poppins': ['Poppins', "sans-serif"]
      },

      screens: {

        'mini': {'min': '300px', 'max': '690px'},

        'sm': {'min': '690px', 'max': '859px'},
        // => @media (min-width: 576px) { ... }
  
        'md': '860px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1400px',

        'xl': '1700px',
      },
  

    }, 
  },
  plugins: [],
}

