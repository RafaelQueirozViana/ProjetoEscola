const emailInput = document.querySelector("#email-input");
const atalhoButton = document.querySelectorAll(".button");


atalhoButton.forEach(button => {
    button.addEventListener('click', () => {

        if (!(emailInput.value.includes( button.textContent))) {
                emailInput.value += button.textContent;
        }

        



    }
