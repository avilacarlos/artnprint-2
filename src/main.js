import './style.css' 
import { createClient } from '@supabase/supabase-js'
import gsap from 'gsap'

// ==========================================
// 1. CONFIGURACIÓN E INICIALIZACIÓN
// ==========================================

const supabaseUrl = 'https://tzxlswhksrftjcbnrzwb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6eGxzd2hrc3JmdGpjYm5yendiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1OTM4MTEsImV4cCI6MjA4MTE2OTgxMX0.UqUMHDHtfjn9Ps7xPwrj9QVhKF2cJy1elIgg0eckr_E' 

// Nombres de tus Buckets/Carpetas en Supabase
const BUCKET_ID = 'artnprint2' // El nombre principal del bucket

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Referencias al DOM
const btnFisicas = document.getElementById('btn-fisicas');
const btnDigitales = document.getElementById('btn-digitales');
const dynamicContent = document.getElementById('dynamic-content');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalCard = document.getElementById('modal-card');
const whatsappBtn = document.getElementById('whatsapp-trigger');
const closeBtn = document.getElementById('close-modal');

// ==========================================
// 2. PLANTILLAS HTML
// ==========================================

const templateFisicas = `
  <div class="space-y-6 w-full px-6">
    <h4 class="text-[#b34f83] font-[play] text-[1.75rem] font-bold uppercase">La elegancia de lo tangible</h4>
    <p class="text-gray-500 text-[1.2rem] text-justify font-[one]">
      Creamos invitaciones únicas y personalizadas para todo tipo de evento, desde diseños originales y poco convencionales
      que sorprenderán a tus invitados, hasta invitaciones discretas, elegantes y clásicas que reflejan el estilo de tu evento.
    </p>
    <p class="text-gray-500 text-[1.2rem] text-justify font-[one]">
      Somos expertos y trabajaremos contigo para crear la invitación que se adapte a tus necesidades.
    </p>
    <p class="text-[#b34f83] text-[1.2rem] text-justify font-[one]">
      Estos son algunos ejemplos que podrían servirte de inspiración:
    </p>

    <!-- CONTENEDOR PRINCIPAL DEL SLIDER -->
    <div class="relative w-full h-[350px] group mt-4">
      
      <!-- Degradado Izquierdo -->
      <div class="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      
      <!-- Degradado Derecho -->
      <div class="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <!-- TRACK DEL SLIDER (Aquí se inyectan las fotos) -->
      <div id="track-fisicas" class="flex overflow-x-auto w-full h-full gap-4 snap-x snap-mandatory px-6 pb-2 scroll-smooth" style="scrollbar-width: none; -ms-overflow-style: none;">
      
        <!-- Placeholder de carga -->
        <div class="w-full h-full flex items-center justify-center text-gray-300 font-[one]">Cargando galería...</div>
      </div>
      
      <!-- Indicador de deslizamiento -->
      <div class="absolute bottom-4 right-1/2 translate-x-1/2 bg-white/80 backdrop-blur px-3 py-1 rounded-full shadow text-xs text-[#b34f83] font-bold pointer-events-none opacity-80 animate-pulse">
        ← Desliza →
      </div>
    </div>
  </div>
`;

