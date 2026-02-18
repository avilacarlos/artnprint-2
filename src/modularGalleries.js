import Swiper from 'swiper';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import { supabase, BUCKET_ID } from './supabaseClient';

// Importamos solo lo necesario para no sobrecargar
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

/**
 * Función Maestra Modular
 * @param {string} trackId - ID del contenedor de los slides
 * @param {string} categoria - Nombre de la carpeta en Supabase
 */
export async function inicializarGaleriaPremium(trackId, categoria) {
    const track = document.getElementById(trackId);
    if (!track) return;

    const { data: items, error } = await supabase
        .from('galeria_items')
        .select('*')
        .eq('categoria', categoria)
        .order('created_at', { ascending: false });

    if (error || !items || items.length === 0) {
        track.innerHTML = '<div class="swiper-slide text-center p-10 text-gray-400">Próximamente...</div>';
        return;
    }

    // Construcción del HTML con clases ÚNICAS (prefijo ap-card)
    track.innerHTML = items.map(item => {
        // Obtenemos URL (detecta si es link o nombre de archivo)
        const url = item.imagen_url.startsWith('http') ? item.imagen_url : 
            supabase.storage.from(BUCKET_ID).getPublicUrl(`artnprint/img/${categoria}/${item.imagen_url}`).data.publicUrl;

        return `
            <div class="swiper-slide ap-card-container">
                <div class="ap-card-wrapper">
                    <img src="${url}" class="ap-card-img" alt="${item.titulo}">
                    <div class="ap-card-info">
                        <h4 class="ap-card-title">${item.titulo || ''}</h4>
                        <p class="ap-card-desc">${item.descripcion || ''}</p>
                    </div>
                </div>
            </div>`;
    }).join('');

    // Inicialización de Swiper con Effect Coverflow (3D)
    const swiperContainer = track.closest('.ap-modular-swiper');
    new Swiper(swiperContainer, {
        modules: [Pagination, EffectCoverflow],
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: items.length > 2,
        coverflowEffect: {
            rotate: 35,   // Rotación de las tarjetas laterales
            stretch: 0,   // Espaciado
            depth: 100,   // Profundidad 3D
            modifier: 1,
            slideShadows: true, // Sombras internas de las tarjetas
        },
        pagination: {
            el: '.ap-pagination',
            clickable: true,
            dynamicBullets: true
        },
        // Esto es CLAVE para que funcione dentro de acordeones:
        observer: true,
        observeParents: true
    });
}