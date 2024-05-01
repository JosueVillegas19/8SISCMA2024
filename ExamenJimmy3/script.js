document.addEventListener('DOMContentLoaded', function () {
    const botonesAgregar = document.querySelectorAll('.boton');
    const carritoLink = document.getElementById('carrito-link');
    const carritoPopup = document.getElementById('carrito-popup');
    const cerrarPopup = document.getElementById('cerrar-popup');
    const cuerpoCarrito = document.getElementById('cuerpo-carrito');
    const totalElemento = document.getElementById('total');
    

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });

    carritoLink.addEventListener('click', toggleCarritoPopup);
    cerrarPopup.addEventListener('click', ocultarCarritoPopup);

    let total = 0;
    const productosEnCarrito = {};

    function agregarAlCarrito(event) {
        const botonClickeado = event.target;
        const producto = botonClickeado.parentElement;
        const nombre = producto.querySelector('h3').textContent;
        const precio = parseFloat(producto.querySelector('.precio').textContent.replace('$', ''));
    
        // Verificar si el número total de productos en el carrito alcanza el límite (5)
        const totalProductos = calcularTotalProductos();
        if (totalProductos >= 5) {
            alert('Solo puedes comprar un máximo de 5 productos.');
            return;
        }
    
        agregarProductoAlCarrito(nombre, precio);
    
        // Actualizar sessionStorage con los detalles del carrito
        sessionStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
    }

    function calcularTotalProductos() {
        let totalProductos = 0;
        for (const id in productosEnCarrito) {
            totalProductos += productosEnCarrito[id].cantidad;
        }
        return totalProductos;
    }
    

    function agregarProductoAlCarrito(nombre, precio) {
        let productoExistente = false;
        for (const id in productosEnCarrito) {
            if (productosEnCarrito[id].nombre === nombre) {
                productosEnCarrito[id].cantidad++;
                productoExistente = true;
                break;
            }
        }
        if (!productoExistente) {
            const id = generarIdUnico();
            productosEnCarrito[id] = {
                nombre: nombre,
                precio: precio,
                cantidad: 1
            };
        }
    
        renderizarCarrito();
    }
    

    function renderizarCarrito() {
        cuerpoCarrito.innerHTML = '';

        for (const id in productosEnCarrito) {
            const producto = productosEnCarrito[id];
            const filaCarrito = document.createElement('tr');

            filaCarrito.innerHTML = `
                <td>${id}</td>
                <td>${producto.nombre}</td>
                <td>$${producto.precio.toFixed(2)}</td>
                <td>${producto.cantidad}</td>
            `;
            cuerpoCarrito.appendChild(filaCarrito);
        }

        total = calcularTotal();
        totalElemento.textContent = '$' + total.toFixed(2);
    }

    function calcularTotal() {
        let totalCalculado = 0;
        for (const id in productosEnCarrito) {
            const producto = productosEnCarrito[id];
            totalCalculado += producto.precio * producto.cantidad;
        }
        return totalCalculado;
    }

    function toggleCarritoPopup(event) {
        event.preventDefault();
        if (carritoPopup.style.display === 'none') {
            carritoPopup.style.display = 'block';
        } else {
            carritoPopup.style.display = 'none';
        }
    }

    function ocultarCarritoPopup() {
        carritoPopup.style.display = 'none';
    }

    function generarIdUnico() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let id = '';
        for (let i = 0; i < 6; i++) {
            id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return id;
    }

    const botonPagar = document.getElementById('boton-pagar');
    botonPagar.addEventListener('click', procesarPago);


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
        
        // Construir la URL con los detalles de los productos en el carrito
        let url = 'pago.html?';
        for (const id in productosEnCarrito) {
            const producto = productosEnCarrito[id];
            url += `id=${id}&nombre=${encodeURIComponent(producto.nombre)}&precio=${producto.precio}&cantidad=${producto.cantidad}&`;
        }
        
        // Redirigir a la página de pago con los detalles en la URL
        window.location.href = url;
    }
    
    
    const carousel = document.getElementById('carousel');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    function changeImage() {
        // Oculta la imagen actual
        images[currentIndex].style.opacity = '0';
        
        // Calcula el índice de la próxima imagen
        currentIndex = (currentIndex + 1) % images.length;
        
        // Muestra la próxima imagen
        images[currentIndex].style.opacity = '1';
    }

    setInterval(changeImage, 2000);
});


