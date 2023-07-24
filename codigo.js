
function FiltrarCategoria(category) {
     const productosFiltrados = productos.filter((producto) => (producto.categoria === category));
    return productosFiltrados;
   }
     
let carrito = [];
function sumacarrito(precioProducto){
    carrito.push(precioProducto)
 }

function calcularPrecioTotal() {
  const precioTotal = carrito.reduce((total, precioProducto) => total + precioProducto, 0);
  return precioTotal;
}

let categoriaIngresada;

while (categoriaIngresada !== '0') {
    categoriaIngresada = prompt("Ingresa la categoría para filtrar los productos: Tazas, Ropa, Libros, Accesorios, Figuras. (Escribe '0' para salir), (Escribe 'Total' para ver el total de tu carrito):").toLowerCase();

    switch (categoriaIngresada) {
        case '0':
            break;
        case 'total':
            const totalCarrito = calcularPrecioTotal();
            console.log(`El total del carrito es: ${totalCarrito}`);
            break;
        case 'tazas':
        case 'ropa':
        case 'accesorios':
        case 'figuras':
        case 'libros':
            const productosFiltradosPorCategoria = FiltrarCategoria(categoriaIngresada);
            console.table(productosFiltradosPorCategoria);
            
            const idProductoSeleccionado = prompt("Ingresa el ID del producto que deseas agregar al carrito (Escribe 'menu' para elegir otra categoría o '0' para salir):");
    
            switch (idProductoSeleccionado) {
                case '0':
                  break;
                case 'menu':
                  break;
                default:
                  const productoEncontrado = productosFiltradosPorCategoria.find(producto => producto.id === parseInt(idProductoSeleccionado));

                  if (productoEncontrado) {
                    sumacarrito(productoEncontrado.precio);
                    console.log(`Producto "${productoEncontrado.nombre}" agregado al carrito.`);
                  } else {
                    console.log("No se encontró ningún producto con ese ID.");
                  }
                  break;
            }
            break;
        default:
          console.log("No es una categoría válida.");
          break;
      }
    }            
    console.log("Saliendo del programa...");

 



 

 