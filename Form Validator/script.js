const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirm-password');

//Mostrar el error
const mostrarError = (input, mensaje)=>{
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = mensaje;
}

//Mostrar el success
const mostrarSuccess = (input)=>{
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//validar correo
const checkEmail = (input)=>{
    const expresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
    if (expresion.test(input.value.trim())) {
        mostrarSuccess(input);     
    }else{
        mostrarError(input, 'Formato de Email no valido');
    }
}

//validacion de campos vacios
const checkRequired = (inputArray)=>{
    inputArray.forEach(function(input){
      if (input.value.trim() === '') {
          mostrarError(input, `${getFieldName(input)} es obligatorio`);
      }else{
        mostrarSuccess(input);    
      }
    });
}

//validacion de longitud de campos
const checkLength = (input, min, max)=>{
    if (input.value.length < min) {
        mostrarError(input, `${getFieldName(input)} debe tener al menos ${min} caracteres`);
    }else if (input.value.length > max) {
        mostrarError(input, `${getFieldName(input)} debe tener como máximo ${min} caracteres`);
    }else{
      mostrarSuccess(input);    
    }

}

//validar password match
const passwordMatch = (input1, input2)=>{
    if (input1.value === input2.value) {
        mostrarSuccess(input2);
    } else {
        mostrarError(input2, 'Los Passwords no coiciden entre sí');
    }
}

//obtener nombre de campo
const getFieldName=(input)=>{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//============ Validar al llenara campo correo ============ 
email.addEventListener('change', function(e){
    e.preventDefault();
    checkEmail(email);
})

//============ Validar al dar Submit ============ 
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([nombre, email, password, confirmPass]);
    checkLength(nombre, 4, 15);
    checkLength(password, 6, 25);
    

});

/*if (nombre.value === '') {
        mostrarError(nombre, 'El Campo NOMBRE es Obligatorio');
    }else{
        mostrarSuccess(nombre);
    }

    if (email.value === '') {
        mostrarError(email, 'El Campo email es Obligatorio');
    }else if(!emailValido(email.value)){
        mostrarError(email, 'El Formato de email no es valido');    
    }else{
        mostrarSuccess(email);
    }

    if (password.value === '') {
        mostrarError(password, 'El Campo password es Obligatorio');
    }else{
        mostrarSuccess(password);
    }

    if (confirmPass.value === '') {
        mostrarError(confirmPass, 'El Campo confirmar Password es Obligatorio');
    }else{
        mostrarSuccess(confirmPass);
    }*/