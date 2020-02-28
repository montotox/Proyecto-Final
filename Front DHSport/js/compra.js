
var inputTarjetaCredito = document.getElementById('tarjeta-credito');

inputTarjetaCredito.addEventListener('click', function () {
    listaBancos.style.display = "block"; 
    enlaceMPago.style.display = "none";           
});

var listaBancos = document.getElementById ('elegir-banco');
var listaTarjetas = document.getElementById ('elegir-tarjeta');
var listaCuotas = document.getElementById ('elegir-cuotas');
var formDatosTarjetayFacturacion = document.getElementById ('formularioTarjeta');

var inputMPago = document.getElementById('mercado-pago');
var enlaceMPago = document.getElementById('qr-mercado-pago');

inputMPago.addEventListener('click', function () {
    enlaceMPago.style.display = "block";
    listaBancos.style.display = "none";
    listaTarjetas.style.display = "none";
    listaCuotas.style.display = "none";
    formDatosTarjetayFacturacion.style.display = "none";
})

function mostrarTarjetas () {
    listaTarjetas.style.display = "block";
}

function mostrarCuotas () {
    listaCuotas.style.display = "block";
}

function mostrarFormularioTarjeta () {
    formDatosTarjetayFacturacion.style.display = "block";
}



//Ejecutará las funciones cuando esté cargada la totalidad de la ventana 
window.onload = function () {
    //document.formularioDatosTarjeta.numeroTarjeta.focus();
    //Agrego un evento al formulario: Cuando se de "submit" ejecuto la función validarFormulario()
    document.formularioDatosTarjeta.addEventListener('submit', validarFormulario);
}

//Función para la validación del correcto llenado de los campos del formulario
function validarFormulario(evObject) {
    evObject.preventDefault();
    //Creo una variable para validar con un boolean que las condiciones elegidas para enviar el fomrulario se cumplen
    var todoCorrecto = true;
    //Capturo el formulario en una variable para poder trabajarla dentro de la función
    var formulario = document.formularioDatosTarjeta;
    
    //Se recorren todos los campos del formulario
    for (var i=0; i<formulario.length; i++) {
        if(formulario[i].type =='text') {
            //Si el campo del input es de tipo texto y está en vacío 
            // "/^\s*$/" define una expresión regular donde \s es el espacio en blanco,  ^ indica comienzo de cadena con ese 
            //carácter, * indica repetición cualquier número de veces y $ señala el carácter de terminación de cadena. 
            //Por tanto la expresión regular indica “las cadenas que empiezan con espacio en blanco, siguen con cualquier número
            //de espacios en blanco y terminan con un espacio en blanco”.

            //El método test devuelve true si la cadena hace match con la expresión regular o false si la cadena no hace match.
            if (formulario[i].value == null || formulario[i].value.length == 0 || /^\s*$/.test(formulario[i].value)){
                //se dispara una alerta con el nombre del campo de tipo texto que se encuentra vacío y un mensaje para que el usuario lo complete
                alert (formulario[i].name + ' no puede estar vacío o contener sólo espacios en blanco');
                //y cambia el valor de la variable todoCorrecto a falso para que el formulario no se envíe
                todoCorrecto=false;
            }
        } 
        //Si el input es de tipo "number"
        if(formulario[i].type =='number') {
            //Creo las condiciones para los campos numéricos
            //Si el campo numeroTarjeta es un número y tiene 12 digitos el numero será válido
            if (isNaN(formulario.numeroTarjeta.value)==true || /^\d{12}$/.test(formulario.numeroTarjeta.value)==false) {
                alert ('Número de tarjeta no válido'); 
                todoCorrecto=false;
            }
            //Si el campo codigoSeguridad no es un número y tiene más o menos de 3 digitos el numero no será válido
            if (isNaN(formulario.codigoSeguridad.value)==true || /^\d{3}$/.test(formulario.codigoSeguridad.value)==false) {
                alert ('Código de seguridad no válido'); 
                todoCorrecto=false;
            }
            //Si el campo dniTitularTarjeta no es un número no será válido
            if (isNaN(formulario.dniTitularTarjeta.value)==true) {
                alert ('El número de DNI ingresado no es válido'); 
                todoCorrecto=false;
            }
            //Si el campo nroDomicilio no es un número no será válido
            if (isNaN(formulario.nroDomicilio.value)==true) {
                alert ('El número de domicilio ingresado no es válido'); 
                todoCorrecto=false;
            }
            //Si el campo codigoPostal no es un número y tiene más o menos de 4 digitos el número no será válido
            if (isNaN(formulario.codigoPostal.value)==true || /^\d{4}$/.test(formulario.codigoPostal.value)==false) {
                alert ('El código postal ingresado no es válido'); 
                todoCorrecto=false;
            }
        } 
        //Si el input es de tipo "email"
        if(formulario[i].type =='email') {
            //El correo será válido si la cadena contiene cualquier número de caracteres seguido del carácter @ segudio de cualquier número de caracteres, 
            //seguido de un punto, y seguido de cualquier número de caracteres. Esta validación es amplia y no aceptaría la mayor parte de direcciones no 
            //válidas, por ejemplo no se aceptaría <<andres@gmailcom>> porque le falta el punto "."
            if (/\S+@\S+\.\S+/.test(formulario.email.value)==false) {
                alert ('El correo electrónico ingresado no tiene un formato válido'); todoCorrecto=false;
            }
        }
    }
    //Si todos los campos de tipo texto estan completos entonces todoCorrecto mantiene su valor "true" y el formulario es enviado
    if (todoCorrecto ==true) {formulario.submit();}
}
