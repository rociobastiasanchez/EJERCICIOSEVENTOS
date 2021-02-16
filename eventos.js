'use strict'

//Creamos un eventos para cuando el usuario haga click

const element = document.getElementById('boton');

element.addEventListener('click', showMsg);

function showMsg () {
    console.log ('Función ejecutada');
};