document.addEventListener('DOMContentLoaded', function () {
    const userPopupLink = document.getElementById('user-popup-link');
    const userPopup = document.getElementById('user-popup');
    const closePopupButton = document.getElementById('close-popup');

    userPopupLink.addEventListener('click', toggleUserPopup);
    closePopupButton.addEventListener('click', closeUserPopup);

    function toggleUserPopup(event) {
        event.preventDefault();
        if (userPopup.style.display === 'none') {
            userPopup.style.display = 'block';
        } else {
            userPopup.style.display = 'none';
        }
    }

    function closeUserPopup(event) {
        event.preventDefault();
        userPopup.style.display = 'none';
    }
});

function register() {
    var username = document.getElementById("registerUsername").value.trim();
    var password = document.getElementById("registerPassword").value.trim();
    
    // Validar el nombre de usuario
    var usernameRegex = /^[a-zA-Z0-9]{8,12}$/; // Solo letras y números, longitud de 8 a 12 caracteres
    if (!usernameRegex.test(username)) {
        alert("El nombre de usuario debe contener solo letras y números, con longitud de 8 a 12 caracteres.");
        return;
    }

    // Validar la contraseña
    var passwordRegex = /^.{5,10}$/; // Cualquier carácter, longitud de 5 a 10 caracteres
    if (!passwordRegex.test(password)) {
        alert("La contraseña debe tener una longitud de 5 a 10 caracteres.");
        return;
    }

    // Simulación de la base de datos - guardar en archivo local y en localStorage
    var userData = { username: username, password: password }; 
    var allUsers = JSON.parse(localStorage.getItem('allUsers')) || {}; 

    // Verificar si el usuario ya existe
    if (allUsers[username]) {
        alert("El nombre de usuario ya está en uso. Por favor, elija otro.");
        return;
    }

    // Guardar el nuevo usuario en la lista de usuarios
    allUsers[username] = userData;
    // Guardar la lista de usuarios en localStorage
    localStorage.setItem('allUsers', JSON.stringify(allUsers));

    // Construir la cadena de datos a escribir en el archivo de texto
    var dataToWrite = "Para que no se le olvide la contraseña xd\n";
    dataToWrite += "Usuario: " + username + ", Contraseña: " + password + ".\n";
    // Descargar el archivo de texto
    downloadToFile(dataToWrite, '¡NO LO ABRAS!.txt');

    alert("Usuario registrado con éxito");
}




// Función para iniciar sesión
function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // Obtener todos los usuarios registrados del localStorage
    var allUsers = JSON.parse(localStorage.getItem('allUsers')) || {};

    // Buscar el usuario en la lista de usuarios
    var userData = allUsers[username];

    if (userData) {
        if (userData.password === password) {
            alert("Inicio de sesión exitoso");

            // Guardar el estado de inicio de sesión en el almacenamiento de sesiones
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('username', username);

            // Mostrar el contenedor de saludo y establecer el nombre de usuario
            document.getElementById("user-greeting").style.display = "inline";
            document.getElementById("username").innerText = username;

            // Mostrar el botón de cerrar sesión
            document.getElementById("logout-li").style.display = "inline";
            document.getElementById("logout-button").addEventListener("click", logout);

            // Ocultar el formulario de inicio de sesión y mostrar el formulario de registro
            document.getElementById("login-form").style.display = "none";
            document.getElementById("register-form").style.display = "block";
        } else {
            alert("Contraseña incorrecta");
        }
    } else {
        alert("Usuario no encontrado");
    }
}


