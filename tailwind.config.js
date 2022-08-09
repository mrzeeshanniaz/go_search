/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    colors: {
      transparent: 'transparent',
      black:'#35343a',
      white: '#f0f0f0',
      primary: '#fbbc05',
      secondary: '#f2f7f7',
      secondaryDark: '#173347 ',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
  mode: 'jit',
}