/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-cyan': '#4FFFFF',
        'neo-pink': '#FF4FFF',
        'neo-yellow': '#FFFF4F',
        'neo-lime': '#BFFF4F',
        'neo-purple': '#BF4FFF',
        'neo-red': '#FF4F4F',
        'neo-blue': '#4FBFFF',
        'neo-orange': '#FFBF4F',
        'neo-white': '#FFFFFF',
        'neo-black': '#000000',
        'neo-gray': '#CCCCCC',
      },
      boxShadow: {
        'neo-sm': '2px 2px 0px black',
        'neo': '4px 4px 0px black',
        'neo-lg': '6px 6px 0px black',
        'neo-xl': '8px 8px 0px black',
        'neo-inset': 'inset 2px 2px 0px black',
        'neo-inset-lg': 'inset 4px 4px 0px black',
      },
      fontFamily: {
        'system': ['system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'neo-float': 'neo-float 3s ease-in-out infinite',
        'neo-shake': 'neo-shake 0.5s ease-in-out',
      },
      keyframes: {
        'neo-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'neo-shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(2px)' }
        }
      }
    },
  },
  plugins: [],
}
