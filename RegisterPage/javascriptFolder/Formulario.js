

const Registerinputs = document.querySelectorAll(".input-group input");
const enviarButton = document.querySelector(".enviar-button");
const passInput = document.querySelector("#pass-input");


enviarButton.addEventListener("click", (event) => {
  

        let haveInvalidInput = false    

    Registerinputs.forEach(currentInput => {

        let TotalErrors = 0

 
   



    if(currentInput.placeholder.includes("CPF")) {
            
    const inputRequirements = {
        MinCaracteres : function() { if(currentInput.value.length > 11 || currentInput.value.length < 11 )  { this.maxCaracteres = false; return `Insira um CPF válido `} else {this.maxCaracteres = true;} },  
    
    }

    let haveInvalidNames = false

        for (let key in inputRequirements) {
            const resultado = inputRequirements[key]();
    
            if (inputRequirements[key] != true) {       
                haveInvalidInput = true;       
                haveInvalidNames = true;
                document.querySelector("#cpf-error").textContent = resultado;            
            }
        }

        if(haveInvalidNames == false) {
            document.querySelector("#cpf-error").textContent = "";
        }







}





    if(currentInput.placeholder.includes("Confirmar")) {
        
        
    const inputRequirements = {
        samePassword : function() { if(currentInput.value === passInput.value) { this.samePassword = true; } else {this.samePassword = false} return "As senhas não conferem"  },
        maxCaracteres : function() { if(currentInput.value.length > 10) { this.maxCaracteres = false; return `O campo confirmar a senha pode ter no máximo 10 letras `} else {this.maxCaracteres = true;} },
        minCaracteres : function() { if(currentInput.value.length < 4) { this.minCaracteres = false; return `O campo confirmar a  senha precisa ter no mínimo 5 letras `} else {this.minCaracteres = true;}},
     
    }

    let haveInvalidNames = false

    for (let key in inputRequirements) {
        const resultado = inputRequirements[key]();

        if (inputRequirements[key] != true) {       
            haveInvalidInput = true;       
            haveInvalidNames = true;
            document.querySelector("#confirm-error").textContent = resultado;            
        }
    }

    if(haveInvalidNames == false) {
        document.querySelector("#confirm-error").textContent = "";
    }


}


    })










})




