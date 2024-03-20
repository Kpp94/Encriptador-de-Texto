let botonEncriptar=document.querySelector(".boton-encriptar");
let botonDesencriptar = document.querySelector(".boton-descencriptar");
let imagenMunieco = document.querySelector(".lupa");
let textoOcultar = document.querySelector(".parrafo");
let botonCopiar = document.querySelector(".copiar");
let encriptarDesencriptar = document.querySelector(".encriptar-desencriptar")
let textoResultado = document.querySelector(".texto-resultado");
let mensajeUsuario = document.querySelector(".caja");
let imagenGato = document.querySelector(".gato");

botonEncriptar.onclick = btnEcriptar;
botonDesencriptar.onclick = btnDesencriptar;
botonCopiar.onclick = btnCopiar;

function btnEcriptar(){
    ocultar();
    encriptarDesencriptar.textContent = ("Su mensaje Encriptado:")
    textoResultado.textContent = encriptar(obtenerTexto());
    mostrar();
    
}

function btnDesencriptar(){
    ocultar();
    encriptarDesencriptar.textContent = ("Su mensaje Desencriptado:")
    textoResultado.textContent = desencriptar(obtenerTexto());
    mostrar();
    
}

function btnCopiar(){
    condicionesIniciales();
    let copiar = () => {
    let contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    };
    copiar()
}

/*obtiene el texto que ingreso el usuario en el text area*/
function obtenerTexto(){
    let texto = document.querySelector(".caja")
    return texto.value;
}

/*Para ocultar la imagen y el texto donde se mostrara
el nuevo texto encriptado o desencriptado*/
function ocultar(){
    imagenMunieco.classList.add("ocultar");
    textoOcultar.classList.add("ocultar");
    imagenGato.classList.add("ocultar");
}

/*funcion que quitara la clase .ocultar al boton de "copiar" y al texto
del resultado lo cual hara que se muestren en la pagina una vez haya
encriptado o desencriptado el mensaje*/
function mostrar(){
    botonCopiar.classList.remove("ocultar");   
    textoResultado.classList.remove("ocultar");
}

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function encriptar(mensaje){
    mensaje = mensaje.replace(/e/gi, "enter");
    mensaje = mensaje.replace(/i/gi, "imes");
    mensaje = mensaje.replace(/a/gi, "ai");
    mensaje = mensaje.replace(/o/gi, "ober");
    mensaje = mensaje.replace(/u/gi, "ufat");
    return mensaje;
}

function desencriptar(mensaje){
    mensaje = mensaje.replace(/ai/gi, "a");
    mensaje = mensaje.replace(/enter/gi, "e");
    mensaje = mensaje.replace(/imes/gi, "i");
    mensaje = mensaje.replace(/ober/gi, "o");
    mensaje = mensaje.replace(/ufat/gi, "u");
    return mensaje;
}

/*regresa la pagina a las condiciones de inicio donde el 
textarea esta vacio y tanto las imagenes como texto vuelven 
a aparecer*/
function condicionesIniciales(){
    mensajeUsuario.value=""
    imagenMunieco.classList.remove("ocultar");
    textoOcultar.classList.remove("ocultar");
    botonCopiar.classList.add("ocultar");   
    textoResultado.classList.add("ocultar");
    encriptarDesencriptar.textContent = ("");
    imagenGato.classList.remove("ocultar");
}

/*para que el texto que ingrese el usuario quede automaticamente
en minusculas*/
function minusculas(){
    let mensajeUsuario = document.querySelector(".caja");
    mensajeUsuario.addEventListener("input", function(){
        this.value = this.value.toLowerCase();
    });
}

document.addEventListener("DOMContentLoaded", function() {
    minusculas();
});