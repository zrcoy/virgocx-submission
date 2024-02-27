/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        whiteBg: '#f5f5f5',
        vergoHeader2: '#343434',
        subTitle: '#616161',
        primaryDarkPurple: '#6B47ED',
      },
    },
  },
  plugins: [],
}
