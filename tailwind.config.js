/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bakery': {
          50: '#fdf8f4',
          100: '#f9ede4',
          200: '#f2d9c6',
          300: '#e8bfa0',
          400: '#dc9c72',
          500: '#d17f4f',
          600: '#c36a3e',
          700: '#a25533',
          800: '#83462f',
          900: '#6b3c29',
        },
        'cream': '#fffbf5',
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
