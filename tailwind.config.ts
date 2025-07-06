import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f472b6',
        accent: '#a21caf',
        dark: '#18181b',
        muted: '#9ca3af',
        neutral: {
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
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
        'xl': '1.6rem',
        '2xl': '2rem',
        '3xl': '2.5rem'
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      }
    },
  },
  plugins: [],
}

export default config
