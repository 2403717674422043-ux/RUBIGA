/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ice: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#0a3650',
        },
        sage: {
          50: '#f4f8f5',
          100: '#e9f5ec',
          200: '#d3e8da',
          300: '#a3b18a',
          400: '#84a98c',
          500: '#52796f',
          600: '#354f52',
          700: '#2f3e46',
        },
        lavender: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'ice-glow': '0 0 30px -5px rgba(56, 189, 248, 0.2)',
        'sage-glow': '0 0 30px -5px rgba(132, 169, 140, 0.2)',
        'watercolor': '0 20px 40px -15px rgba(2, 132, 199, 0.08), 0 10px 20px -10px rgba(132, 169, 140, 0.06)',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        floatSlowAlt: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-1.5deg)' },
        },
      },
      animation: {
        'float-slow': 'floatSlow 14s ease-in-out infinite',
        'float-slow-alt': 'floatSlowAlt 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
