document.addEventListener('DOMContentLoaded', function () {
    // Función para procesar el pago
    function procesarPago() {
        // Obtener los detalles de la compra almacenados en sessionStorage
        const productosEnCarrito = JSON.parse(sessionStorage.getItem('productosEnCarrito'));
        // Guardar los detalles de la compra en localStorage asociados con el nombre de usuario
        const username = sessionStorage.getItem('username');
    
        // Obtener los detalles de compra almacenados en localStorage
        let detallesCompras = JSON.parse(localStorage.getItem(username + '_productosEnCarrito')) || {};
    
        // Agregar los nuevos productos comprados a los detalles existentes
        for (const id in productosEnCarrito) {
            const producto = productosEnCarrito[id];
            if (detallesCompras[id]) {
                detallesCompras[id].cantidad += producto.cantidad;
            } else {
                detallesCompras[id] = producto;
            }
        }
    
        // Guardar los detalles de la compra actualizados en localStorage
        localStorage.setItem(username + '_productosEnCarrito', JSON.stringify(detallesCompras));
    
        // Redirigir a la página de pago
        window.location.href = 'pago.html';
    }

    // Asociar la función procesarPago al botón de pago
    const botonPagar = document.getElementById('boton-pagar');
    botonPagar.addEventListener('click', procesarPago);
});


document.addEventListener('DOMContentLoaded', function () {
    // Obtener el tbody de la tabla donde se mostrarán los detalles de la compra
    const detalleCompra = document.getElementById('detalle-compra').getElementsByTagName('tbody')[0];

    // Verificar si hay una sesión iniciada y obtener el nombre de usuario
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const username = sessionStorage.getItem('username');

    if (isLoggedIn === 'true' && username) {
        // Obtener los detalles de compra almacenados en localStorage
        const detallesCompras = JSON.parse(localStorage.getItem(username + '_productosEnCarrito'));

        // Verificar si hay productos en la lista de compras
        if (detallesCompras) {
            let total = 0; // Inicializar total
            // Recorrer los detalles de compra y generar el HTML de la tabla dinámicamente
            for (const id in detallesCompras) {
                const producto = detallesCompras[id];
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${id}</td>
                    <td>${producto.nombre}</td>
                    <td>$${producto.precio.toFixed(2)}</td>
                    <td>${producto.cantidad}</td>
                `;
                detalleCompra.appendChild(fila);
                total += producto.precio * producto.cantidad; // Calcular total
            }

            // Agregar fila para mostrar total
            const filaTotal = document.createElement('tr');
            filaTotal.innerHTML = `<td colspan="3">Total:</td><td>$${total.toFixed(2)}</td>`;
            detalleCompra.appendChild(filaTotal);
        } else {
            // Si no hay productos en la lista de compras, mostrar mensaje de error
            detalleCompra.innerHTML = '<tr><td colspan="4">No hay productos seleccionados para pagar.</td></tr>';
        }
    }
});