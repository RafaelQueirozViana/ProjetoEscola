
//  CÓDIGO ATALHO EMAIL

function addDomain(domain) {
    // Pegando o valor atual do campo de email
    let emailInput = document.getElementById('email-input');
    let emailValue = emailInput.value;

    // Remover qualquer domínio existente
    emailValue = emailValue.replace(/@[\w.]+$/, '');

    // Adiciona o novo domínio
    emailInput.value = emailValue + domain;
    
}


// CÓDIGO MOSTRAR/OCULTAR SENHA


const passwordIcons = document.querySelectorAll(".eye-icon")


passwordIcons.forEach(currentButton => {
    let mode = 1;

    currentButton.onclick = () => {
        if(mode == 1) {
            let input = currentButton.parentElement.querySelector('input');
            input.type = "text";
            mode++
            currentButton.src = "./imagens/eyeIPasswordcon.png"
        }
        else if(mode == 2) {
            let input = currentButton.parentElement.querySelector('input');
            input.type = "password";
            currentButton.src = "./imagens/versenha.png"
            mode--
        }

       

    }
    
})


//CÓDIGO VERIFICAR DADOS

const registerButton = document.querySelector(".enviar-button");
registerButton.disabled = true;






const termsInput = document.querySelector("#check-box");

const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");

const dateInput = document.querySelector("#date-input");
const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear();

const cpfInput = document.querySelector("#cpf-input");
const telInput = document.querySelector("#tel-input");
const passwordInput = document.querySelector("#pass-input");
const confirmPassInput = document.querySelector("#confirm-pass");
const allInputs = document.querySelectorAll(".input-group input");



termsInput.addEventListener('change', function() {
    if(this.checked) {
        registerButton.disabled = false;
    }

    else {
        registerButton.disabled = true;
    }
})



registerButton.addEventListener('click', (event) => {
    let podeEnviar = false;
    let invalidRequirements = 0;


 
   

  
    const datevalue = dateInput.value
    const data = new Date(datevalue);
    const digitedYear = data.getFullYear();



    if(nameInput.value.length < 5 || nameInput.value.length >10) {
        emailInput.parentElement.querySelector(".error-text").textContent = "O nome de usuário deve possuir entre 5 e 10 letras";   
        invalidRequirements++
    }

    else {
        emailInput.parentElement.querySelector(".error-text").textContent = "";
  
    }


    if( !(emailInput.value.includes("@")) ) {
          emailInput.parentElement.querySelector("#error-txt").textContent = "Utilize um email válido";
          invalidRequirements++
    }

       else {
        emailInput.parentElement.querySelector("#error-txt").textContent = "";
    
    }



    if((anoAtual - digitedYear) < 18) {
        dateInput.parentElement.querySelector(".error-text").textContent = "Você deve ter 18 anos ou mais para criar sua conta";
        invalidRequirements++
    }

        else {
            dateInput.parentElement.querySelector(".error-text").textContent = "";
        
        }

     

        if(cpfInput.value.length != 11) {
            invalidRequirements++
            telInput.parentElement.querySelector(".error-text").textContent = "Insira um CPF válido.";
           
        }

        else {
            telInput.parentElement.querySelector(".error-text").textContent = "";
       
        }
    

        if(telInput.value.length != 11) {
            telInput.parentElement.querySelector("#error-tel").textContent = "O telefone deve estar em um formato válido";
            invalidRequirements++
        }

        else {
            telInput.parentElement.querySelector("#error-tel").textContent = "";
        
        }

        if(passwordInput.value.length < 5 || passwordInput.value.length > 10) {
            confirmPassInput.parentElement.querySelector(".error-text").textContent = "A senha deve ter entre 5 a 10 caractéres";
            invalidRequirements++
        }

        else {
            confirmPassInput.parentElement.querySelector(".error-text").textContent = "";
         
        }

        if(confirmPassInput.value != passwordInput.value) {

            confirmPassInput.parentElement.querySelector("#confirm-error").textContent = "As senhas não conferem";
            invalidRequirements++
        }

        else {
            confirmPassInput.parentElement.querySelector("#confirm-error").textContent = "";
        
        }

          allInputs.forEach(currentInput => {
        
       if(currentInput.value == "" || currentInput.value.length < 5) {
        currentInput.style.borderColor = "rgb(250, 46, 70)";

        if(currentInput.parentElement.querySelector(".error-text")) {
            currentInput.parentElement.querySelector(".error-text").textContent = `O campo ${currentInput.placeholder} não pode estar vazio`

        }

         if(currentInput.parentElement.querySelector("#cpf-err")) {
              currentInput.parentElement.querySelector("#cpf-err").textContent = `O campo CPF não pode estar vazio`
        }

        if(currentInput.parentElement.querySelector("#name-error") && nameInput.value == "") {
            currentInput.parentElement.querySelector("#name-error").textContent = `O campo Nome não pode estar vazio`
      }

       }

       


    })


    if(invalidRequirements > 0) {
        event.preventDefault();
        
    }


 

})

