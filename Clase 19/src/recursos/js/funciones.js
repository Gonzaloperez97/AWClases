function renderizarCatalogo(contenedor, productos) {
    let productosHTML = ''

    productos.forEach((producto) => { //--> el parametro producto es el elemento actuaL
        productosHTML += `
    <article>
    <h3>${producto.nombre}</h3>
    <picture>
        <img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.onerror=null; this.src='./recursos/imagenes/productos/sin-imagen.svg'">
    </picture>
    <p>
        ${producto.descripcion}
    </p>
    <ul>
        <li>
           Talles ${producto.talles.join(', ')}
        </li>
        <li>
            Precio $ ${producto.precio}
        </li>
    </ul>
    <button>Añadir al carro</button>
</article>
    `
    })

    contenedor.innerHTML = productosHTML
}


function filtrarPorTalle(productos /* el arreglo */, talle /* el talle */){
    // Trabajar con el filter
    return productos.filter((producto)=>{
        return producto.talles.includes(talle.toUpperCase())
    })
    //return //el arreglo filtrado
}

export {renderizarCatalogo, filtrarPorTalle}