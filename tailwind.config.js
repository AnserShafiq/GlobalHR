/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors:{
        'logo-red': '#88171f',
      },
      backgroundImage:{
        'special-bg-1': "url('/src/Images/section-bg-1.png')",
        'special-bg-2': "url('/src/Images/section-bg-2.png')",
      }
    },
  },
  plugins: [],
}

