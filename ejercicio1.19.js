'use strict'

//Cuando hagamos click sobre el botón de guardar aparecerá un alert

const guardar = document.getElementById ('button');

guardar.addEventListener('click', alerta);

function alerta(){
    alert("Su mensaje ha sido guardado");
};

//Cuando pongamos el foco sobre el input del nombre, el fondo será de un color.

const foco = document.getElementsByTagName ('input');
console.log(foco);

//Como nos devuelve un array de input, cogemos el primero [0]
foco[0].addEventListener('focusin', enfocar);

function enfocar() {
    foco[0].style.background = "pink";
};

foco[0].addEventListener('focusout', desenfocar);

//Tenemos que llamar a foco[0] también para el estilo
function desenfocar (){
    foco[0].style.background = "white";
};


//Dependiendo si escribimos una vocal o una consonante en el segundo input su contenido será de un color distinto

const entrada = document.getElementById('valorentrada');
//ahora añadimos un id para que nos coja la caja del input
entrada.addEventListener('keypress', letra);

function letra (){
    let vocal = event.charCode;
    console.log(vocal);
    if (vocal.charCode === 97 || vocal.charCode === 101 || vocal.charCode === 105 || vocal.charCode === 111 || vocal.charCode === 117) {
        entrada.style.background = 'blue'
    } else {
        entrada.style.background = 'orange'
    }
};


// Con onclick no hace falta llamar a la variable ni a la funcion


function showAnswer(){
    window.print();
};


