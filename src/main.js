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
       
       <!-- ITEM 1 -->
       <div class="flex items-start w-full mb-6 gap-4">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="cal.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0"> <!-- min-w-0 es clave para que el texto respete el ancho -->
            <div class="uppercase text-[1.1rem] font-black text-[#b34f83] leading-none mb-1">Entrega rápida</div>
            <div class="uppercase text-gray-500 text-[0.85rem] leading-tight font-medium">Podemos entregar entre 3 y 8 días</div>
          </div>
       </div>

       <!-- ITEM TEMATICA -->
       <div class="flex items-start w-full mb-6 gap-4">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="maps.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="uppercase text-[1.1rem] font-black text-[#b34f83] leading-none mb-1">TEMATICA</div>
            <div class="uppercase text-gray-500 text-[0.85rem] leading-tight font-medium">
            Elige la temática que mejor refleje tu evento: romántica, moderna, clásica o festiva.</div>
          </div>
       </div>

       <!-- ITEM CUENTA -->
       <div class="flex items-start w-full mb-6 gap-4">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="reloj.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="uppercase text-[1.1rem] font-black text-[#b34f83] leading-none mb-1">Cuenta regresiva</div>
            <div class="uppercase text-gray-500 text-[0.85rem] leading-tight font-medium">Reloj en tiempo real para la fecha y hora del evento.</div>
          </div>
       </div>

       <!-- ITEM GPS -->
       <div class="flex items-start w-full gap-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="gps.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="uppercase text-[1.1rem] font-black text-[#b34f83] leading-none mb-1">Ubicación GPS</div>
            <div class="uppercase text-gray-500 text-[0.85rem] leading-tight font-medium">Indicaciones exactas para llegar a la iglesia y al salón.</div>
          </div>
       </div>
       
       <!-- ITEM RSVP -->
       <div class="flex items-start w-full gap-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="maps.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="uppercase text-[1.1rem] font-black text-[#b34f83] leading-none mb-1">RSVP</div>
            <div class="uppercase text-gray-500 text-[0.85rem] leading-tight font-medium">
            Tendras todas las confirmaciones de tus invitados en un solo lugar.</div>
          </div>
       </div>
       
       <!-- ITEM DRESSCODE -->
       <div class="flex items-start w-full gap-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="maps.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="uppercase text-[1.1rem] font-black text-[#b34f83] leading-none mb-1">DRESS CODE</div>
            <div class="uppercase text-gray-500 text-[0.85rem] leading-tight font-medium">
            Informa a tus invitados del tipo de vestimenta que deben usar.</div>
          </div>
       </div>

       <!-- ITEM FOTOS -->
       <div class="flex items-start w-full gap-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="maps.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="uppercase text-[1.1rem] font-black text-[#b34f83] leading-none mb-1">FOTOGRAFÍAS</div>
            <div class="uppercase text-gray-500 text-[0.85rem] leading-tight font-medium">
            La invitación puede llevar fotografías para dar un toque íntimo y especial a tu invitación.</div>
          </div>
       </div>

       <!-- ITEM MUSICA -->
       <div class="flex items-start w-full gap-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="maps.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="uppercase text-[1.1rem] font-black text-[#b34f83] leading-none mb-1">MUSICA</div>
            <div class="uppercase text-gray-500 text-[0.85rem] leading-tight font-medium">
            Agrega la canción perfecta para ambientar tu invitación.</div>
          </div>
       </div>

       <!-- ITEM PERSONALIZACION -->
       <div class="flex items-start w-full gap-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="maps.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="uppercase text-[1.1rem] font-black text-[#b34f83] leading-none mb-1">PERSONALIZACION</div>
            <div class="uppercase text-gray-500 text-[0.85rem] leading-tight font-medium">
            Cada invitación lleva el nombre de tu invitado, creando un detalle exclusivo y especial.</div>
          </div>
       </div>

       <!-- ITEM GALERIA COMPARTIDA -->
       <div class="flex items-start w-full gap-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="maps.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="uppercase text-[1.1rem] font-black text-[#b34f83] leading-none mb-1">GALERIA COMPARTIDA</div>
            <div class="uppercase text-gray-500 text-[0.85rem] leading-tight font-medium">
            Un espacio exclusivo donde tus invitados suben y disfrutan las fotos del gran día.</div>
          </div>
       </div>

       <!-- ITEM ENVIO -->
       <div class="flex items-start w-full gap-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="maps.svg" alt="icono">
          </div>
          <div class="flex-1 min-w-0">
            <div class="uppercase text-[1.1rem] font-black text-[#b34f83] leading-none mb-1">ENVIO ILIMITADO</div>
            <div class="uppercase text-gray-500 text-[0.85rem] leading-tight font-medium">
            Envía tu invitación por WhatsApp tantas veces como quieras, sin restricciones.</div>
          </div>
       </div>



    </div>

    <!-- Botones a Demos -->
    <p class="mr-4 p-3 self-center text-left w-[100%] [#b34f83] text-[1.75rem] font-[one] flex items-start  uppercase py-2 z-10">
    ejemplos de nuestras invitaciones digitales
        </p>
    <div class="flex flex-col gap-4  w-full items-center">

        <!-- Boton basica -->  
    
      <div class="w-full h-auto bg-[#ffffff50] p-4 rounded-2xl border border-[#b34f8320] shadow-inner flex flex-col items-center">
        <a href="https://bautizobasico.netlify.app/" target="_blank" class="flex justify-center items-center bg-[#b34f83] text-white w-[85%] py-4 rounded-2xl text-[1.1rem] font-bold uppercase shadow-lg active:scale-95 transition-all">
        Invitación Básica 
        </a>
        <p class=" w-[85%] text-gray-500 text-[1.2rem] font-[one] flex items-center text-justify pt-4 z-10">
        Esta invitación se personaliza con los detalles del evento y puede incluir los personajes favoritos del festejado, creando una experiencia alegre y cercana.
        Perfecta para Bautizos, Primeras Comuniones y fiestas infantiles.
      </div>
      
      <!-- Boton estandar -->  
      <div class="w-full h-auto bg-[#ffffff50] p-4 rounded-2xl border border-[#b34f8320] shadow-inner flex flex-col items-center">
        <a href="https://sobre-fatima.netlify.app/" target="_blank" class="flex justify-center items-center bg-[#b34f83] text-white w-[85%] py-4 rounded-2xl text-[1.1rem] font-bold uppercase shadow-lg active:scale-95 transition-all">
        Invitación Estandar
        </a>
        <p class=" w-[85%] text-gray-500 text-[1.2rem] font-[one] flex items-center text-justify pt-4 z-10">
        Ideal para quienes buscan un diseño más elaborado y emotivo, con animaciones suaves, transiciones encantadoras y una presentación envolvente.</p>
        
        <p class=" w-[85%] text-gray-500 text-[1.2rem] font-[one] flex items-center text-justify pt-4 z-10">
         Ofrece una experiencia cuidada y profesional, sin requerir los elementos más complejos de la opción premium. Es perfecta para Bodas y XV Años con pocos invitados donde se quiere transmitir calidez y estilo.</p>
      </div>
      
      <!-- Boton premium -->  
      <div class="w-full h-auto bg-[#ffffff50] p-4 rounded-2xl border border-[#b34f8320] shadow-inner flex flex-col items-center">
        <a href="https://pruebaboda.netlify.app/" target="_blank" class="flex justify-center items-center bg-[#b34f83] text-white w-[85%] py-4 rounded-2xl text-[1.1rem] font-bold uppercase shadow-lg active:scale-95 transition-all">
        Invitación Premium
        </a>
        <p class=" w-[85%] text-gray-500 text-[1.2rem] font-[one] flex items-center text-justify pt-4 z-10">
        La experiencia más completa, recomendada para Bodas y XV Años con muchos invitados.</p>
        
        <p class=" w-[85%] text-gray-500 text-[1.2rem] font-[one] flex items-center text-justify pt-4 z-10">
         Incluye efectos, animaciones avanzadas, música, formulario para confirmar asistencia, galeria de fotos, acceso a la mesa de regalos con tan solo un click, haciendo que cada invitado se sienta especial.</p>
      </div>
    </div>
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
if (document.getElementById('invitacion-masked')) {
  let tl = gsap.timeline();

  tl.fromTo("#invitacion-masked",
    { maskSize: "0%", webkitMaskSize: "0%", scale: 1.2 },
    { maskSize: "125%", webkitMaskSize: "125%", scale: 1, duration: 3.5, ease: "power2.out" }
  )
  .to("#invitacion-masked", 
    { maskSize: "100%", webkitMaskSize: "100%", scale: 1, duration: 1, ease: "bounce.out" }
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