const templateDigitales = `
  
  <div class="space-y-6 w-full px-4"> <!-- Bajamos un poco el px para ganar espacio interno -->
    <h4 class="text-[#b34f83] font-[play] font-bold text-[1.75rem] uppercase leading-tight">Interactividad y modernidad</h4>
    
    <div class="space-y-4 text-gray-500 text-[1.1rem] text-justify font-[one] leading-relaxed">
      <p>Sabemos lo importante que es para ti que cada detalle de tu evento sea único y especial.</p>
      <p>Estas invitaciones no solo te permiten ser más respetuoso con el medio ambiente, sino que también te brindan la oportunidad de diseñar algo verdaderamente personal.</p>
      <p>Con nuestras opciones digitales, puedes incluir animaciones, música, y enlaces interactivos.</p>
    </div>
    
    <!-- CARD DE BONDADES CORREGIDA -->
    <div class="w-full h-auto bg-white p-5 rounded-2xl border border-[#b34f8320] shadow-inner flex flex-col items-center">
       <p class="text-[1.1rem] uppercase tracking-widest text-gray-400 mb-6 text-center font-bold">Bondades Digitales</p>
       
       <!-- ITEM ENTREGA -->
       <div class="flex items-start w-full mb-6 gap-4">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="cal.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0"> <!-- min-w-0 es clave para que el texto respete el ancho -->
            <div class="item-titulo">Entrega rápida</div>
            <div class="item-texto">Podemos entregar entre 3 y 8 días</div>
          </div>
       </div>

       <!-- ITEM TEMATICA -->
       <div class="flex items-start w-full mb-6 gap-4">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="maps.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="item-titulo">TEMATICA</div>
            <div class="item-texto">
            Elige la temática que mejor refleje tu evento: romántica, moderna, clásica o festiva.</div>
          </div>
       </div>

       <!-- ITEM CUENTA -->
       <div class="flex items-start w-full mb-6 gap-4">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="reloj.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="item-titulo">Cuenta regresiva</div>
            <div class="item-texto">Reloj en tiempo real para la fecha y hora del evento.</div>
          </div>
       </div>

       <!-- ITEM GPS -->
       <div class="flex items-start w-full gap-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="gps.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="item-titulo">Ubicación GPS</div>
            <div class="item-texto">Indicaciones exactas para llegar a la iglesia y al salón.</div>
          </div>
       </div>
       
       <!-- ITEM RSVP -->
       <div class="flex items-start w-full gap-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="maps.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="item-titulo">RSVP</div>
            <div class="item-texto">
            Tendras todas las confirmaciones de tus invitados en un solo lugar.</div>
          </div>
       </div>
       
       <!-- ITEM DRESSCODE -->
       <div class="flex items-start w-full gap-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="maps.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="item-titulo">DRESS CODE</div>
            <div class="item-texto">
            Informa a tus invitados del tipo de vestimenta que deben usar.</div>
          </div>
       </div>

       <!-- ITEM FOTOS -->
       <div class="flex items-start w-full gap-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="maps.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="item-titulo">FOTOGRAFÍAS</div>
            <div class="item-texto">
            La invitación puede llevar fotografías para dar un toque íntimo y especial a tu invitación.</div>
          </div>
       </div>

       <!-- ITEM MUSICA -->
       <div class="flex items-start w-full gap-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="maps.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="item-titulo">MUSICA</div>
            <div class="item-texto">
            Agrega la canción perfecta para ambientar tu invitación.</div>
          </div>
       </div>

       <!-- ITEM PERSONALIZACION -->
       <div class="flex items-start w-full gap-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="maps.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="item-titulo">PERSONALIZACION</div>
            <div class="item-texto">
            Cada invitación lleva el nombre de tu invitado, creando un detalle exclusivo y especial.</div>
          </div>
       </div>

       <!-- ITEM GALERIA COMPARTIDA -->
       <div class="flex items-start w-full gap-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="maps.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="item-titulo">GALERIA COMPARTIDA</div>
            <div class="item-texto">
            Un espacio exclusivo donde tus invitados suben y disfrutan las fotos del gran día.</div>
          </div>
       </div>

       <!-- ITEM ENVIO -->
       <div class="flex items-start w-full gap-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="maps.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="item-titulo">ENVIO ILIMITADO</div>
            <div class="item-texto">
            Envía tu invitación por WhatsApp tantas veces como quieras, sin restricciones.</div>
          </div>
       </div>



    </div>

    <!-- Botones a Demos -->
    <p class="titulo-derecha">
    ejemplos de nuestras invitaciones
        </p>
    <div class="flex flex-col gap-4  w-full items-center">

    


      
      <!-- Boton basico -->  
      <div class="w-full h-auto bg-[#ffffff50] p-4  rounded-2xl border border-[#b34f8320] shadow-inner flex flex-col items-center">
        
        <p class="textos-btn-digital">
        Esta invitación se personaliza con los detalles del evento y puede incluir los personajes favoritos del festejado, creando una experiencia alegre y cercana.</p>
        
        <p class="textos-btn-digital">
         Perfecta para Bautizos, Primeras Comuniones y fiestas infantiles.</p>

         <a href="https://sobre-fatima.netlify.app/" target="_blank" class="titulo-btn">
        Invitación Basica
        </a>
      </div>

      <!-- Boton estandar -->  
      <div class="w-full h-auto bg-[#ffffff50] p-4 rounded-2xl border border-[#b34f8320] shadow-inner flex flex-col items-center">
        
        <p class="textos-btn-digital">
        Ideal para quienes buscan un diseño más elaborado y emotivo, con animaciones suaves, transiciones encantadoras y una presentación envolvente.</p>
        
        <p class=" textos-btn-digital">
         Ofrece una experiencia cuidada y profesional, sin requerir los elementos más complejos de la opción premium. Es perfecta para Bodas y XV Años con pocos invitados donde se quiere transmitir calidez y estilo.</p>

         <a href="https://sobre-fatima.netlify.app/" target="_blank" class="titulo-btn">
        Invitación Estandar
        </a>
      </div>
      
      <!-- Boton premium -->  
      <div class="w-full h-auto bg-[#ffffff50] p-4 rounded-2xl border border-[#b34f8320] shadow-inner flex flex-col items-center">
        
        <p class=" textos-btn-digital">
        La experiencia más completa, recomendada para Bodas y XV Años con muchos invitados.</p>
        
        <p class=" textos-btn-digital">
         Incluye efectos, animaciones avanzadas, música, formulario para confirmar asistencia, galeria de fotos, acceso a la mesa de regalos con tan solo un click, haciendo que cada invitado se sienta especial.</p>
         <a href="https://pruebaboda.netlify.app/" target="_blank" class="titulo-btn">
        Invitación Premium
        </a>
      </div>
    </div>
  </div>      
</div>
`;

