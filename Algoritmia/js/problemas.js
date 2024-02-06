
//problema 1
function invertirPalabras() {
    // divide lass palabras separadas por espacio
    var palabras = document.getElementById('p1-input').value;
    // invertirr el orden del arreglo de palabras
    var arregloPalabras = palabras.split(' ');
    var palabrasInvertidas = arregloPalabras.reverse();
    var resultado = palabrasInvertidas.join(' ');
    document.getElementById('p1-output').textContent = resultado;
}
document.getElementById('p1-button').addEventListener('click', invertirPalabras);

//problema 2
function problema2(){

    //obtener los parametros de las entradas de datos
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    //construir el vector
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //debo de darle un ordenamiento al vector
    v1 = v1.sort(function(a,b){
        return b-a;
    });
    v2 = v2.sort(function(a,b){
        return b-a;
    });

    v2 = v2.reverse();

    var p2_producto = 0;

    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i] * v2[i];
    }

    document.querySelector('#p2-output').textContent = 'Producto Escalar Minimo : ' + p2_producto;

}

//problema 3
function calcularPalabraUnica() {
    // el texto ingresado en el input
    var palabras = document.getElementById('p3-input').value;
    var arregloPalabras = palabras.split(',');

    var maxCaracteresUnicos = 0;
    var palabraConMaxCaracteresUnicos = '';
    arregloPalabras.forEach(function(palabra) {
        var caracteresUnicos = new Set(palabra.split(''));
        // ver si la cantidad de caracteres únicos es mayor que la máxima encontrada 
        if (caracteresUnicos.size > maxCaracteresUnicos) {
            maxCaracteresUnicos = caracteresUnicos.size;
            palabraConMaxCaracteresUnicos = palabra.trim(); 
        }
    });

    document.getElementById('p3-output').textContent = 'La palabra con más caracteres únicos es: ' + palabraConMaxCaracteresUnicos + ' con ' + maxCaracteresUnicos + ' caracteres únicos.';
}
document.getElementById('p3-button').addEventListener('click', calcularPalabraUnica);

