
import hola from "./Productos"
import productosMascotas, {contenedorProductos,categorias} from "./Productos.js"

import {filtrarPorTalle,renderizarCatalogo} from "./Funciones.js"


// utilizamos un objeto disponible para acceder a HTML
// Referenciamos un elemento del html
const contenedorProductos = document.getElementById("contenedor-productos")

//filtramos
const productosFiltrados = filtrarPorTalle (productosMascotas,'S')

// renderizamos
renderizarCatalogo(contenedorProductos,productosFiltrados)

