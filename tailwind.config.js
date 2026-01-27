/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Tipografías
      fontFamily: {
        'play': ['playfair', 'sans-serif'], 
        'one': ['one', 'sans-serif'],
      },
      // 2. Keyframes
      keyframes: {
        infiniteSlide: {
          '0%, 20%': { transform: 'translateX(0%)' },
          '25%, 40%': { transform: 'translateX(-100%)' },
          '45%, 60%': { transform: 'translateX(-200%)' },
          '65%, 80%': { transform: 'translateX(-300%)' },
          '85%, 95%': { transform: 'translateX(-400%)' },
          '100%': { transform: 'translateX(-400%)' }, 
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.15)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.15)' },
          '70%': { transform: 'scale(1)' },
        },
      }, // <--- Aquí cerramos correctamente keyframes
      
      // 3. Definición de Animaciones (Nivel correcto)
      animation: {
        'slide': 'infiniteSlide 15s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}