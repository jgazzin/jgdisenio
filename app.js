// variables
const imagen = document.querySelectorAll('.imagen');
const buttons= document.querySelectorAll('.btn');
const container = document.querySelector('.container');
const form = document.querySelector('.form');
const btnMsg = document.querySelector('.msg');
const formName = document.querySelector('#nombre')
const formEmail = document.querySelector('#email');
const formAsunto = document.querySelector('#asunto');
const formMsg = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('#enviar');
const btnCancelar = document.querySelector('#cancelar');


const contenidoForm = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
}

// eventos
imagen.forEach( img => {
    img.addEventListener('mouseover', () => {
        img.children[0].classList.add('blur');
        console.log()
        img.children[1].classList.remove('hidden');
    })
    img.addEventListener('mouseout', () => {
        img.children[0].classList.remove('blur');
        console.log()
        img.children[1].classList.add('hidden');
    })
})

// btn
buttons.forEach(btn => {
    btn.addEventListener('click', ()=> {
        btn.classList.toggle('active');
        btn.nextElementSibling.classList.toggle('hidden')
    })
})

// mostrar form
btnMsg.addEventListener('click', ()=> {
    container.classList.toggle('hidden');
    form.classList.toggle('hidden');
})

// form control
formName.addEventListener('blur', verificar);
formEmail.addEventListener('blur', verificar);
formAsunto.addEventListener('blur', verificar);
formMsg.addEventListener('blur', verificar);
btnEnviar.addEventListener('click', (e) => {
    e.preventDefault()
    enviar()
});

// funciones
function verificar (e) {
    const input = e.target;
    const id = e.target.id;
    const msgVacio = `El campo ${id} no puede estar vacío`;


    if (input.value.trim() === '') {
        limpiarAlerta(input.parentElement)
        enviarAlerta(msgVacio, input.parentElement);
        contenidoForm[id] = '';
           
    } else {
        limpiarAlerta(input.parentElement)
        icon(input.parentElement)
        contenidoForm[id] = input.value.trim()
    }

    habilitarBtn(contenidoForm)

}

function enviarAlerta(msg, element) {
    
    const p = document.createElement('p')
    const span = document.createElement('span')
    p.classList.add('alerta')
    span.textContent = msg;
    span.classList.add('ms-2')
    icon(p)
    p.appendChild(span)
    element.appendChild(p)   

}

function icon(element) {
    const i = document.createElement('I');
    if(element.classList.contains('alerta')) {
        i.classList.add('fa-solid', 'fa-circle-exclamation', 'fa-lg')
        i.style.color="#ff0000"
    } else {
        i.classList.add('alerta', 'fa-solid', 'fa-circle-check', 'fa-lg','mt-3')
        i.style.color="#084200"
    }
    
    element.appendChild(i)
}

function limpiarAlerta(element) {
    const alerta = element.querySelector('.alerta');
    if (alerta) {
        alerta.remove();
    }
}

function habilitarBtn (form) {

    if (Object.values(form).includes('')) {
        btnEnviar.classList.remove('ok')
        btnEnviar.disabled = true;
        return;
    }
    btnEnviar.classList.add('ok')
    btnEnviar.disabled = false;
};

function enviar() {
    
    const contenedorForm = document.querySelector('form')
    contenedorForm.classList.add('blur')


    setTimeout(() => {

        const mensajeOk = document.querySelector('.msg_enviado')

        mensajeOk.classList.remove('hidden')

        setTimeout(() => {
            mensajeOk.classList.add('hidden')
            contenedorForm.classList.remove('blur')
            form.classList.add('hidden');
            container.classList.remove('hidden');
            contenedorForm.submit()
        }, 2000);

    }, 1500);

    

}