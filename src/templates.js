/**
 * ==========================================
 * 1. FUNCIONES AUXILIARES (HELPERS)
 * ==========================================
 */

const renderBondad = (titulo, texto, icon) => `
    <div class="flex items-start w-full mb-6 gap-4">
        <div class="flex-shrink-0 w-12 h-12 flex justify-center items-center bg-[#b34f8310] rounded-xl p-2">
            <img class="w-full h-full object-contain" src="${icon}" alt="icono">
        </div>
        <div class="flex-1 min-w-0">
            <div class="item-titulo text-[#b34f83] font-bold uppercase text-[1rem]">${titulo}</div>
            <div class="item-texto text-gray-500 text-[0.9rem] leading-tight">${texto}</div>
        </div>
    </div>
`;

const renderDemoBtn = (titulo, desc, link) => `
    <div class="w-full h-auto bg-[#ffffff50] p-6 rounded-[2rem] border border-[#b34f8320] shadow-inner flex flex-col items-center text-center">
        <p class="text-gray-500 text-[1.1rem] font-[one] mb-6 leading-snug">${desc}</p>
        <a href="${link}" target="_blank" class="titulo-btn">${titulo}</a>
    </div>
`;

/**
 * ==========================================
 * 2. TEMPLATE: INVITACIONES FÍSICAS
 * ==========================================
 */
export const templateFisicas = `
  <div class="space-y-6 w-full py-4 animate-fadeIn">
    <div class="px-6 text-center">
      <h4 class="text-[#b34f83] font-[play] text-[1.75rem] font-bold uppercase leading-tight">Invitaciones Físicas</h4>
      <p class="text-gray-500 text-[1.2rem] font-[one] mt-4 text-justify">
        Creamos invitaciones únicas y personalizadas para todo tipo de evento, desde diseños originales y poco convencionales hasta estilos discretos y clásicos.
      </p>
    </div>
    <div class="swiper ap-modular-swiper w-full">
        <div id="track-fisicas" class="swiper-wrapper"></div>
        <div class="ap-pagination swiper-pagination"></div>
    </div>
  </div>
`;

/**
 * ==========================================
 * 3. TEMPLATE: INVITACIONES DIGITALES
 * ==========================================
 */
export const templateDigitales = `
<div class="space-y-6 w-full px-4 animate-fadeIn">
    <h4 class="text-[#b34f83] font-[play] font-bold text-[1.75rem] uppercase leading-tight">Interactividad y modernidad</h4>
    <div class="w-full h-auto bg-white p-6 rounded-[2.5rem] border border-[#b34f8310] shadow-sm flex flex-col items-center">
       ${renderBondad('Entrega rápida', 'Podemos entregar entre 3 y 8 días.', 'cal.svg')}
       ${renderBondad('Confirmación RSVP', 'Gestiona tus invitados en un solo lugar.', 'maps.svg')}
       ${renderBondad('Ubicación GPS', 'Indicaciones exactas para la iglesia y el salón.', 'gps.svg')}
    </div>
    <div class="flex flex-col gap-6 w-full items-center mt-8">
      ${renderDemoBtn('Invitación Básica', 'Ideal para Bautizos y Cumpleaños.', 'https://bautizobasico.netlify.app/')}
      ${renderDemoBtn('Invitación Premium', 'La experiencia más completa.', 'https://pruebaboda.netlify.app/')}
    </div>
</div>
`;

/**
 * ==========================================
 * 4. NUEVAS CATEGORÍAS (PARA EVITAR EL ERROR)
 * ==========================================
 */

export const templateVasos = `
  <div class="space-y-6 w-full py-4 animate-fadeIn">
    <div class="px-6 text-center">
      <h4 class="text-[#b34f83] font-[play] text-[1.75rem] font-bold uppercase leading-tight">Vasos Personalizados</h4>
      <p class="text-gray-500 text-[1.1rem] font-[one] mt-2">Recuerdos útiles y modernos para tus eventos.</p>
    </div>
    <div class="swiper ap-modular-swiper w-full">
        <div id="track-vasos" class="swiper-wrapper"></div>
        <div class="ap-pagination swiper-pagination"></div>
    </div>
  </div>
`;

export const templateTazas = `
  <div class="space-y-6 w-full py-4 animate-fadeIn">
    <div class="px-6 text-center">
      <h4 class="text-[#b34f83] font-[play] text-[1.75rem] font-bold uppercase leading-tight">Tazas de Colección</h4>
      <p class="text-gray-500 text-[1.1rem] font-[one] mt-2">Un detalle clásico personalizado a tu gusto.</p>
    </div>
    <div class="swiper ap-modular-swiper w-full">
        <div id="track-tazas" class="swiper-wrapper"></div>
        <div class="ap-pagination swiper-pagination"></div>
    </div>
  </div>
`;

/**
 * GENERADOR GENÉRICO (Si prefieres usarlo en ui.js directamente)
 */
export const crearTemplateSeccion = (titulo, idTrack, descripcion = "") => {
    return `
    <div class="space-y-6 w-full py-4 animate-fadeIn">
        <div class="px-6 text-center">
            <h4 class="text-[#b34f83] font-[play] text-[1.75rem] font-bold uppercase leading-tight">${titulo}</h4>
            <p class="text-gray-500 text-[1.1rem] font-[one] mt-3">${descripcion}</p>
        </div>
        <div class="swiper ap-modular-swiper w-full">
            <div id="${idTrack}" class="swiper-wrapper"></div>
            <div class="ap-pagination swiper-pagination"></div>
        </div>
    </div>`;
};