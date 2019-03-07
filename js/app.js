// variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const btnReset = document.getElementById('resetBtn');


// event listeners
eventListeners();

function eventListeners() {
    //Inicio de la aplicacion y deshabilitar submitz
    document.addEventListener('DOMContentLoaded', inicioApp);
    // validar campos
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
    // botones
    btnEnviar.addEventListener('click', enviarEmail);
    btnReset.addEventListener('click', resetearFormulario);

}

// funciones

function inicioApp() {
    // deshabilitar el envio
    btnEnviar.disabled = true;

}

function enviarEmail(e) {
    // Spinner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';
    
    // crear Gif de email enviado
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    // ocultar spinner y mostrar gif de enviado
    setTimeout(() => {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(() => {
            enviado.remove();
            formularioEnviar.reset();

        }, 3000);
    }, 2000);

    e.preventDefault();

}

// valida que el campo tenga algo escrito
function validarCampo() {
    let errores = document.querySelectorAll('.error');
    
      validarLongitud(this);
      if(this.type=='email')
      {
          validarEmail(this);
      }
      if (email.value !== '' && asunto.value !== '' && mensaje.value !== '' && errores.length===0)
      {
          btnEnviar.disabled= false;
      }
}

function validarLongitud (campo) {
    if(campo.value.length>0)
    {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }
    else
    {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo) {
    let mail = campo.value;

    if (mail.indexOf('@')!== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }    
    else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

// resetear formulario
function resetearFormulario(e) {
    e.preventDefault();
    formularioEnviar.reset();
}


