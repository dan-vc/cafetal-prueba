import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.17.2/+esm'

document.addEventListener('DOMContentLoaded', () => {
    const contactFormHtml = document.getElementById('contactForm')

    contactFormHtml.addEventListener('submit', e => {
        e.preventDefault();

        const data = {
            service_id: 'service_g1ryuzh',
            template_id: 'template_5m6ib8f',
            user_id: 'F1Of9_htEmcb7N_Uz',
            template_params: {
                'title': 'Formulario de Contacto',
                'name': contactFormHtml.querySelector('#nombre').value,
                'email': contactFormHtml.querySelector('#email').value,
                'phone': contactFormHtml.querySelector('#celular').value,
                'message': contactFormHtml.querySelector('#mensaje').value
            }
        };


        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(response => response.text())
            .then(result => {
                Swal.fire({
                    title: '¡Formulario Enviado!',
                    text: `Respuesta del servidor ${result}`,
                    icon: 'success',
                    confirmButtonText: 'Perfecto!'
                })
                contactFormHtml.reset();
            })
    })

})