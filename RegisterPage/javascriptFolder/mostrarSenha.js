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
