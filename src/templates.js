/**
 * TEXTOS Y ESTRUCTURA PARA INVITACIONES FÍSICAS
 */
export const templateFisicas = `
  <div class="space-y-6 w-full py-4 animate-fadeIn">
    <div class="px-6 text-center">
         <div class="relative">
      <p class="text-gray-500 text-[1.1rem] font-[one] mt-4 text-justify">
        Creamos invitaciones únicas y personalizadas para todo tipo de evento, desde diseños originales y poco convencionales que sorprenderán a tus invitados, hasta invitaciones discretas, elegantes y clásicas que reflejan el estilo de tu evento.
      </p>

      <p class="text-gray-500 text-[1.1rem] font-[one] mt-4 text-justify">
        Somos expertos y trabajaremos contigo para crear la invitación que se adapte a tus necesidades y refleje el estilo y la personalidad de tu evento. Utilizamos materiales de alta calidad y técnicas clásicas y modernas de impresión para asegurarnos de que tus invitaciones encantarán y dejaran una impresión duradera en tus invitados.
      </p>
      <img src="flor01.svg" alt="Decoración" class="w-[75%] h-auto opacity-50 absolute bottom-0 -right-10 z-[-1]">
    </div>
    </div>

    <!-- Galería 3D -->
    <div class="swiper ap-modular-swiper w-full">
        <div id="track-fisicas" class="swiper-wrapper"></div>
        <div class="ap-pagination swiper-pagination"></div>
    </div>
  </div>
`;

/**
 * TEXTOS Y ESTRUCTURA PARA OTRAS CATEGORÍAS (Ejemplo: Vasos)
 * Puedes copiar y pegar esto para Tazas, Recuerdos, etc.
 */
export const templateVasos = `
  <div class="space-y-6 w-full py-4 animate-fadeIn">
    <div class="px-6 text-center">
      <h4 class="text-[#b34f83] font-[play] text-[1.75rem] font-bold uppercase leading-tight">Vasos Personalizados</h4>
      <p class="text-gray-500 text-[1.1rem] font-[one] mt-4 text-center">
        Un recuerdo útil y moderno para tus invitados. Personalizamos cada detalle.
      </p>
    </div>

    <div class="swiper ap-modular-swiper w-full">
        <div id="track-vasos" class="swiper-wrapper"></div>
        <div class="ap-pagination swiper-pagination"></div>
    </div>
  </div>
`;


export const templateDigitales = `
<div class="space-y-6 w-full px-4 animate-fadeIn">
    <h4 class="text-[#b34f83] font-[play] font-bold text-[1.75rem] uppercase leading-tight">Interactividad y modernidad</h4>
    
    <div class="space-y-4 text-gray-500 text-[1.1rem] text-justify font-[one] leading-relaxed">
      <p>Nuestras opciones digitales te brindan la oportunidad de diseñar algo verdaderamente personal con animaciones, música y enlaces interactivos.</p>
    </div>
    
    <!-- CARD DE BONDADES -->
    <div class="w-full h-auto bg-white p-5 rounded-3xl border border-[#b34f8310] shadow-sm flex flex-col gap-6">
       <p class="text-[1.1rem] uppercase tracking-widest text-gray-400 text-center font-bold">Bondades Digitales</p>
       
       ${renderItem('Entrega rápida', 'Podemos entregar entre 3 y 8 días', 'cal.svg')}
       ${renderItem('RSVP', 'Confirmaciones de tus invitados en un solo lugar', 'maps.svg')}
       ${renderItem('Ubicación GPS', 'Indicaciones exactas para la iglesia y el salón', 'gps.svg')}
       ${renderItem('Envío Ilimitado', 'Envía por WhatsApp tantas veces como quieras', 'maps.svg')}
    </div>

    <p class="titulo-derecha mt-8">Ejemplos de demos</p>
    
    <div class="flex flex-col gap-4 w-full">
      ${renderDemoBtn('Invitación Básica', 'Ideal para Bautizos y Cumpleaños', 'https://sobre-fatima.netlify.app/')}
      ${renderDemoBtn('Invitación Premium', 'Experiencia completa para Bodas y XV', 'https://pruebaboda.netlify.app/')}
    </div>
</div>
`;

// Funciones auxiliares para no repetir tanto código HTML
function renderItem(titulo, texto, icon) {
    return `
    <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-12 h-12 bg-[#b34f8308] rounded-2xl flex items-center justify-center p-2">
            <img src="${icon}" class="w-full h-full object-contain">
        </div>
        <div>
            <div class="item-titulo text-[#b34f83] font-bold uppercase text-[1rem]">${titulo}</div>
            <div class="item-texto text-gray-400 text-[0.9rem]">${texto}</div>
        </div>
    </div>`;
}

function renderDemoBtn(titulo, desc, link) {
    return `
    <div class="w-full bg-white p-5 rounded-3xl border border-[#b34f8310] shadow-sm flex flex-col items-center text-center">
        <p class="text-gray-500 font-[one] mb-4">${desc}</p>
        <a href="${link}" target="_blank" class="titulo-btn">${titulo}</a>
    </div>`;
}