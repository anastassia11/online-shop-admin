/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '1px': '1px 1px 1px rgba(0, 0, 0, 0.2)',
        '0px': '0 0px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        'primary': 'rgb(0, 0, 255)',
        'secondary': 'rgb(94, 252, 141)',
        'light-gray': 'rgb(204, 204, 204)',
      }
    },
  },
  plugins: [],
}
