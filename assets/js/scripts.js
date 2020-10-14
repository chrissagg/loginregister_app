document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);/*el evento click ejecutara la funcion*/
window.addEventListener("resize", anchoPagina);


//declaramos las variables
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    } else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity ="1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

anchoPagina(); //ejecuto la funcion para que al recargar la pagina no se monten los textos

function iniciarSesion(){

    if(window.innerWidth > 850){
        formulario_register.style.display = "none";/*TODO LO CONTRARIO AL DE ABAJO*/
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1"; 
        caja_trasera_login.style.opacity = "0";
    } else{
        
        formulario_register.style.display = "none";/*TODO LO CONTRARIO AL DE ABAJO*/
        contenedor_login_register.style.left = "0";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block"; 
        caja_trasera_login.style.display = "None";
    }
}

function register(){

    if(window.innerWidth > 850){
        formulario_register.style.display = "block";/*Si nos fijamos en el Css le pusimos 'display:none'; aca lo estamos cambiando*/
        contenedor_login_register.style.left = "410px"/*el contenedor va a tener un style con un left de unos 410px*/
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0"; /* 'desaparecemos' las cajas*/
        caja_trasera_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px"/*el contenedor va a tener un style con un left de unos 410px*/
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none"; /* 'desaparecemos' las cajas*/
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}