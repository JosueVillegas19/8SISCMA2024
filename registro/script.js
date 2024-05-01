// Función para registrar un nuevo usuario
function register() {
    var username = document.getElementById("registerUsername").value;
    var password = document.getElementById("registerPassword").value;
  
    // Simulación de la base de datos - guardar en archivo local y en localStorage
    var userData = { username: username, password: password };
  
    // Guardar en localStorage
    localStorage.setItem(username, JSON.stringify(userData));
  
    // Construir la cadena de datos a escribir en el archivo de texto
    var dataToWrite = "Para que no se le olvide la contraseña xd\n";
    dataToWrite += "Usuario: " + username + ", Contraseña: " + password + ".\n";

    // Descargar el archivo de texto

    downloadToFile(dataToWrite, 'usuarios.txt');
  
    alert("Usuario registrado con éxito");
  }
  
  // Función para iniciar sesión
  function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
  
    var userData = localStorage.getItem(username);
  
    if (userData) {
      userData = JSON.parse(userData);
      if (userData.password === password) {
        alert("Inicio de sesión exitoso");
      } else {
        alert("Contraseña incorrecta");
      }
    } else {
      alert("Usuario no encontrado");
    }
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
  

  // Función para iniciar sesión
function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
  
    var userData = localStorage.getItem(username);
  
    if (userData) {
      userData = JSON.parse(userData);
      if (userData.password === password) {
        // Redirigir a la página de saludo
        window.location.href = "saludo.html?username=" + encodeURIComponent(userData.username);
      } else {
        alert("Contraseña incorrecta");
      }
    } else {
      alert("Usuario no encontrado");
    }
  }
  