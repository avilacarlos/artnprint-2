import gsap from 'gsap';
import { templateFisicas, templateDigitales, templateVasos } from './templates';
import { inicializarGaleriaPremium } from './modularGalleries';

let seccionesCargadas = {};

export async function toggleSection(type) {
    const container = document.getElementById(`container-${type}`);
    const content = document.getElementById(`content-${type}`);
    const icon = document.getElementById(`icon-${type}`);

    if (!container || !content) return;

    if (!container.classList.contains('open')) {
        
        if (!seccionesCargadas[type]) {
            // ASIGNACIÓN SIMPLE DE TEMPLATES
            if (type === 'fisicas') {
                content.innerHTML = templateFisicas;
                await inicializarGaleriaPremium('track-fisicas', 'fisicas');
            } 
            else if (type === 'digitales') {
                content.innerHTML = templateDigitales;
            }
            else if (type === 'vasos') {
                content.innerHTML = templateVasos;
                await inicializarGaleriaPremium('track-vasos', 'vasos');
            }
            // Agrega más "else if" aquí para tazas, abanicos, etc.

            seccionesCargadas[type] = true;
        }

        container.classList.add('open');
        if (icon) icon.style.transform = "rotate(180deg)";
        
        setTimeout(() => {
            const yOffset = -100;
            const y = container.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }, 300);

    } else {
        container.classList.remove('open');
        if (icon) icon.style.transform = "rotate(0deg)";
    }
}




/**
 * Configuración del Modal de WhatsApp
 */
export function setupModal() {
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalCard = document.getElementById('modal-card');
    const btn = document.getElementById('whatsapp-trigger');
    const closeBtn = document.getElementById('close-modal');

    if (!btn || !modal) return;

    // Función para abrir con GSAP
    const abrirModal = () => {
        modal.classList.remove('hidden');
        gsap.timeline()
            .to(modalOverlay, { opacity: 1, duration: 0.3 })
            .to(modalCard, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2");
    };

    // Función para cerrar con GSAP
    const cerrarModal = () => {
        gsap.timeline({ onComplete: () => modal.classList.add('hidden') })
            .to(modalCard, { opacity: 0, scale: 0.8, duration: 0.3, ease: "power2.in" })
            .to(modalOverlay, { opacity: 0, duration: 0.2 }, "-=0.1");
    };

    btn.addEventListener('click', abrirModal);
    closeBtn?.addEventListener('click', cerrarModal);
    modalOverlay?.addEventListener('click', cerrarModal);
}