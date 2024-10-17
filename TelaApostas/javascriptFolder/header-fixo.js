window.onscroll = function() {fixHeader()};

function fixHeader() {
    var header = document.querySelector(".header");
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}