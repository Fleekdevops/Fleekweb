import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066ff',
        'primary-dark': '#0055dd',
        secondary: '#8a2be2',
        accent: '#00ffcc',
        dark: '#0a0a18',
        darker: '#050510',
        light: '#f8f9ff',
        gray: '#7b88a8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 15s infinite linear',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(20px, 20px) rotate(90deg)' },
          '50%': { transform: 'translate(0, 40px) rotate(180deg)' },
          '75%': { transform: 'translate(-20px, 20px) rotate(270deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
