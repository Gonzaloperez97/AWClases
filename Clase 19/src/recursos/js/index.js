//import productosMascotas from "./productos.js" // -> no nombrada (default): el nombre lo elegimos nosotros
import { productosMascotas } from './productos.js' // -> nombrada: el nombre tiene que coincidir con el export
import { filtrarPorTalle, renderizarCatalogo } from './funciones.js'

// Utilizar un objeto disponible para acceder a HTML
// Referenciamos elementos del html
// (este mismo script se carga en todas las paginas, por eso cada elemento puede no existir: se verifica antes de usarlo)
const contenedorProductos = document.getElementById('contenedor-productos')
const botonEvento = document.getElementById('boton-evento')
const dialogo = document.getElementById('dialogo')
const botonMenu = document.querySelector('.boton-menu')
const menu = document.querySelector('.encabezado-principal nav')

// Catalogo (solo existe en catalogo.html)
if (contenedorProductos) {
    // Filtramos
    const productosFiltrados = filtrarPorTalle(productosMascotas, 'M')

    // Renderizamos
    renderizarCatalogo(contenedorProductos, productosFiltrados)
}

// Eventos
if (botonEvento && dialogo) {
    botonEvento.addEventListener('click', () => {
        dialogo.show()
    })
}

// Menu desplegable (solo se ve en pantallas chicas)
if (botonMenu && menu) {
    botonMenu.addEventListener('click', () => {
        const abierto = menu.classList.toggle('abierto')
        botonMenu.setAttribute('aria-expanded', abierto)
    })
}
