const button = document.querySelector("#da")
const popupContainer = document.querySelector(".change-pass-popup");
const siteContainer = document.querySelector(".site-container");
const closeButton = document.querySelector(".close-button");
const eyeButton = document.querySelectorAll(".input-bo img");
let passStage = "invisible";

button.addEventListener("click", function() {
  
    popupContainer.classList.toggle("open")
    siteContainer.classList.toggle("blur");

})

closeButton.addEventListener("click", function() {
popupContainer.classList.remove(("open"))
siteContainer.classList.remove("blur");
})

eyeButton.forEach(currentButton => {
    currentButton.addEventListener("click", function() {
 
        if(passStage == "invisible") {
        passStage = "visible";
         currentButton.src = "https://jonbet.com/static/media/view-pwd.c9f3d0c0.svg"
        currentButton.style.height = "25px"
        }
        else if(passStage == "visible") {
        passStage = "invisible";
         currentButton.src = "https://jonbet.com/static/media/eye.fdf3ae46.svg"
         currentButton.style.height = "20px"
    
        }
    })
})

