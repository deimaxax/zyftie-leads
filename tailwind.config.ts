import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f472b6', // pink-400
        'accent': '#a21caf', // purple-800
        'dark': '#18181b', // zinc-900
        'muted': '#9ca3af', // gray-400
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Clash Display', 'Inter', 'sans-serif']
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg,#111827 0%,#6610f2 85%)',
      },
      borderRadius: {
        'lg': '1.2rem',
        'xl': '1.6rem'
      },
    },
  },
  plugins: [],
}
export default config