// ==========================================
// 3. LÓGICA DE SUPABASE (HERO Y FÍSICAS)
// ==========================================

// 3.1 Cargar Galería Hero (Principal)
async function cargarGaleria() {
    const track = document.getElementById('carousel-track');
    const { data: trabajos, error } = await supabase.from('trabajos').select('*').order('created_at', { ascending: false });

    if (error || !trabajos) return;

    trabajos.forEach((trabajo) => {
        // Asumiendo que estas imágenes están en la carpeta 'inicio' o raíz
        const { data: { publicUrl } } = supabase.storage.from(BUCKET_ID).getPublicUrl(`inicio/${trabajo.image_name}`);
        
        const slide = document.createElement('div');
        slide.className = 'relative flex-shrink-0 w-full h-full';
        slide.innerHTML = `
            <img src="${publicUrl}" class="w-full h-full object-cover z-40" alt="${trabajo.title}">
            <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white/80 to-transparent font-[one] z-50">
                <span class="px-4 py-2 bg-[#b34f83] text-[.75rem] text-white uppercase tracking-widest rounded-full font-bold">Recién entregado</span>
                <h3 class="text-black text-[1.5rem] font-bold leading-tight mt-2">${trabajo.title}</h3>
                <p class="text-gray-600 text-[1.1rem] font-medium mt-1 max-w-[75%]">${trabajo.description}</p>
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

// 3.2 Cargar Galería Físicas (Nuevo Slider)
async function cargarFisicas() {
    const track = document.getElementById('track-fisicas');
    
    // Si no estamos en la pestaña Físicas, no hacemos nada
    if (!track) return;

    // Consulta a la tabla 'fisicas'
    const { data: fisicas, error } = await supabase
        .from('fisicas')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error("Error cargando físicas:", error);
        track.innerHTML = '<div class="text-red-400 p-4">Error al cargar galería</div>';
        return;
    }

    // Limpiar placeholder
    track.innerHTML = '';

    fisicas.forEach((trabajo) => {
        // Generar URL pública. Asumimos carpeta 'fisicas/' dentro del bucket
        // Si no usas carpeta, quita el "fisicas/" del string
        const { data: { publicUrl } } = supabase.storage
            .from(BUCKET_ID)
            .getPublicUrl(`fisicas/${trabajo.image_name}`);

        const img = document.createElement('img');
        img.className = 'snap-center shrink-0 w-[85%] h-full object-cover rounded-2xl shadow-md border border-gray-100 bg-gray-50';
        img.src = publicUrl;
        img.alt = trabajo.title || 'Invitación';
        img.loading = "lazy"; // Carga diferida para optimizar velocidad
        
        track.appendChild(img);
    });
}

// ==========================================
// 4. LÓGICA DE NAVEGACIÓN (TABS)
// ==========================================

function switchContent(template, callback) {
  gsap.to(dynamicContent, {
    opacity: 0, y: 20, duration: 0.3,
    onComplete: () => {
      dynamicContent.innerHTML = template;
      // Si hay una función para ejecutar (como cargarFisicas), la ejecutamos
      if (callback) callback();
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

// ==========================================
// 5. MODAL WHATSAPP
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

// ==========================================
// 6. INICIALIZACIÓN (DOM READY)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar Hero siempre
    cargarGaleria();
    
    // 2. Animación Máscara (Invitación Principal)
    if (document.getElementById('invitacion-masked')) {
      let tl = gsap.timeline();
      tl.fromTo("#invitacion-masked",
        { maskSize: "0%", webkitMaskSize: "0%", scale: 1.2 },
        { maskSize: "225%", webkitMaskSize: "=225%", scale: 1, duration: 3.5, ease: "power2.out" }
      )
      .to("#invitacion-masked", 
        { maskSize: "125%", webkitMaskSize: "=125%", scale: 1, duration: 1, ease: "bounce.out" }
      );
    }

    // 3. Cargar Tab Inicial (Físicas)
    dynamicContent.innerHTML = templateFisicas;
    gsap.set(dynamicContent, { opacity: 1 });
    cargarFisicas(); // Cargar imágenes inmediatamente

    // 4. Listeners Tabs
    btnFisicas?.addEventListener('click', () => {
      setActiveTab(btnFisicas, btnDigitales);
      // Pasamos cargarFisicas como callback
      switchContent(templateFisicas, cargarFisicas);
    });

    btnDigitales?.addEventListener('click', () => {
      setActiveTab(btnDigitales, btnFisicas);
      switchContent(templateDigitales);
    });

    // 5. Listeners Modal
    whatsappBtn?.addEventListener('click', openWhatsappModal);
    closeBtn?.addEventListener('click', closeWhatsappModal);
    modalOverlay?.addEventListener('click', closeWhatsappModal);
});