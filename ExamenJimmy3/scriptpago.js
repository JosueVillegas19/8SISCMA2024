document.addEventListener('DOMContentLoaded', function () {
    const parametros = new URLSearchParams(window.location.search);

    const botonRealizarPago = document.getElementById('boton-realizar-pago');
    const modalPago = document.getElementById('modal-pago');
    const cerrarModal = document.querySelector('.cerrar-modal');
    const formPago = document.getElementById('form-pago');

    botonRealizarPago.addEventListener('click', mostrarModalPago);
    cerrarModal.addEventListener('click', ocultarModalPago);

    // Validar que solo se ingresen números en el campo de número de tarjeta
    const numeroTarjetaInput = document.getElementById('numero-tarjeta');
    numeroTarjetaInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^\d]/g, '');
    });

    // Validar que solo se ingresen letras en el campo de nombre del titular
    const nombreTitularInput = document.getElementById('nombre-titular');
    nombreTitularInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^A-Za-zñÑáéíóúÁÉÍÓÚ\s]/g, '');
    });

    // Validar que solo se ingresen números y el formato MM/YY en el campo de fecha de vencimiento
    const fechaVencimientoInput = document.getElementById('fecha-vencimiento');
    fechaVencimientoInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^\d\/]/g, ''); // Eliminar caracteres no numéricos ni /
        if (this.value.length === 2 && !this.value.includes('/')) {
            this.value += '/'; // Agregar automáticamente el /
        } else if (this.value.length > 5) {
            this.value = this.value.slice(0, 5); // Limitar la longitud a 5 caracteres (MM/YY)
        }
    });

    // Validar que solo se ingresen números en el campo de código de verificación
    const codigoVerificacionInput = document.getElementById('codigo-verificacion');
    codigoVerificacionInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^\d]/g, '');
    });

    function mostrarModalPago() {
        modalPago.style.display = 'block';
    }

    function ocultarModalPago() {
        modalPago.style.display = 'none';
    }

    // Manejar el envío del formulario
    formPago.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        // Validar que todos los campos del formulario estén llenos
        const numeroTarjeta = document.getElementById('numero-tarjeta').value.trim();
        const nombreTitular = document.getElementById('nombre-titular').value.trim();
        const fechaVencimiento = document.getElementById('fecha-vencimiento').value.trim();
        const codigoVerificacion = document.getElementById('codigo-verificacion').value.trim();

        if (numeroTarjeta !== '' && nombreTitular !== '' && fechaVencimiento !== '' && codigoVerificacion !== '') {
            // Aquí deberías realizar las acciones de procesamiento del pago, como enviar los detalles a un servidor para procesamiento.

            // Después de procesar el pago, redirigir a la página de Ticket de Compra
            window.location.href = 'ticket.html';
        } else {
            alert('Por favor, complete todos los campos del formulario de pago.');
        }
    });

    // Si se han pasado parámetros en la URL, mostrar los detalles de la compra
    if (parametros.has('id')) {
        const ids = parametros.getAll('id');
        const nombres = parametros.getAll('nombre');
        const precios = parametros.getAll('precio');
        const cantidades = parametros.getAll('cantidad');

        let html = '<table>';
        html += '<tr><th>ID</th><th>Nombre del Producto</th><th>Precio</th><th>Cantidad</th></tr>';
        let total = 0; // Inicializar total
        for (let i = 0; i < ids.length; i++) {
            html += `<tr><td>${ids[i]}</td><td>${nombres[i]}</td><td>$${precios[i]}</td><td>${cantidades[i]}</td></tr>`;
            total += parseFloat(precios[i].replace('$', '')) * parseInt(cantidades[i]); // Calcular total
        }
        html += `<tr><td colspan="3">Total:</td><td>$${total.toFixed(2)}</td></tr>`; // Agregar fila para mostrar total
        html += '</table>';
        document.getElementById('confirmacion-pago').innerHTML = html;
    } else {
        document.getElementById('confirmacion-pago').innerHTML = '<p>No hay productos seleccionados para pagar.</p>';
    }

});





