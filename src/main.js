import './style.css';
import gsap from 'gsap';
import { cargarHero } from './galleries';
import { toggleSection, setupModal } from './ui';

/**
 * Esperamos a que el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar Galería Hero (Pantalla completa)
    cargarHero();

    // 2. Animación de entrada "mancha"
    gsap.fromTo("#invitacion-masked",
      { maskSize: "0%", webkitMaskSize: "0%", scale: 1.2 },
      { maskSize: "225%", webkitMaskSize: "225%", scale: 1, duration: 3.5, ease: "power2.out" }
    );

    // 3. Listeners para los botones de las secciones
    // Botón Invitaciones Físicas
    document.getElementById('btn-fisicas')?.addEventListener('click', () => toggleSection('fisicas'));
    
    // Botón Invitaciones Digitales
    document.getElementById('btn-digitales')?.addEventListener('click', () => toggleSection('digitales'));

    // 4. Iniciar lógica del Modal de WhatsApp
    setupModal();
});