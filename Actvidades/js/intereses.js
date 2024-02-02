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

function calcularCalificacionFinal() {
    const parcial1 = parseFloat(document.getElementById("parcial1").value);
    const parcial2 = parseFloat(document.getElementById("parcial2").value);
    const parcial3 = parseFloat(document.getElementById("parcial3").value);
    const examenFinal = parseFloat(document.getElementById("examenFinal").value);
    const trabajoFinal = parseFloat(document.getElementById("trabajoFinal").value);

    if (parcial1 < 0 || parcial1 > 100 || parcial2 < 0 || parcial2 > 100 || parcial3 < 0 || parcial3 > 100 ||
        examenFinal < 0 || examenFinal > 100 || trabajoFinal < 0 || trabajoFinal > 100) {
        alert("Introduzca valores del 0 al 100 .");
        return;
    }

    const promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    const calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);

    document.getElementById("calificacionFinal").textContent = calificacionFinal.toFixed(2);
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
        alert("Introduzca números válidos.");
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

function encontrarMayor() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const num3 = parseInt(document.getElementById("num3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Introduca tres números válidos.");
        return;
    }

    let mayor = num1;
    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }

    document.getElementById("mayor").textContent = mayor;
}

function calcularPago() {
    const horasTrabajadas = parseInt(document.getElementById("horasTrabajadas").value);
    const salarioPorHora = parseFloat(document.getElementById("salarioPorHora").value);

    if (isNaN(horasTrabajadas) || isNaN(salarioPorHora)) {
        alert("Introduzca valores positivos.");
        return;
    }

    let salarioTotal = 0;

    if (horasTrabajadas <= 40) {
        salarioTotal = horasTrabajadas * salarioPorHora;
    } else {
        const horasNormales = 40;
        const horasExtras = horasTrabajadas - horasNormales;

        if (horasExtras <= 8) {
            salarioTotal = (horasNormales * salarioPorHora) + (horasExtras * salarioPorHora * 2);
        } else {
            const horasExtrasDoble = 8;
            const horasExtrasTriple = horasExtras - horasExtrasDoble;

            salarioTotal = (horasNormales * salarioPorHora) +
                           (horasExtrasDoble * salarioPorHora * 2) +
                           (horasExtrasTriple * salarioPorHora * 3);
        }
    }

    document.getElementById("pagoHorasExtras").textContent = "$" + salarioTotal.toFixed(2);
}

function calcularUtilidad() {
    const antiguedad = document.getElementById("antiguedad").value;
    const salarioMensual = parseFloat(document.getElementById("salarioMensual").value);

    if (isNaN(salarioMensual) || salarioMensual <= 0) {
        alert("Introduzca valores positivos.");
        return;
    }

    let utilidadAnual = 0;

    switch (antiguedad) {
        case "menos1":
            utilidadAnual = salarioMensual * 0.05;
            break;
        case "1a2":
            utilidadAnual = salarioMensual * 0.07;
            break;
        case "2a5":
            utilidadAnual = salarioMensual * 0.10;
            break;
        case "5a10":
            utilidadAnual = salarioMensual * 0.15;
            break;
        case "mas10":
            utilidadAnual = salarioMensual * 0.20;
            break;
        default:
            alert("Seleccione solo los que estan aparecen en la lista");
            return;
    }

    document.getElementById("utilidadAnual").textContent = "$" + utilidadAnual.toFixed(2);
}