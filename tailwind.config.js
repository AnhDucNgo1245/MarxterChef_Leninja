/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'cream': '#fcfbf9',
        'navy': '#1a2639',
        'gold': '#d4af37',
        'gold-light': '#f3e5ab',
        'paper': '#ffffff',
        'void': '#020202', // Keep for compatibility if needed temporarily
        'deep-space': '#070a13',
        'starlight': '#e6f0fa',
        'nebula': '#2a2d45',
      },
    },
  },
  plugins: [],
}
