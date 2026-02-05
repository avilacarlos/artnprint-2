import './style.css' 
import { createClient } from '@supabase/supabase-js'
import gsap from 'gsap'

// ==========================================
// 1. CONFIGURACIÓN E INICIALIZACIÓN
// ==========================================

const supabaseUrl = 'https://tzxlswhksrftjcbnrzwb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6eGxzd2hrc3JmdGpjYm5yendiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1OTM4MTEsImV4cCI6MjA4MTE2OTgxMX0.UqUMHDHtfjn9Ps7xPwrj9QVhKF2cJy1elIgg0eckr_E' 

const BUCKET_ID = 'artnprint2'
const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Referencias al DOM
const btnFisicas = document.getElementById('btn-fisicas');
const containerFisicas = document.getElementById('container-fisicas');
const contentFisicas = document.getElementById('content-fisicas');
const iconFisicas = document.getElementById('icon-fisicas');

const btnDigitales = document.getElementById('btn-digitales');
const containerDigitales = document.getElementById('container-digitales');
const contentDigitales = document.getElementById('content-digitales');
const iconDigitales = document.getElementById('icon-digitales');

const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalCard = document.getElementById('modal-card');
const whatsappBtn = document.getElementById('whatsapp-trigger');
const closeBtn = document.getElementById('close-modal');

let fisicasLoaded = false;
let digitalesLoaded = false;

// ==========================================
// 2. PLANTILLAS HTML
// ==========================================

const templateFisicas = `
  <div class="space-y-6 w-full px-6">
    <h4 class="text-[#b34f83] font-[play] text-[1.75rem] font-bold uppercase">La elegancia de lo tangible</h4>
    <p class="text-gray-500 text-[1.2rem] text-justify font-[one]">
      Creamos invitaciones únicas y personalizadas para todo tipo de evento, desde diseños originales y poco convencionales hasta invitaciones discretas, elegantes y clásicas que reflejan el estilo de tu evento.
    </p>
    <p class="text-[#b34f83] text-[1.2rem] text-justify font-[one]">
      Estos son algunos ejemplos que podrían servirte de inspiración:
    </p>

    <div class="relative w-full h-[350px] mt-4">
      <div class="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div class="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div id="track-fisicas" class="flex overflow-x-auto w-full h-full gap-4 snap-x snap-mandatory px-6 pb-2 scroll-smooth" style="scrollbar-width: none; -ms-overflow-style: none;">
        <div class="w-full h-full flex items-center justify-center text-gray-300 font-[one]">Cargando galería...</div>
      </div>
      
      <div class="absolute bottom-4 right-1/2 translate-x-1/2 bg-white/80 backdrop-blur px-3 py-1 rounded-full shadow text-xs text-[#b34f83] font-bold pointer-events-none animate-pulse">
        ← Desliza →
      </div>
    </div>
  </div>
`;

const templateDigitales = `
  <div class="space-y-6 w-full px-4">
    <h4 class="text-[#b34f83] font-[play] font-bold text-[1.75rem] uppercase leading-tight">Interactividad y modernidad</h4>
    
    <div class="space-y-4 text-gray-500 text-[1.1rem] text-justify font-[one]">
      <p>Sabemos lo importante que es para ti que cada detalle sea único. Nuestras opciones digitales te permiten incluir animaciones, música, y enlaces interactivos.</p>
    </div>
    
    <div class="w-full h-auto bg-white p-5 rounded-2xl border border-[#b34f8320] shadow-inner flex flex-col items-center">
       <p class="text-[1.1rem] uppercase tracking-widest text-gray-400 mb-6 text-center font-bold">Bondades Digitales</p>
       
       <div class="flex items-start w-full mb-6 gap-4">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="cal.svg">
          </div>
          <div class="flex-1 min-w-0">
            <div class="item-titulo">Entrega rápida</div>
            <div class="item-texto">Podemos entregar entre 3 y 8 días.</div>
          </div>
       </div>

       <div class="flex items-start w-full mb-6 gap-4">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="maps.svg">
          </div>
          <div class="flex-1">
            <div class="item-titulo">Confirmación RSVP</div>
            <div class="item-texto">Gestiona tus invitados en un solo lugar.</div>
          </div>
       </div>

       <div class="flex items-start w-full mb-6 gap-4">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="gps.svg">
          </div>
          <div class="flex-1">
            <div class="item-titulo">Ubicación GPS</div>
            <div class="item-texto">Indicaciones exactas para la iglesia y el salón.</div>
          </div>
       </div>
    </div>

    <div class="flex flex-col gap-4 w-full items-center mt-6">
      <div class="w-full bg-[#ffffff50] p-4 rounded-2xl border border-[#b34f8320] shadow-inner flex flex-col items-center">
        <p class="textos-btn-digital">Invitación Básica: Ideal para fiestas infantiles y bautizos.</p>
        <a href="https://sobre-fatima.netlify.app/" target="_blank" class="titulo-btn">Demo Básica</a>
      </div>
      <div class="w-full bg-[#ffffff50] p-4 rounded-2xl border border-[#b34f8320] shadow-inner flex flex-col items-center">
        <p class="textos-btn-digital">Invitación Premium: La experiencia más completa para Bodas y XV Años.</p>
        <a href="https://pruebaboda.netlify.app/" target="_blank" class="titulo-btn">Demo Premium</a>
      </div>
    </div>
  </div>
`;

