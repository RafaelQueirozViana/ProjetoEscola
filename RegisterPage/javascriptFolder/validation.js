const form = document.getElementById('form');
const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const dateInput = document.querySelector("#date-input");
const cpfInput = document.querySelector("#cpf-input");
const telInput = document.querySelector("#tel-input");
const passwordInput = document.querySelector("#pass-input");
const confPassInput = document.querySelector("#confirm-pass");
const enviarButton = document.querySelector(".enviar-button");


form.addEventListener('submit', e => {
    e.preventDefault();
   });  

function preventFormSubmit(e) {
    e.preventDefault();
}

enviarButton.addEventListener("click", () => {

    let allValid = true;

    const currentYear = 2024;
    const year = new Date(dateInput.value).getFullYear();


    const inputRequirements = [

        nameRequirements = {
        maxCaracteres : function() { if(nameInput.value.length > 15) { this.maxCaracteres = false; return `O campo nome pode ter no máximo 15 letras `} else {this.maxCaracteres = true;} },
        minCaracteres : function() { if(nameInput.value.length < 5) { this.minCaracteres = false; return `O campo nome precisa ter no mínimo 5 letras `} else {this.minCaracteres = true;}},     
    }, 
        emailRequirements = {
        maxCaracteres : function() { if(emailInput.value.length > 45) { this.maxCaracteres = false; return `O campo email pode ter no máximo 25 letras `} else {this.maxCaracteres = true;} },
        charNeed : function() { if(emailInput.value.includes("@")) { this.charNeed = true}  else {this.charNeed = false; return "Insira um email válido"}   },
        minCaracteres : function() { if(emailInput.value.length < 5) { this.minCaracteres = false; return `O campo email precisa ter no mínimo 10 letras `} else {this.minCaracteres = true;}}, 
    },  
        dateRequirements = {
        estaVazio : function() { if(dateInput.value == "") {this.estaVazio = false; return "O campo Data de nascimento não pode ficar vazio"} else {this.estaVazio = true}},
        maiorIdade : function() { if( (currentYear - year) < 18 ) {this.maiorIdade= false; return "É necessário ter mais de 18 anos para criar uma conta"} else {this.maiorIdade = true;} },
        ValidData : function() { if(year < 1924) {this.ValidData = false; return "Insira uma data válida"} else {this.ValidData = true;}}
      
    },
        cpfRequirements = {
        MinCaracteres : function() { if(cpfInput.value.length > 11 || cpfInput.value.length < 11 )  { this.minCaracteres = false; return `Insira um CPF válido `} else {this.minCaracteres = true;} },  
    
    }, 
          
        tellRequirements = {
        MinCaracteres : function() { if(telInput.value.length > 11 || telInput.value.length < 11 )  { this.MinCaracteres = false; return `Insira um telefone válido `} else {this.MinCaracteres = true;} },  
      
    },
    
        passRequirements = {
        maisculoLetter : function() { if(/[A-Z]/.test(passwordInput.value)) { this.maisculoLetter = true} else {this.maisculoLetter = false; return "É necessário uma letra maiuscula"} },
        maxCaracteres : function() { if(passwordInput.value.length > 10) { this.maxCaracteres = false; return `O campo senha pode ter no máximo 10 letras `} else {this.maxCaracteres = true;} },
        minCaracteres : function() { if(passwordInput.value.length < 4) { this.minCaracteres = false; return `O campo senha precisa ter no mínimo 5 letras `} else {this.minCaracteres = true;}},
    
    },
    
        confPassRequirements = {
        
        maxCaracteres : function() { if(confPassInput.value.length > 10) { this.maxCaracteres = false; return `O campo confirmar a senha pode ter no máximo 10 letras `} else {this.maxCaracteres = true;} },
        minCaracteres : function() { if(confPassInput.value.length < 4) { this.minCaracteres = false; return `O campo confirmar a  senha precisa ter no mínimo 5 letras `} else {this.minCaracteres = true;}},
     
    }
    
    
    ]




    inputRequirements.forEach(requirements => {
    
        Object.values(requirements).forEach(checkFunction => {
        
            const result = checkFunction();
            if (result !== undefined) {
                console.log(result);
                allValid = false;
            }
        });
    });

    if (allValid) {
        form.removeEventListener('submit', preventFormSubmit);
    } 
  
}


)








