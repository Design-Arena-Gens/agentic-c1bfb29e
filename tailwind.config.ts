import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        carbon: '#0a0a0a',
        steel: '#c0c0c0',
        platinum: '#e5e7eb',
      },
      backgroundImage: {
        'silver-sheen': 'radial-gradient(1200px 600px at 50% -10%, rgba(255,255,255,0.15), rgba(0,0,0,0) 60%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0))',
        'mesh-dark': 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06), transparent 30%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.05), transparent 25%), radial-gradient(circle at 50% 100%, rgba(255,255,255,0.04), transparent 30%)',
      },
      boxShadow: {
        silver: '0 10px 30px rgba(192,192,192,0.15)',
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 10px 40px rgba(255,255,255,0.08)',
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'headline': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      fontWeight: {
        'extraheavy': '900',
      },
      borderRadius: {
        'xl2': '1.25rem',
      },
    },
  },
  plugins: [],
}

export default config
