// Función para buscar un producto por nombre
function buscarProductoPorNombre(nombre) {
    return productos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
  }
  
  // Función para filtrar productos por precio máximo
  function filtrarProductosPorPrecioMaximo(precioMaximo) {
    return productos.filter(producto => producto.precio <= precioMaximo);
  }
  
  // Función para simular una compra
  function simularCompra() {
    // ...
  
    while (true) {
      const opcion = obtenerRespuesta("Ingresa el número del producto que deseas comprar, 'buscar' para buscar un producto, 'filtrar' para filtrar por precio máximo, o '0' para pagar:");
      const opcionNumero = parseInt(opcion);
  
      if (!isNaN(opcionNumero) && opcionNumero >= 1 && opcionNumero <= productos.length) {
        const productoElegido = productos[opcionNumero - 1];
        carrito.push(productoElegido);
        total += productoElegido.precio;
        mostrarMensaje(`${productoElegido.nombre} se ha añadido al carrito.`);
      } else if (opcionNumero === 0) {
        // ...
      } else if (opcion.toLowerCase() === 'buscar') {
        const nombreBuscado = obtenerRespuesta("Ingresa el nombre del producto que deseas buscar:");
        const productoEncontrado = buscarProductoPorNombre(nombreBuscado);
        if (productoEncontrado) {
          mostrarMensaje(`Producto encontrado: ${productoEncontrado.nombre} - $${productoEncontrado.precio}`);
        } else {
          mostrarMensaje(`Producto no encontrado.`);
        }
      } else if (opcion.toLowerCase() === 'filtrar') {
        const precioMaximo = parseFloat(obtenerRespuesta("Ingresa el precio máximo para el filtro:"));
        const productosFiltrados = filtrarProductosPorPrecioMaximo(precioMaximo);
        mostrarMensaje("Productos que cumplen con el filtro de precio máximo:");
        for (const producto of productosFiltrados) {
          mostrarMensaje(`${producto.nombre} - $${producto.precio}`);
        }
      } else {
        mostrarMensaje("Opción no válida. Por favor, ingresa un número válido o una de las opciones válidas ('buscar', 'filtrar', '0').");
      }
    }
  }
  