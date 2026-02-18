import './style.css';
import gsap from 'gsap';
import { cargarHero } from './galleries';
import { toggleSection, setupModal } from './ui'; // Aquí importas setupModal

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar Galería Hero
    cargarHero();

    // 2. Animación de la mancha
    gsap.fromTo("#invitacion-masked",
      { maskSize: "0%", webkitMaskSize: "0%", scale: 1.2 },
      { maskSize: "225%", webkitMaskSize: "225%", scale: 1, duration: 3.5, ease: "power2.out" }
    );

    // 3. Eventos de botones
    document.getElementById('btn-fisicas')?.addEventListener('click', () => toggleSection('fisicas'));
    document.getElementById('btn-digitales')?.addEventListener('click', () => toggleSection('digitales'));

    // 4. Iniciar lógica del Modal
    setupModal();
});