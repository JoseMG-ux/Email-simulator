//Simulador de envio de Email utilizando JavaScript 
//Jose Moreno Gomez
//Branch con GitKraken

const email = document.getElementById('email');
const asunto =document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

//Event Listener
eventListeners();

function eventListeners(){

     //Inicio de la aplicacion y desabilitar Submit
     document.addEventListener('DOMContentLoaded', inicioApp);
}




//Functions
function inicioApp(){
     //Desabilitar el envio

     btnEnviar.disabled = true;
}