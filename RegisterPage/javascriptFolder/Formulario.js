
const form = document.getElementById('form');
const Registerinputs = document.querySelectorAll(".input-group input");
const enviarButton = document.querySelector(".enviar-button");
const passInput = document.querySelector("#pass-input");




enviarButton.addEventListener("click", (event) => {
    let totalValidInputs = 0;
    Registerinputs.forEach(currentInput => {

    if(currentInput.placeholder.includes("Nome")) {
           const inputRequirements = {
            maxCaracteres : function() { if(currentInput.value.length > 15) { this.maxCaracteres = false; return `O campo nome pode ter no máximo 15 letras `} else {this.maxCaracteres = true;} },
            minCaracteres : function() { if(currentInput.value.length < 5) { this.minCaracteres = false; return `O campo nome precisa ter no mínimo 5 letras `} else {this.minCaracteres = true;}},     
        }

        let haveInvalidNames = false


        for (let key in inputRequirements) {
            const resultado = inputRequirements[key]();
    
            if (inputRequirements[key] != true) {       
                haveInvalidInput = true;       
                haveInvalidNames = true;
                document.querySelector("#name-error").textContent = resultado;  
            
            }
        }

        if(haveInvalidNames == false) {
            document.querySelector("#name-error").textContent = "";
            totalValidInputs++
        }
 
    }



    if(currentInput.placeholder.includes("Email")) {
        
        
        const inputRequirements = {
            
            maxCaracteres : function() { if(currentInput.value.length > 45) { this.maxCaracteres = false; return `O campo email pode ter no máximo 25 letras `} else {this.maxCaracteres = true;} },
            charNeed : function() { if(currentInput.value.includes("@")) { this.needHave = true}  else {this.needHave = false; return "Insira um email válido"}   },
            minCaracteres : function() { if(currentInput.value.length < 5) { this.minCaracteres = false; return `O campo email precisa ter no mínimo 10 letras `} else {this.minCaracteres = true;}},
           
        }

        let haveInvalidNames = false

        for (let key in inputRequirements) {
            const resultado = inputRequirements[key]();
    
            if (inputRequirements[key] != true) {       
                haveInvalidInput = true;       
                haveInvalidNames = true;
                document.querySelector("#email-error").textContent = resultado;  
                 
            }
        }

        if(haveInvalidNames == false) {
            document.querySelector("#email-error").textContent = "";
            totalValidInputs++
        }






 
 }

    if(currentInput.type == "date") {
        const currentYear = 2024;
        const year = new Date(currentInput.value).getFullYear();
        
        
        
    const inputRequirements = {
        estaVazio : function() { if(currentInput.value == "") {this.estaVazio = false; return "O campo Data de nascimento não pode ficar vazio"} else {this.estaVazio = true}},
        maiorIdade : function() { if( (currentYear - year) < 18 ) {this.maiorIdade= false; return "É necessário ter mais de 18 anos para criar uma conta"} else {this.maiorIdade = true;} },
        ValidData : function() { if(year < 1924) {this.ValidData = false; return "Insira uma data válida"} else {this.ValidData = true;}}
      
    }


    let haveInvalidNames = false


    for (let key in inputRequirements) {
        const resultado = inputRequirements[key]();

        if (inputRequirements[key] != true) {      
            console.log(inputRequirements.maiorIdade)
            haveInvalidInput = true;       
            haveInvalidNames = true;
            document.querySelector("#date-error").textContent = resultado;      
        
        }
    }

    if(haveInvalidNames == false) {
        document.querySelector("#date-error").textContent = "";
        totalValidInputs++
    }

    

 


 







}


    if(currentInput.placeholder.includes("CPF")) {
            
    const inputRequirements = {
        MinCaracteres : function() { if(currentInput.value.length > 11 || currentInput.value.length < 11 )  { this.maxCaracteres = false; return `Insira um CPF válido `} else {this.maxCaracteres = true;} },  
    
    }

    let haveInvalidNames = false

        for (let key in inputRequirements) {
            const resultado = inputRequirements[key]();
    
            if (inputRequirements[key] != true) {       
                haveInvalidInput = true;       
              
                document.querySelector("#cpf-error").textContent = resultado;            
            }
        }

        if(haveInvalidNames == false) {
            document.querySelector("#cpf-error").textContent = "";
            totalValidInputs++
        }







}


    if(currentInput.placeholder.includes("Telefone")) {
        
        
    const inputRequirements = {
        MinCaracteres : function() { if(currentInput.value.length > 11 || currentInput.value.length < 11 )  { this.maxCaracteres = false; return `Insira um telefone válido `} else {this.maxCaracteres = true;} },  
      
    }

    let haveInvalidNames = false

    for (let key in inputRequirements) {
        const resultado = inputRequirements[key]();

        if (inputRequirements[key] != true) {       
            haveInvalidInput = true;       
            haveInvalidNames = true;
            document.querySelector("#tel-error").textContent = resultado;            
        }
    }

    if(haveInvalidNames == false) {
        document.querySelector("#tel-error").textContent = "";
        totalValidInputs++
    }







}


    if(currentInput.placeholder.includes("Senha")) {
        
        
    const inputRequirements = {
        maisculoLetter : function() { if(/[A-Z]/.test(currentInput.value)) { this.maisculoLetter = true} else {this.maisculoLetter = false; return "É necessário uma letra maiuscula"} },
        maxCaracteres : function() { if(currentInput.value.length > 10) { this.maxCaracteres = false; return `O campo senha pode ter no máximo 10 letras `} else {this.maxCaracteres = true;} },
        minCaracteres : function() { if(currentInput.value.length < 4) { this.minCaracteres = false; return `O campo senha precisa ter no mínimo 5 letras `} else {this.minCaracteres = true;}},
 
    }

    let haveInvalidNames = false

    for (let key in inputRequirements) {
        const resultado = inputRequirements[key]();

        if (inputRequirements[key] != true) {       
            haveInvalidInput = true;       
            haveInvalidNames = true;
            document.querySelector("#pass-error").textContent = resultado;    
                    
        }
    }

    if(haveInvalidNames == false) {
        document.querySelector("#pass-error").textContent = "";
        totalValidInputs++
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
           document.querySelector(".enviar-button").backgroundColor = "red"
            document.body.backgroundColor = "red"         
        }
    }

    if(haveInvalidNames == false) {
        document.querySelector("#confirm-error").textContent = "";
             document.querySelector(".enviar-button").backgroundColor = "red"
             totalValidInputs++
        
    }


}


    })

    console.log(totalValidInputs)




    form.addEventListener('submit', e => {
        e.preventDefault();
    
    });





})




