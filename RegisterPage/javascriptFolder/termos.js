const registerButton = document.querySelector(".enviar-button");
registerButton.disabled = true;



const termsInput = document.querySelector("#check-box");

const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");

termsInput.addEventListener('change', function() {
    if(this.checked) {
        registerButton.disabled = false;
    }

    else {
        registerButton.disabled = true;
    }
})

