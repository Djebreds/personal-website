window, addEventListener("scroll", function() {
    const logoImage = document.querySelector(".logo img");
    const mainNav = document.getElementById("mainNav");

    if (window.pageYOffset > 100) {
        logoImage.style.height = "40px";
        mainNav.classList.add("bg-black");
        mainNav.classList.add("txt-white");
    } else {
        logoImage.style.height = "60px";
        mainNav.classList.remove("bg-black");
        mainNav.classList.remove("txt-white");
    }
})