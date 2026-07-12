/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      },
      colors:{
        'primary':'#0F7A66',
        'primary-dark':'#0B5C4D',
        'primary-light':'#E8F5F1',
        'accent':'#FF8A5B',
        'ink':'#0E2A24',
        'muted':'#5B6B67',
        'canvas':'#FBFBF8'
      },
      fontFamily:{
        'display':['Fraunces','serif'],
        'sans':['"Plus Jakarta Sans"','sans-serif'],
        'mono':['"IBM Plex Mono"','monospace']
      }
    },
  },
  plugins: [],
}