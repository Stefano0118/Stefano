window.addEventListener("scroll", function() {
    const parallaxSection = document.querySelector(".historia-parallax");
    let offset = window.pageYOffset;
    parallaxSection.style.backgroundPositionY = (offset * 1.9) + "px"; /* Ajusta el valor para modificar la velocidad */
});
