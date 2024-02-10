/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-gray': 'rgb(76, 76, 76)',
      },
    },
  },
  plugins: [],
}
