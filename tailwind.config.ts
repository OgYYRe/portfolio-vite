import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0b0b12',
        glowPurple: '#a855f7',
        glowBlue: '#3b82f6',
      },
      boxShadow: {
        glow: '0 0 35px rgba(168, 85, 247, 0.35)',
      },
    },
  },
  plugins: [],
}

export default config