// ==========================================
// 3. LÓGICA DE SUPABASE
// ==========================================

async function cargarGaleriaHero() {
    const track = document.getElementById('carousel-track');
    const { data: trabajos, error } = await supabase.from('trabajos').select('*').order('created_at', { ascending: false });
    if (error || !trabajos) return;

    trabajos.forEach((trabajo) => {
        const { data: { publicUrl } } = supabase.storage.from(BUCKET_ID).getPublicUrl(`inicio/${trabajo.image_name}`);
        const slide = document.createElement('div');
        slide.className = 'relative flex-shrink-0 w-full h-full';
        slide.innerHTML = `
            <img src="${publicUrl}" class="w-full h-full object-cover">
            <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white/80 to-transparent z-50">
                <span class="px-4 py-2 bg-[#b34f83] text-[.75rem] text-white uppercase tracking-widest rounded-full font-bold">Recién entregado</span>
                <h3 class="text-black text-[1.5rem] font-bold mt-2">${trabajo.title}</h3>
                <p class="text-gray-600 text-[1.1rem] mt-1">${trabajo.description}</p>
            </div>`;
        track.appendChild(slide);
    });

    if (track.children.length > 0) {
        track.appendChild(track.children[0].cloneNode(true));
        iniciarAnimacionHero(trabajos.length);
    }
}

function iniciarAnimacionHero(totalImagenes) {
    const track = document.getElementById('carousel-track');
    const tl = gsap.timeline({ repeat: -1 });
    for (let i = 1; i <= totalImagenes; i++) {
        tl.to(track, { xPercent: -(100 * i), duration: 1.5, ease: "expo.inOut", delay: 3 });
    }
}

async function cargarFotosFisicas() {
    const track = document.getElementById('track-fisicas');
    if (!track) return;
    const { data: fisicas, error } = await supabase.from('fisicas').select('*').order('created_at', { ascending: false });
    if (error) return;
    track.innerHTML = '';
    fisicas.forEach((trabajo) => {
        const { data: { publicUrl } } = supabase.storage.from(BUCKET_ID).getPublicUrl(`fisicas/${trabajo.image_name}`);
        const img = document.createElement('img');
        img.className = 'snap-center shrink-0 w-[85%] h-full object-cover rounded-2xl shadow-md bg-gray-50';
        img.src = publicUrl;
        track.appendChild(img);
    });
}

// ==========================================
// 4. LÓGICA DE ACORDEÓN CON AUTO-SCROLL PRECISO
// ==========================================

async function toggleSection(type) {
    const container = type === 'fisicas' ? containerFisicas : containerDigitales;
    const content = type === 'fisicas' ? contentFisicas : contentDigitales;
    const icon = type === 'fisicas' ? iconFisicas : iconDigitales;

    const isOpen = container.classList.contains('open');

    if (!isOpen) {
        // 1. Cargar contenido
        if (type === 'fisicas' && !fisicasLoaded) {
            content.innerHTML = templateFisicas;
            await cargarFotosFisicas();
            fisicasLoaded = true;
        } else if (type === 'digitales' && !digitalesLoaded) {
            content.innerHTML = templateDigitales;
            digitalesLoaded = true;
        }

        // 2. Abrir sección
        container.classList.add('open');
        icon.style.transform = "rotate(180deg)";

        // 3. AUTO-SCROLL PRECISO AL TÍTULO
        setTimeout(() => {
            // Buscamos el h4 (título) dentro del contenido que acabamos de abrir
            const titulo = content.querySelector('h4');
            if (titulo) {
                const distanciaSuperior = 20; // Píxeles de margen que quieres dejar arriba
                const topPos = titulo.getBoundingClientRect().top + window.pageYOffset - distanciaSuperior;
                
                window.scrollTo({
                    top: topPos,
                    behavior: 'smooth'
                });
            }
        }, 350); 

    } else {
        container.classList.remove('open');
        icon.style.transform = "rotate(0deg)";
    }
}

// ==========================================
// 5. MODAL Y OTROS
// ==========================================

function openWhatsappModal() {
  modal.classList.remove('hidden');
  gsap.timeline()
    .to(modalOverlay, { opacity: 1, duration: 0.3 })
    .to(modalCard, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2");
}

function closeWhatsappModal() {
  gsap.timeline({ onComplete: () => modal.classList.add('hidden') })
    .to(modalCard, { opacity: 0, scale: 0.8, duration: 0.3, ease: "power2.in" })
    .to(modalOverlay, { opacity: 0, duration: 0.2 }, "-=0.1");
}

document.addEventListener('DOMContentLoaded', () => {
    cargarGaleriaHero();

    gsap.fromTo("#invitacion-masked",
      { maskSize: "0%", webkitMaskSize: "0%", scale: 1.2 },
      { maskSize: "225%", webkitMaskSize: "225%", scale: 1, duration: 3.5, ease: "power2.out" }
    );

    btnFisicas?.addEventListener('click', () => toggleSection('fisicas'));
    btnDigitales?.addEventListener('click', () => toggleSection('digitales'));

    whatsappBtn?.addEventListener('click', openWhatsappModal);
    closeBtn?.addEventListener('click', closeWhatsappModal);
    modalOverlay?.addEventListener('click', closeWhatsappModal);
});