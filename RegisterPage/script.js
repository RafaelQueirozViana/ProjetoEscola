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


passwordIcons.forEach(currentButton => {
    let mode = 1;


    currentButton.onclick = () => {
        if(mode == 1) {
            let input = currentButton.parentElement.querySelector('input');
            input.type = "text";
            mode++
        }
        else if(mode == 2) {
            let input = currentButton.parentElement.querySelector('input');
            input.type = "password";
            mode--
        }

       

    }
    
})





