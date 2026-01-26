export default {
  theme: {
    extend: {
      keyframes: {
        infiniteSlide: {
          // 0% a 20% (Foto 1 quieta)
          '0%, 20%': { transform: 'translateX(0%)' },
          // 25% a 40% (Foto 2 quieta)
          '25%, 40%': { transform: 'translateX(-100%)' },
          // 45% a 60% (Foto 3 quieta)
          '45%, 60%': { transform: 'translateX(-200%)' },
          // 65% a 80% (Foto 4 quieta)
          '65%, 80%': { transform: 'translateX(-300%)' },
          // 85% a 95% (Hacia la copia de la foto 1)
          '85%, 95%': { transform: 'translateX(-400%)' },
          // Reinicio instantáneo al 0%
          '100%': { transform: 'translateX(-400%)' }, 
        }
      },
      animation: {
        'slide': 'infiniteSlide 15s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      }
    },
  },
}