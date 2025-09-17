/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Include all HTML files in the root directory
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/TS files in the src folder
  ],
  theme: {
    extend: {colors: {
      customGreen: '#00ffa6',
    },},
  },
  plugins: [],
}

