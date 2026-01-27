import './style.css' 
import { createClient } from '@supabase/supabase-js'
import gsap from 'gsap'

// 1. CONFIGURACIÓN DE SUPABASE
const supabaseUrl = 'https://tzxlswhksrftjcbnrzwb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6eGxzd2hrc3JmdGpjYm5yendiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1OTM4MTEsImV4cCI6MjA4MTE2OTgxMX0.UqUMHDHtfjn9Ps7xPwrj9QVhKF2cJy1elIgg0eckr_E' 
const BUCKET_NAME = 'artnprint2'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 2. REFERENCIAS AL DOM (Declaradas una sola vez)
const btnFisicas = document.getElementById('btn-fisicas');
const btnDigitales = document.getElementById('btn-digitales');
const dynamicContent = document.getElementById('dynamic-content');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalCard = document.getElementById('modal-card');
const whatsappBtn = document.getElementById('whatsapp-trigger');
const closeBtn = document.getElementById('close-modal');

// 3. PLANTILLAS DE CONTENIDO (Secciones de bondades)
const templateFisicas = `
  <div class="space-y-6 w-full px-6">
    <h4 class="text-[#b34f83] font-[play] text-[1.75rem] font-bold uppercase">La elegancia de lo tangible</h4>
    <p class="text-gray-500 text-[1.2rem]  text-justify font-[one]">
      Creamos invitaciones únicas y personalizadas para todo tipo de evento, desde diseños originales y poco convencionales
                que sorprenderán a tus invitados, hasta invitaciones discretas, elegantes y clásicas que reflejan el estilo de tu
                evento.
    </p>
    <p class="text-gray-500 text-[1.2rem]  text-justify font-[one]">
      Somos expertos y trabajaremos contigo para crear la invitación que se adapte a tus necesidades y refleje
                el estilo y la personalidad de tu evento. Utilizamos materiales de alta calidad y técnicas clásicas y modernas de
                impresión para asegurarnos de que tus invitaciones encantarán y dejaran una impresión duradera en tus invitados.
    </p>
    <p class="text-[#b34f83] text-[1.2rem]  text-justify font-[one]">
      Estos son algunos ejemplos que podrian servirte de inspiracion para crear tu invitación ideal.
    </p>
    
    <!-- Galería de fotos de invitaciones físicas -->
    <div class="grid grid-cols-2 gap-2 w-full">
      <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=300" class="rounded-xl h-32 w-full object-cover shadow-sm">
      <img src="https://images.unsplash.com/photo-1522673607200-164883eecd18?q=80&w=300" class="rounded-xl h-32 w-full object-cover shadow-sm">
      <img src="https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=600" class="rounded-xl h-40 col-span-2 w-full object-cover shadow-sm">
    </div>

    <ul class="space-y-3 text-gray-500 text-xs font-bold uppercase tracking-widest">
      <li class="flex items-center gap-2"><span class="text-[#b34f83]">✦</span> Papeles finos texturizados</li>
      <li class="flex items-center gap-2"><span class="text-[#b34f83]">✦</span> Acabados en Hot Stamping</li>
      <li class="flex items-center gap-2"><span class="text-[#b34f83]">✦</span> Corte Láser de alta precisión</li>
    </ul>
  </div>
`;

const templateDigitales = `
  <div class="space-y-6 w-full px-6">
    <h4 class="text-[#b34f83] font-[play] font-bold text-[1.75rem] uppercase">Interactividad y modernidad</h4>
    <p class="text-gray-500 text-[1.2rem]  text-justify font-[one]">
      Sabemos lo importante que es para ti que cada detalle de tu evento sea único y especial.
    </p>
    <p class="text-gray-500 text-[1.2rem]  text-justify font-[one]">
      Estas invitaciones no solo te permiten ser más respetuoso con el medio ambiente,
                    al eliminar el uso de papel, sino que también te brindan la oportunidad de diseñar algo
                    verdaderamente personal y a la medida de tu estilo.
    </p>
    <p class="text-gray-500 text-[1.2rem]  text-justify font-[one]">
      Con nuestras opciones digitales, puedes incluir animaciones, música, y enlaces interactivos,
                    lo que hará que tus invitados sientan la emoción de tu evento desde el primer momento.
    </p>
     <p class="text-gray-500 text-[1.2rem]  text-justify font-[one]">
      Además, no solo ahorras tiempo en la entrega, sino que también reduces costos, ya que no necesitas
                    perder tiempo entregando las invitaciones personalmente. 
    </p>
     <p class="text-gray-500 text-[1.2rem]  text-justify font-[one]">
Confía en nosotros para que tus invitaciones sean tan memorables como tu día especial.
    </p>
    
    
    
    <div class="bg-white p-4 rounded-2xl border border-[#b34f8320] shadow-inner">
       <p class="text-[1.25rem] capitalize text-gray-500 mb-4 text-center">Bondades Digitales</p>
       <div class="grid grid-cols-3 gap-2 text-center text-[10px] mb-4 text-[#b34f83] font-bold uppercase">
          <div class="flex flex-col items-center gap-1"><span class="text-lg">📍</span>Mapa</div>
          <div class="flex flex-col items-center gap-1"><span class="text-lg">📩</span>RSVP</div>
          <div class="flex flex-col items-center gap-1"><span class="text-lg">⏳</span>Cuenta</div>
       </div>
       <div class="grid grid-cols-3 gap-2 text-center text-[10px] mb-4 text-[#b34f83] font-bold uppercase border-2 border-green-900">
          <div class="flex flex-col items-center gap-1"><span class="text-lg">📍</span>Mapa</div>
          <div class="flex flex-col items-center gap-1"><span class="text-lg">📩</span>RSVP</div>
          <div class="flex flex-col items-center gap-1"><span class="text-lg">⏳</span>Cuenta</div>
       </div>


    </div>

    <!-- Botones a Demos -->
    <div class="flex flex-col gap-3 pt-2">
      <a href="https://bautizobasico.netlify.app/" class="flex self-center justify-center items-center bg-[#b34f83] text-white w-[75%] py-3 rounded-xl text-[1.25rem]  uppercase  active:scale-95 transition-all">
        INVITACION BASICA 
      </a>
      <a href="https://sobre-fatima.netlify.app/" class="flex self-center justify-center items-center bg-[#b34f83] text-white w-[75%] py-3 rounded-xl text-[1.25rem]  uppercase  active:scale-95 transition-all">
        INVITACION ESTANDAR 
      </a>
      <a href="https://pruebaboda.netlify.app/" class="flex self-center justify-center items-center bg-[#b34f83] text-white w-[75%] py-3 rounded-xl text-[1.25rem]  uppercase  active:scale-95 transition-all">
        INVITACION PREMIUM
      </a>
    </div>
  </div>
`;

