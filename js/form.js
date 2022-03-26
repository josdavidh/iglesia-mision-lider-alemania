window.onload = function () {

    const formulario = document.getElementById('contact-form');
    const inputs = document.querySelectorAll('.form-input');
    const textArea = document.querySelector('.form-textarea');
    
    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        contenido: /^[a-zA-ZÀ-ÿ\s\W\d]{1,300}$/, // Letras y espacios, pueden llevar acentos.
        asunto: /^[a-zA-ZÀ-ÿ\s]{7,40}$/, // Letras y espacios, pueden llevar acentos.
        // password: /^.{4,12}$/, // 4 a 12 digitos.
        // telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }
    
    const fields = {
        user: false,
        email: false,
        subject: false,
        content: false
    }
    
    const formValidation = (e) => {
        switch(e.target.name) {
            case "user" :
                checkField(expresiones.nombre, e.target, 'user');
            break;
            case "email" :
                checkField(expresiones.correo, e.target, 'email');
            break;
            case "subject" :
                checkField(expresiones.asunto, e.target, 'subject');
            break;
            case "content" :
                checkContent(expresiones.contenido, e.target);
            break;
        }
    }
    
    
    const checkContent = (expresion,textArea) => {
        if(expresion.test(textArea.value)) {
            document.getElementById(`group-content`).classList.remove('form-textarea-incorrect');
            document.querySelector(`#group-content .form-group-input-error`).classList.remove('form-group-input-error-active');
            fields.content = true;
        } else {
            document.getElementById(`group-content`).classList.add('form-textarea-incorrect');
            document.querySelector(`#group-content .form-group-input-error`).classList.add('form-group-input-error-active');
            fields.content = false;
        }
    }
    const checkField = (expresion, input, field) => {
        if(expresion.test(input.value)) {
            document.getElementById(`group-${field}`).classList.add('form-group-correct');
            document.getElementById(`group-${field}`).classList.remove('form-group-incorrect');
            document.querySelector(`#group-${field} i`).classList.add('fa-check-circle');
            document.querySelector(`#group-${field} i`).classList.remove('fa-times-circle');
            document.querySelector(`#group-${field} .form-group-input-error`).classList.remove('form-group-input-error-active');
            fields[field] = true;
        } else {
            document.getElementById(`group-${field}`).classList.add('form-group-incorrect');
            document.getElementById(`group-${field}`).classList.remove('form-group-correct');
            document.querySelector(`#group-${field} i`).classList.add('fa-times-circle');
            document.querySelector(`#group-${field} i`).classList.remove('fa-check-circle');
            document.querySelector(`#group-${field} .form-group-input-error`).classList.add('form-group-input-error-active');
            fields[field] = false;
        }
    }
    
    textArea.addEventListener('keyup', formValidation);
    textArea.addEventListener('blur', formValidation);
    
    inputs.forEach((input) => {
        input.addEventListener('keyup', formValidation);
        input.addEventListener('blur', formValidation);
    });
    
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log(fields);
    
        if(fields.user && fields.email && fields.subject && fields.content ){

            // emailjs.sendForm('service_rbnks63', 'formulario_de_contacto', formulario, "hhLh-mQHmYFTM7Dm_")
            // .then(function () {
            //     console.log('SUCCESS!');
            // }, function (error) {
            //     console.log('FAILED...', error);
            // });

            formulario.reset();

            document.getElementById('form-message-success').classList.add('form-message-success-active');
            setTimeout(() => {
                document.getElementById('form-message-success').classList.remove('form-message-success-active');
            }, 3500);
    
            document.querySelectorAll('.form-group-correct').forEach((icono) => {
                icono.classList.remove('.form-group-correct');
            });
        } else {
            document.getElementById('form-message').classList.add('form-message-active');
            setTimeout(() => {
                document.getElementById('form-message').classList.remove('form-message-active');
            }, 3500);
            
        }
    })
}



