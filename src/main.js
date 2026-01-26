import './style.css'
import { createClient } from '@supabase/supabase-js'
import gsap from 'gsap'

// 1. CONFIGURACIÓN DE SUPABASE
// Sustituye estos valores con los tuyos (los encuentras en Settings -> API)
const supabaseUrl = 'https://tzxlswhksrftjcbnrzwb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6eGxzd2hrc3JmdGpjYm5yendiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1OTM4MTEsImV4cCI6MjA4MTE2OTgxMX0.UqUMHDHtfjn9Ps7xPwrj9QVhKF2cJy1elIgg0eckr_E' 
const BUCKET_NAME = 'artnprint2'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Función principal para cargar datos y renderizar la galería
 */
async function cargarGaleria() {
    const track = document.getElementById('carousel-track');

    // A. OBTENER DATOS DE LA TABLA (Título y Descripción)
    // Asumimos que tu tabla se llama 'trabajos'
    const { data: trabajos, error } = await supabase
        .from('trabajos')
        .select('*')
        .order('created_at', { ascending: false }); // Mostrar los más nuevos primero

    if (error) {
        console.error('Error al obtener datos de la tabla:', error);
        return;
    }

    if (!trabajos || trabajos.length === 0) {
        console.warn('No se encontraron registros en la tabla "trabajos"');
        return;
    }

    // B. RENDERIZAR CADA SLIDE
    trabajos.forEach((trabajo) => {
        // Obtenemos la URL pública de la imagen guardada en el Bucket
        const { data: { publicUrl } } = supabase
            .storage
            .from(BUCKET_NAME)
            .getPublicUrl(trabajo.image_name);

        // Creamos el contenedor del slide
        const slide = document.createElement('div');
        slide.className = 'relative w-full h-full flex-shrink-0';

        // Estructura: Imagen + Degradado + Texto
        slide.innerHTML = `
            <!-- Imagen de fondo -->
            <img src="${publicUrl}" 
         class="w-full h-full object-cover" 
         <!--style="-webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%); 
                mask-image: linear-gradient(to bottom, black 50%, transparent 100%);"-->
         alt="${trabajo.title}">
            
            

            <!-- Contenedor de Texto informativo -->
            <div class="absolute bottom-0 left-0 w-full p-6 mb-4  bg-gradient-to-t from-white  to-transparent">
                <span class=" px-3 py-1 bg-[#cf13d4] text-xs font-bold text-[#ffffff] uppercase tracking-widest rounded-full">Recién entregado</span>
                <h3 class="text-gray-900 text-3xl font-bold leading-tight mt-1">${trabajo.title}</h3>
                <p class="text-gray-700 text-sm mt-2 max-w-[80%]">${trabajo.description}</p>
            </div>
        `;
        
        track.appendChild(slide);
    });

    // C. TRUCO PARA BUCLE INFINITO
    // Clonamos el primer slide y lo ponemos al final para que el salto no se note
    if (track.children.length > 0) {
        const primerSlideClon = track.children[0].cloneNode(true);
        track.appendChild(primerSlideClon);
    }

    // D. INICIAR ANIMACIÓN CON GSAP
    iniciarAnimacion(trabajos.length);
}

/**
 * Configura el movimiento automático del carrusel
 */
function iniciarAnimacion(totalImagenes) {
    const track = document.getElementById('carousel-track');
    
    // Creamos una línea de tiempo infinita
    const tl = gsap.timeline({ repeat: -1 });

    // i comienza en 1 porque la posición 0 es la imagen inicial
    for (let i = 1; i <= totalImagenes; i++) {
        tl.to(track, {
            xPercent: -(100 * i), // Se mueve un 100% (una pantalla) a la izquierda
            duration: 1.5,        // Tiempo que tarda en deslizarse
            ease: "expo.inOut",   // Movimiento elegante (acelera y frena suave)
            delay: 3              // Tiempo que el cliente tiene para leer (3 seg)
        });
    }

    // Al llegar al final de las fotos reales, el timeline se repite instantáneamente 
    // volviendo a xPercent: 0 sin que se note gracias al clon.
}

// LANZAR TODO AL CARGAR LA PÁGINA
document.addEventListener('DOMContentLoaded', () => {
    cargarGaleria();
});