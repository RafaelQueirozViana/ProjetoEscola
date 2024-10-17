const iconLinks = document.querySelectorAll(".icons-nav .nav-container li");

iconLinks.forEach(currentIcon => {
    currentIcon.addEventListener("mouseenter", () => {
        currentIcon.parentElement.querySelector(".hover-box").style.opacity = "1"
    })

    currentIcon.addEventListener("mouseout", () => {
         currentIcon.parentElement.querySelector(".hover-box").style.opacity = "0"
    })

})