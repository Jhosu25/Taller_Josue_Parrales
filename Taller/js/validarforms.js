const inputNombre=document.getElementById('nombre');
const inputApellido=document.getElementById('apellido');
const inputCorreo=document.getElementById('correo');
const inputDireccion=document.getElementById('direccion');
const inputTelefono=document.getElementById('telefono');
const inputJuego=document.getElementById('juego');
const inputCosto=document.getElementById('costo');
const inputMensaje=document.getElementById('mensaje');
const btnEnviar=document.getElementById('botonImprimir');

const errorNombre=document.getElementById('errorNombre');
const errorApellido=document.getElementById('errorApellido');
const errorCorreo=document.getElementById('errorCorreo');
const errorDireccion=document.getElementById('errorDireccion');
const errorTelefono=document.getElementById('errorTelefono');
const errorJuego=document.getElementById('errorJuego');
const errorCosto=document.getElementById('errorCosto');
const errorMensaje=document.getElementById('errorMensaje');
const envioExitoso=document.getElementById('envioExitoso');

const formulario=document.getElementById('formulario');

//Validacion Nombre
const validarNombre=()=>{
    if(inputNombre.value.trim()==""){
        errorNombre.textContent="El nombre es obligatorio";
        inputNombre.classList.add('noValido');
        inputNombre.classList.remove('noValido');
        return false;
    }else{
        errorNombre.textContent="";
        inputNombre.classList.add('valido');
        inputNombre.classList.remove('noValido');
        return true;
    }
};

//Validacion Apellido
const validarApellido=()=>{
    if(inputApellido.value.trim()==""){
        errorApellido.textContent="El apellido es obligatorio";
        inputApellido.classList.add('noValido');
        inputApellido.classList.remove('noValido');
        return false;
    }else{
        errorApellido.textContent="";
        inputApellido.classList.add('valido');
        inputApellido.classList.remove('noValido');
        return true;
    }
};

//Validar Correo
const validarCorreo=()=>{
    const regexEmail=/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if(!regexEmail.test(inputCorreo.value)){
        errorCorreo.textContent="Ingrese un correo valido";
        inputCorreo.classList.add('noValido');
        inputCorreo.classList.remove('valido');
        return false;
    }else{
        errorCorreo.textContent="";
        inputCorreo.classList.add('valido');
        inputCorreo.classList.remove('noValido');
        return true;
    }
};

//Validacion Dirección
const validarDireccion=()=>{
    if(inputDireccion.value.trim()==""){
        errorDireccion.textContent="La dirección es obligatoria";
        inputDireccion.classList.add('noValido');
        inputDireccion.classList.remove('noValido');
        return false;
    }else{
        errorDireccion.textContent="";
        inputDireccion.classList.add('valido');
        inputDireccion.classList.remove('noValido');
        return true;
    }
};

//Validacion Telefono
const validarTelefono=()=>{
    if(inputTelefono.value.trim()==""){
        errorTelefono.textContent="Dinos tu juego porfavor";
        inputTelefono.classList.add('noValido');
        inputTelefono.classList.remove('noValido');
        return false;
    }else{
        errorTelefono.textContent="";
        inputTelefono.classList.add('valido');
        inputTelefono.classList.remove('noValido');
        return true;
    }
};

//Validacion Juego
const validarJuego=()=>{
    if(inputJuego.value.trim()==""){
        errorJuego.textContent="Dinos tu juego porfavor";
        inputJuego.classList.add('noValido');
        inputJuego.classList.remove('noValido');
        return false;
    }else{
        errorJuego.textContent="";
        inputJuego.classList.add('valido');
        inputJuego.classList.remove('noValido');
        return true;
    }
};

//Validacion Costo
const validarCosto=()=>{
    if(inputCosto.value.trim()==""){
        errorCosto.textContent="El nombre es obligatorio";
        inputCosto.classList.add('noValido');
        inputCosto.classList.remove('noValido');
        return false;
    }else{
        errorCosto.textContent="";
        inputCosto.classList.add('valido');
        inputCosto.classList.remove('noValido');
        return true;
    }
};

//Validacion Mensaje
const validarMensaje=()=>{
    if(inputMensaje.value.trim().length <10){
        errorMensaje.textContent="El mensaje tiene que tener minimo 10 caracteres";
        inputMensaje.classList.add('noValido');
        inputMensaje.classList.remove('valido');
        return false;
    }else{
        errorMensaje.textContent="";
        inputMensaje.classList.add('valido');
        inputMensaje.classList.remove('noValido');
        return true;
    }
};

//Validar que todos los campos del formulario sean correctos para habilitar el boton
const validarFormulario=()=>{
    if(validarNombre() && validarApellido() && validarCorreo() && validarDireccion() && validarTelefono() && validarJuego() && validarCosto() && validarMensaje()){
        btnEnviar.disabled=false;
    }else{
        btnEnviar.disabled=true;
    }
};

//Manejo de errores en tiempo real
inputNombre.addEventListener('input', ()=>{
    validarNombre();
    validarFormulario();
});

inputApellido.addEventListener('input', ()=>{
    validarApellido();
    validarFormulario();
});

inputCorreo.addEventListener('input', ()=>{
    validarCorreo();
    validarFormulario();
});

inputDireccion.addEventListener('input', ()=>{
    validarDireccion();
    validarFormulario();
});

inputTelefono.addEventListener('input', ()=>{
    validarTelefono();
    validarFormulario();
});

inputJuego.addEventListener('input', ()=>{
    validarJuego();
    validarFormulario();
});

inputCosto.addEventListener('input', ()=>{
    validarCosto();
    validarFormulario();
});

inputMensaje.addEventListener('input', ()=>{
    validarMensaje();
    validarFormulario();
});

//Simulacion de envio de datos
const enviarFormulario = async()=>{
    envioExitoso.textContent="Enviando...";
    await new Promise(resolve => setTimeout(resolve, 1500));
    envioExitoso.textContent="Datos enviados con exito";
    formulario.reset();
    inputNombre.classList.remove("valido");
    inputApellido.classList.remove("valido");
    inputCorreo.classList.remove("valido");
    inputDireccion.classList.remove("valido");
    inputTelefono.classList.remove("valido");
    inputJuego.classList.remove("valido");
    inputCosto.classList.remove("valido");
    inputMensaje.classList.remove("valido");
    btnEnviar.disabled=true;
};


formulario.addEventListener('submit', (event)=>{
    event.preventDefault();//Detiene el comportamiento automatico del form
    enviarFormulario();
});