function validarn(e) {
    var teclado = (document.all) ? e.keyCode : e.which;

    if (teclado == 8) return true;

    var patron = /[0-9]/;
    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function intereses() {
    var valor = document.formulario.cantidad.value;
    var resul = parseInt(valor);
    var interes = resul * 0.02;
    var total = interes + resul;

    document.formulario.sueldoI.value = "$" + total.toFixed(2);
}

function borrardato() {
    console.log("Función borrar() ejecutada");
    document.formulario.cantidad.value = "";
    document.formulario.sueldoI.value = "";
}

function calcularComisiones() {
    const sueldoBase = 1000;
    const porcentajeComision = 0.10; 

    const venta1 = parseFloat(document.getElementById("venta1").value);
    const venta2 = parseFloat(document.getElementById("venta2").value);
    const venta3 = parseFloat(document.getElementById("venta3").value);

    const totalVentas = venta1 + venta2 + venta3;
    const comision = totalVentas * porcentajeComision;
    const totalMes = sueldoBase + comision;

    document.getElementById("comisiones").textContent = "$" + comision.toFixed(2);
    document.getElementById("totalMes").textContent = "$" + totalMes.toFixed(2);
}


document.getElementById("calcularBtn").addEventListener("click", function() {
    var totalCompra = parseFloat(document.getElementById("totalCompra").value);
    var montoFinal = totalCompra * 0.85; 
    document.getElementById("montoFinal").innerHTML = montoFinal.toFixed(2);
});

function calcularPorcentajes() {
    const cantidadHombres = parseFloat(document.getElementById("hombres").value);
    const cantidadMujeres = parseFloat(document.getElementById("mujeres").value);

    const totalEstudiantes = cantidadHombres + cantidadMujeres;
    const porcentajeHombres = (cantidadHombres / totalEstudiantes) * 100;
    const porcentajeMujeres = (cantidadMujeres / totalEstudiantes) * 100;

    document.getElementById("porcentajeHombres").textContent = porcentajeHombres.toFixed(2) + "%";
    document.getElementById("porcentajeMujeres").textContent = porcentajeMujeres.toFixed(2) + "%";
}

function calcularEdad() {
    const dia = parseInt(document.getElementById("dia").value);
    const mes = parseInt(document.getElementById("mes").value);
    const anio = parseInt(document.getElementById("anio").value);

    if (isNaN(dia) || isNaN(mes) || isNaN(anio) || dia < 1 || mes < 1 || mes > 12 || anio < 1800 || anio > 3000) {
        alert("La fecha ingresada no es válida.");
        return;
    }
    
    const hoy = new Date();
    const fechaNacimiento = new Date(anio, mes - 1, dia);
    let diff = hoy - fechaNacimiento;
    
    if (diff < 0) {
        diff = Math.abs(diff);
    }
    
    const edad = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    document.getElementById("edad").textContent = edad + " años";
}

function calcularOperacion() {
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }
    
    let resultado;
    if (numero1 === numero2) {
        resultado = numero1 * numero2;
    } else if (numero1 > numero2) {
        resultado = numero1 - numero2;
    } else {
        resultado = numero1 + numero2;
    }

    document.getElementById("resultadoOperacion").textContent = resultado;
}






