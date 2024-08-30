/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-100': 'rgb(255 228 105)',
        'base-200': '#dedede',
        'theme-700': 'rgb(22 101 106)',
        'theme-800': '#103f45', 
      },
      fontWeight: {
        'medium': 490,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Other plugins...
  ],
}