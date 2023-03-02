/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html',
  './src/App.js',
  './src/index.css',
  './src/**/*.tsx',
  './src/**/*.ts',  
  './src/*.js',
  './src/**/*.jsx',
  './src/*.css',
  './public/index.html',
  './public/index.css',
  './public/index.js',
  './public/App.js',
 ],
  theme: {
    screens: {
      'sm': {'max': '639px'},

      'md': {'max': '767px'},

      'lg': {'max': '1023px'},

      'xl': {'max': '1440px'},
    },
    
    variants: {},

    fontSize: {
      xs:14,
      mn:16,
      md:20,
      lg:24,
      xl:32,
      '2xl': 36,
      '6xl': 48,
    },
    colors: {

      black: '#000',
      white: '#FFF',
      blue: '#228',
      
      transparent: 'transparent',
      
      gray: {
        100: '#7C7C8A',
        400: '#E1E1E2',
        800: '#202024',
        900: '#121214',
      },
      
      cyan: {
        200: '#90E8FF',
        300: '#99B4FA',
        400: '#61B1F80',
        500: '#61DAFB',
      },
      
      'blue-fonte': '#99B4FA',
      'blue-medio': '#202580',
      'background-charts': '#61B1F880',

                  
    },   
  extend: {
      fontFamily: {
        'Anton': 'Anton, sans-serif',
        'Roboto': 'Roboto, sans-serif',
        'Roboto-Condensed': 'Roboto-Condensed, sans-serif',
      },
    },
  },
  plugins: [],
}
