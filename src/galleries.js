import Swiper from 'swiper';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import { supabase, BUCKET_ID } from './supabaseClient';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

/**
 * Función de apoyo para obtener la URL
 */
function obtenerURLFinal(item, subcarpeta) {
    if (!item || !item.imagen_url) return '';
    if (item.imagen_url.startsWith('http')) return item.imagen_url;
    const { data: { publicUrl } } = supabase.storage
        .from(BUCKET_ID)
        .getPublicUrl(`artnprint/img/${subcarpeta}/${item.imagen_url}`);
    return publicUrl;
}

/**
 * 1. CARGAR GALERÍA HERO
 */
export async function cargarHero() {
    const track = document.getElementById('carousel-track');
    const textContainer = document.getElementById('hero-text-content');
    if (!track) return;

    // CONSULTA: 'ascending: false' para que lo más reciente salga primero
    const { data: items, error } = await supabase
        .from('galeria_items')
        .select('*')
        .eq('categoria', 'inicio')
        .order('created_at', { ascending: false });

    if (error || !items) return;

    // Inyectar imágenes
    track.innerHTML = items.map(item => {
        const url = obtenerURLFinal(item, 'inicio');
        return `<div class="swiper-slide relative"><img src="${url}" class="w-full h-full object-cover">
        <div class="absolute bottom-0 left-0 w-full h-20 pointer-events-none bg-gradient-to-t from-white to-transparent"></div>
        </div>`;
    }).join('');

    

    // Función para actualizar el texto (incluyendo el Badge)
    const actualizarTexto = (index) => {
        const item = items[index];
        if (!textContainer || !item) return;

        textContainer.innerHTML = `
            ${item.es_recien ? `
                <span class="inline-block px-4 py-1 mb-3 bg-[#b34f83] text-[0.7rem] text-white uppercase tracking-widest rounded-full font-bold shadow-sm">
                    Recién entregado
                </span>` : ''}
            <h3 class="text-[#b34f83] text-[1.4rem] font-bold leading-tight uppercase font-[play]">${item.titulo || ''}</h3>
            <p class=" w-[80%] text-justify text-gray-600 text-[1rem] mt-2 font-[one] leading-snug">${item.descripcion || ''}</p>
        `;
    };

    const swiper = new Swiper('.heroSwiper', {
        modules: [Autoplay, Pagination, EffectFade],
        effect: 'fade',
        loop: true,
        autoplay: { delay: 4500, disableOnInteraction: false },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        on: {
            // Sincronizar texto usando el realIndex (necesario para el loop)
            slideChange: function () {
                actualizarTexto(this.realIndex);
            }
        }
    });
    
    // Cargar el primer texto manualmente al iniciar
    actualizarTexto(0);
}

/**
 * 2. CARGAR GALERÍA DINÁMICA (Acordeón)
 */
export async function cargarGaleriaDinamica(idTrack, categoriaFiltro) {
    const track = document.getElementById(idTrack);
    if (!track) return;

    // También ordenamos por fecha descendente aquí
    const { data: items } = await supabase
        .from('galeria_items')
        .select('*')
        .eq('categoria', categoriaFiltro)
        .order('created_at', { ascending: false });

    if (!items) return;

    track.innerHTML = items.map(item => {
        const url = obtenerURLFinal(item, categoriaFiltro);
        return `
            <div class="swiper-slide flex flex-col pb-10">
                <div class="relative w-full h-[350px] overflow-hidden rounded-3xl shadow-lg bg-gray-50">
                    <img src="${url}" class="w-full h-full object-cover">
                    ${item.es_recien ? `
                        <div class="absolute top-4 right-4 bg-[#b34f83] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                            NUEVO
                        </div>` : ''}
                </div>
                <div class="mt-4 px-2 text-center">
                    <h4 class="text-[#b34f83] font-bold text-xl uppercase font-[play]">${item.titulo || ''}</h4>
                    <p class="text-gray-500 text-sm mt-1 font-[one]">${item.descripcion || ''}</p>
                </div>
            </div>`;
    }).join('');

    const container = track.closest('.swiper');
    new Swiper(container, {
        modules: [Pagination, Navigation],
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 20,
        loop: items.length > 1,
        pagination: { el: '.swiper-pagination', clickable: true }
    });
}