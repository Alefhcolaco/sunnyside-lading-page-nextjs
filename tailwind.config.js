/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '19': '19px'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'red': '#f00',
      'blue': '#1fb6ff',
      'light-blue': '#70CFFF',
      'blue-dark': '#195672',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#838290',
      'gray': '#B6B6B8',
      'gray-light': '#d3dce6',
      'green-light': '#90D4C5',
      'green-dark': '#23554C'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'background': "url('/image-header.jpg')",
        'transform': "url('/image-transform.jpg')",
        'stand': "url('/image-stand-out.jpg')",
        'graphic': "url('/image-graphic-design.jpg')",
        'photography': "url('/image-photography.jpg')",
        'milk': "url('/image-gallery-milkbottles.jpg')",
        'orange': "url('/image-gallery-orange.jpg')",
        'cone': "url('/image-gallery-cone.jpg')",
        'sugarcubes': "url('/image-gallery-sugarcubes.jpg')",
      },
      spacing: {
        'h1': '817px',
        '13': '52px',
        'height-header': '137px',
        '128': '32rem',
        '144': '36rem',
        '200': '200px',
        '1100': '1100px',
        'width-cards': '792px',
        'height-cards': '660px',
        '443': '443px',
        '1200': '1200px',
        'width-clients': '379px',
        'height-clients': '385px',
        'width-project': '396px',
        'height-project': '492px',
        '173': '173px',
        '385': '385px',
        '187': '187px',
        'width-button': '154px',
        'height-button': '62px'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    },
  },
  plugins: [],
}