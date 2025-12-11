/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: '#ffffff',
        panel: '#f8f9fa',
        accent: '#b4231a', // deep red for professional highlight
        accent2: '#ef4444', // bright red for secondary accents
        text: '#1e293b',
        textLight: '#64748b',
      },
    },
  },
  plugins: [],
}

