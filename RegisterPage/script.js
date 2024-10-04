function addDomain(domain) {
    // Pegando o valor atual do campo de email
    let emailInput = document.getElementById('email-input');
    let emailValue = emailInput.value;

    // Remover qualquer domínio existente
    emailValue = emailValue.replace(/@[\w.]+$/, '');

    // Adiciona o novo domínio
    emailInput.value = emailValue + domain;
}



const passwordIcons = document.querySelectorAll(".eye-icon")



passwordIcons.forEach(atualInput => {
    let stage = "mostrar";

    atualInput.addEventListener('click', function() {


    if(stage == "mostrar") {
        stage = "ocultar"
        input.type = "text";



    }

    else if(stage == "ocultar") {
        stage = "mostrar"
        alert("ocultu")
      
    }

    })

})


