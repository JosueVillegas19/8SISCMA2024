document.addEventListener('DOMContentLoaded', function () {
    var boton = document.getElementById("boton");
    boton.onclick = function (event) {
        event.preventDefault(); 
        validacion_capital();
    }
});

function validacion_capital() {
    var capital = document.getElementById("capital").value;
    generarTablaResultados(dias, capital2, porcentaje);
    event.preventDefault(); 
}

document.addEventListener('DOMContentLoaded', function () {
    var boton = document.getElementById("boton");
    boton.onclick = function (event) {
        event.preventDefault(); 
        validacion_capital();
    }
});

function validacion_capital() {
    var capital = document.getElementById("capital").value;
    generarTablaResultados(dias, capital2, porcentaje);
    event.preventDefault(); 
}

function validacion_capital() {
    var capital = document.getElementById("capital").value;

    if (capital === "") {
        alert("Por favor, ingrese el capital inicial.");
        return;
    }

    let verificar = isNaN(capital);
    if (verificar === true) {
        alert("El capital ingresado no es válido. Por favor, ingrese un número válido.");
        return;
    }

    let capital2 = Number.parseFloat(capital);
    if (!Number.isFinite(capital2)) {
        alert("El capital ingresado no es un número decimal válido.");
        return;
    }
    capital2 = capital2.toFixed(2);
    if (capital2 <= 0) {
        alert("El capital debe ser un número mayor a cero.");
        return;
    }

    // Añadir la validación del límite de cantidad a invertir
    if (capital2 > 30000) {
        alert("El máximo a invertir es de $30,000.");
        return;
    }

    var porcentaje = parseFloat(document.getElementById("porcentaje").value) / 100;
    var dias = parseFloat(document.getElementById("dias").value);

    if (!isNaN(porcentaje) && !isNaN(dias)) {
        if (dias < 28 || dias > 400) {
            alert("El mínimo de días es 28 y el máximo es de 400.");
            return;
        }

        var resultado = (capital2 * (porcentaje / dias)).toFixed(2);

        generarTablaResultados(dias, capital2, porcentaje);
    }
}

function generarTablaResultados(dias, capital, porcentaje) {
    var tablaResultados = document.getElementById("tablaResultados");
    tablaResultados.innerHTML = ""; 

    var totalResultado = 0; 

    for (let i = 1; i <= dias; i++) {
        var resultado = (capital * porcentaje / 365 * i).toFixed(2);
        totalResultado += parseFloat(resultado); 

        var fila = document.createElement("tr");
        fila.innerHTML = "<td>Dia " + i + "</td><td>$" + resultado + "</td>";

        tablaResultados.appendChild(fila);
    }

    document.getElementById("Resultados").innerHTML = "Total: $" + totalResultado.toFixed(2);
}

