//Simulador de envio de Email utilizando JavaScript 
//Jose Moreno Gomez
//Bot slacks


const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');//Otra forma de enviar email usando ID del campo
const resetBtn = document.getElementById('resetBtn')
//Event Listener
eventListeners();

function eventListeners(){

     //Inicio de la aplicacion y desabilitar Submit
     document.addEventListener('DOMContentLoaded', inicioApp);
     email.addEventListener('blur', validarCampo);
     asunto.addEventListener('blur', validarCampo);
     mensaje.addEventListener('blur', validarCampo);
     btnEnviar.addEventListener('click', enviarEmail);
     resetBtn.addEventListener('click',resetFormulario);
}

//Functions
function inicioApp(){
     //Desabilitar el envio
     btnEnviar.disabled = true;
}

//Valida que el campo tenga algo escrito
function validarCampo(){
     
     //Se valida la longitud del texto y que no este vacio
     validarLongitud(this);

     //Validar unicamente el Email(@)
     if(this.type === 'email'){
          validarEmail(this);
     }
     let errores = document.querySelectorAll('.error');

     if(email.value !== '' && asunto.value !=='' && mensaje.value !== ''){
          if(errores.length === 0){
          btnEnviar.disabled = false;
          }
     }
}

//Resetear formulario

function resetFormulario(){

     formularioEnviar.reset();

     e.preventDefault();

}

//Cuando se envia el correo

function enviarEmail(e){
     //Spinner al presionar enviar
     const spinnerGif =document.querySelector('#spinner');
     spinnerGif.style.display = 'block';

     //Gif que envia email
     const enviado = document.createElement('img');
     enviado.src = 'img/mail.gif'
     enviado.style.display = 'block';

     //ocultar spinner y mostrar gif de enviado

     setTimeout(function(){
          spinnerGif.style.display = 'none';

          document.querySelector('#loaders').appendChild( enviado );

          setTimeout(function(){
               enviado.remove();
               formularioEnviar.reset();
          },5000);
     }, 3000);

     e.preventDefault();
}

//Verifica la longitud del texto en los campos
function validarLongitud(campo){
     

     if(campo.value.length > 0){
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     }else{
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
     }
}

function validarEmail(campo){

     const mensaje = campo.value;
     if(mensaje.indexOf('@') !== -1){
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     }else{
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
     }

}

