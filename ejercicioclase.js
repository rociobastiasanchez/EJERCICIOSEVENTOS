'use strict'

//Cuando se aplique el botón de Mostrar, que se muestre el párrafo

const mostrar = document.getElementById ('boton');

mostrar.addEventListener('click', menu);

function menu(){
    document.getElementById ('adicional').style.display = "block"
}
//Porque hemos puesto el onclick como ocultar

function ocultar (){
    document.getElementById('adicional').classList.remove('oculto')
};

// document.getElementById ('adicional').remove('menu');
// function mostrar(){
//     document.getElementById('adicional').classList.remove('oculto')
// };
// function ocultar(param){
//     let vista = document.getElementById(param).style.display;

//     if (vista == 'none'){
//         vista = 'block';
//     } else {
//         vista = 'nome';
//     }
// };

//classList.add para volver a ocultar el menu
