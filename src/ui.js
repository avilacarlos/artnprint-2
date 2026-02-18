import gsap from 'gsap';
import { templateFisicas, templateDigitales } from './templates';
import { cargarGaleriaDinamica } from './galleries';

let state = { fisicasLoaded: false, digitalesLoaded: false };

export async function toggleSection(type) {
    const isFisicas = type === 'fisicas';
    const container = document.getElementById(isFisicas ? 'container-fisicas' : 'container-digitales');
    const content = document.getElementById(isFisicas ? 'content-fisicas' : 'content-digitales');
    const icon = document.getElementById(isFisicas ? 'icon-fisicas' : 'icon-digitales');

    if (!container.classList.contains('open')) {
        if (isFisicas && !state.fisicasLoaded) {
            content.innerHTML = templateFisicas;
            await cargarGaleriaDinamica('track-fisicas', 'fisicas');
            state.fisicasLoaded = true;
        } else if (!isFisicas && !state.digitalesLoaded) {
            content.innerHTML = templateDigitales;
            state.digitalesLoaded = true;
        }

        container.classList.add('open');
        if (icon) icon.style.transform = "rotate(180deg)";
        
        setTimeout(() => {
            content.querySelector('h4')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    } else {
        container.classList.remove('open');
        if (icon) icon.style.transform = "rotate(0deg)";
    }
}

// ESTA ES LA FUNCIÓN QUE TE ESTÁ DANDO ERROR. 
// Asegúrate de que tenga el "export" al principio.
export function setupModal() {
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalCard = document.getElementById('modal-card');
    const btn = document.getElementById('whatsapp-trigger');
    const closeBtn = document.getElementById('close-modal');

    if (!btn) return;

    btn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        gsap.timeline()
            .to(modalOverlay, { opacity: 1, duration: 0.3 })
            .to(modalCard, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2");
    });

    const cerrar = () => {
        gsap.timeline({ onComplete: () => modal.classList.add('hidden') })
            .to(modalCard, { opacity: 0, scale: 0.8, duration: 0.3, ease: "power2.in" })
            .to(modalOverlay, { opacity: 0, duration: 0.2 }, "-=0.1");
    };

    closeBtn?.addEventListener('click', cerrar);
    modalOverlay?.addEventListener('click', cerrar);
}