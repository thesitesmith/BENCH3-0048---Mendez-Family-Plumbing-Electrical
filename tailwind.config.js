/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1A2B4A',
          secondary: '#3D5A80',
          accent: '#C9A96E',
          background: '#FAF8F3',
          text: '#0D1520',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
}
