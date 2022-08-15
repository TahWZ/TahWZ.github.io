$("#contact-form").submit(function(event){
    emailjs.init("3TjJs5gsGR9lwP24T");
    emailjs.sendForm('service_c9y60gs', 'template_cpjgkj5', '#contact-form')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById("contact-form").reset();
            alert("Form Submitted Successfully");
        }, function(error) {
            console.log('FAILED...', error);
        });
        event.preventDefault();
});