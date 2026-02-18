export const templateFisicas = `
  <div class="space-y-6 w-full px-6">
    <h4 class="text-[#b34f83] font-[play] text-[1.75rem] font-bold uppercase">La elegancia de lo tangible</h4>
    <p class="text-gray-500 text-[1.2rem] text-justify font-[one]">
      Creamos invitaciones únicas y personalizadas...
    </p>

    <div class="swiper fisicasSwiper w-full">
  <div id="track-fisicas" class="swiper-wrapper">
         <!-- Se llena dinámicamente -->
      </div>
      <div class="swiper-pagination !relative !mt-4"></div>
    </div>
  </div>
`;

export const templateDigitales = `
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