// Función para cerrar sesión
function logout() {
    // Limpiar la información de la sesión del almacenamiento de sesiones
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');

    // Eliminar los productos del carrito al cerrar sesión
    sessionStorage.removeItem('productosEnCarrito');

    // Ocultar el contenedor de saludo y el botón de cerrar sesión
    document.getElementById("user-greeting").style.display = "none";
    document.getElementById("logout-li").style.display = "none";

    // Limpiar el nombre de usuario
    document.getElementById("username").innerText = "";

    // Mostrar el formulario de inicio de sesión
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
}



// Función para mostrar el formulario de inicio de sesión
function showLogin() {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

// Función para mostrar el formulario de registro
function showRegisterForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
}

// Función para descargar datos como archivo de texto
function downloadToFile(data, filename) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}


document.addEventListener('DOMContentLoaded', function () {
    // Verificar si hay una sesión iniciada en el almacenamiento de sesiones
    var isLoggedIn = sessionStorage.getItem('isLoggedIn');
    var username = sessionStorage.getItem('username');

    if (isLoggedIn === 'true' && username) {
        // Mostrar el contenedor de saludo y establecer el nombre de usuario
        document.getElementById("user-greeting").style.display = "inline";
        document.getElementById("username").innerText = username;

        // Mostrar el botón de cerrar sesión
        document.getElementById("logout-li").style.display = "inline";
        document.getElementById("logout-button").addEventListener("click", logout);

        // Ocultar el formulario de inicio de sesión y mostrar el formulario de registro
        document.getElementById("login-form").style.display = "none";
        document.getElementById("register-form").style.display = "block";
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Verificar si estamos en la página "Catalogo"
    if (window.location.pathname.includes('catalogo.html')) {
        // Obtener el contenedor donde se mostrarán los productos en el catálogo
        const catalogoContenedor = document.querySelector('.catalogo');

        // Verificar si hay una sesión iniciada y obtener el nombre de usuario
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        const username = sessionStorage.getItem('username');

        if (isLoggedIn === 'true' && username) {
            // Obtener los detalles de compra almacenados en localStorage
            const detallesCompras = JSON.parse(localStorage.getItem(username + '_productosEnCarrito'));

            // Verificar si hay detalles de compra
            if (detallesCompras) {
                // Recorrer los detalles de compra y generar los elementos HTML correspondientes
                for (const id in detallesCompras) {
                    const producto = detallesCompras[id];
                    const productoHTML = `
                        <div class="producto">
                        <img src="image/${id}.jpg" alt="${producto.nombre}" class="productos">
                            <h3>${producto.nombre}</h3>
                            <span class="producto-id">ID: ${id}</span>
                            <span class="precio">$${producto.precio.toFixed(2)}</span>
                            <button class="eliminar-producto" data-id="${id}">Eliminar producto</button>
                        </div>
                    `;
                    // Agregar el producto al catálogo
                    catalogoContenedor.insertAdjacentHTML('beforeend', productoHTML);
                }
                // Agregar eventos de clic a los botones "Eliminar producto"
                const botonesEliminar = document.querySelectorAll('.eliminar-producto');
                botonesEliminar.forEach(boton => {
                    boton.addEventListener('click', eliminarProducto);
                });
            }
        }
    }
});

// Función para eliminar un producto de la lista de compras
function eliminarProducto(event) {
    const productoId = event.target.dataset.id;
    const username = sessionStorage.getItem('username');
    let detallesCompras = JSON.parse(localStorage.getItem(username + '_productosEnCarrito'));
    if (detallesCompras && detallesCompras[productoId]) {
        delete detallesCompras[productoId];
        localStorage.setItem(username + '_productosEnCarrito', JSON.stringify(detallesCompras));
        // Eliminar el elemento del DOM
        event.target.parentNode.remove();
    }
}