/**
 * CARGA DE GALERÍA PRINCIPAL (HERO)
 */
async function cargarGaleria() {
    const track = document.getElementById('carousel-track');
    const { data: trabajos, error } = await supabase.from('trabajos').select('*').order('created_at', { ascending: false });

    if (error || !trabajos) return;

    trabajos.forEach((trabajo) => {
        const { data: { publicUrl } } = supabase.storage.from(BUCKET_NAME).getPublicUrl(trabajo.image_name);
        const slide = document.createElement('div');
        slide.className = 'relative flex-shrink-0 w-full h-full';
        slide.innerHTML = `
            <img src="${publicUrl}" class="w-full h-full object-cover" alt="${trabajo.title}">
            <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white/80 to-transparent font-[one]">
                <span class="px-3 py-1 bg-[#b34f83] text-[10px] text-white uppercase tracking-widest rounded-full font-bold">Recién entregado</span>
                <h3 class="text-black text-[1.35rem] font-bold leading-tight mt-2">${trabajo.title}</h3>
                <p class="text-gray-600 text-sm font-medium mt-1 max-w-[75%]">${trabajo.description}</p>
            </div>
        `;
        track.appendChild(slide);
    });

    if (track.children.length > 0) {
        track.appendChild(track.children[0].cloneNode(true));
        iniciarAnimacionGaleria(trabajos.length);
    }
}

function iniciarAnimacionGaleria(totalImagenes) {
    const track = document.getElementById('carousel-track');
    const tl = gsap.timeline({ repeat: -1 });
    for (let i = 1; i <= totalImagenes; i++) {
        tl.to(track, { xPercent: -(100 * i), duration: 1.5, ease: "expo.inOut", delay: 3 });
    }
}

/**
 * LÓGICA DE TABS Y CAMBIO DE CONTENIDO
 */
function switchContent(template) {
  gsap.to(dynamicContent, {
    opacity: 0, y: 20, duration: 0.3,
    onComplete: () => {
      dynamicContent.innerHTML = template;
      gsap.to(dynamicContent, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
    }
  });
}

function setActiveTab(active, inactive) {
  active.classList.add('bg-[#b34f83]', 'text-white', 'shadow-md');
  active.classList.remove('bg-transparent', 'text-gray-400');
  inactive.classList.add('bg-transparent', 'text-gray-400');
  inactive.classList.remove('bg-[#b34f83]', 'text-white', 'shadow-md');
}

/**
 * MODAL WHATSAPP
 */
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

/**
 * INICIALIZACIÓN
 */
document.addEventListener('DOMContentLoaded', () => {
    cargarGaleria();
    
    // Animación inicial de la máscara
    if(document.getElementById('invitacion-masked')) {
        gsap.fromTo("#invitacion-masked", 
          { maskSize: "0%", webkitMaskSize: "0%", scale: 1.2 }, 
          { maskSize: "100%", webkitMaskSize: "100%", scale: 1, duration: 2, ease: "power2.out", delay: 0.5 }
        );
    }

    // Carga inicial de contenido dinámico
    dynamicContent.innerHTML = templateFisicas;
    gsap.set(dynamicContent, { opacity: 1 });

    // Listeners de los Tabs
    btnFisicas?.addEventListener('click', () => {
      setActiveTab(btnFisicas, btnDigitales);
      switchContent(templateFisicas);
    });

    btnDigitales?.addEventListener('click', () => {
      setActiveTab(btnDigitales, btnFisicas);
      switchContent(templateDigitales);
    });

    // Modal Listeners
    whatsappBtn?.addEventListener('click', openWhatsappModal);
    closeBtn?.addEventListener('click', closeWhatsappModal);
    modalOverlay?.addEventListener('click', closeWhatsappModal);
});