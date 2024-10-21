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
        'special-bg-1': "url('/src/Images/Employers/e-5.png')",
      }
    },
  },
  plugins: [],
}

