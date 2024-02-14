/**
 * Js es un lenguaje interpretado, para lo cual debemos entender que el manejo de variables es no tipado.
 * 
 * Js maneja var para cadenas, enteros, dobles, flotante, etc.
 * 
 * Js es un lenguaje bajo multiparadigma.
 */

function validar(formulario)
{
    if(formulario.nombre.value.length < 3)
    {
        alert("Escriba por lo menos mas de 3 caracteres en el campo nombre");
        formulario.nombre.focus();
    }

    var checkOK= "qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM"

    var checkString = formulario.nombre.value;

    alert(checkString);

    var todoesvalido = true;

    for(var i = 0; i < checkString.length; i++)
    {
        var ch = checkString.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        {
            if(ch == checkOK.charAt(j))
            {
                break;
            }
        }
        if(j == checkOK.length)
        {
            todoesvalido = false;
            break;
        }
    }
    if(!todoesvalido)
    {
        alert("Favor de escribir unicamente letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var txt = formulario.email.value;

    var expreg = /\S+@\<S+\.\S+/;

    alert("El correo " + (expreg.test (txt)? " " : " no " ) + " es valido");
    
    return expreg.test;

}
