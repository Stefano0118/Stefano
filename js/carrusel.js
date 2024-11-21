const carouselSlide = document.getElementById("carousel-slide");
const images = document.querySelectorAll("#carousel-slide img");
const indicatorsContainer = document.getElementById("carousel-indicators");
let currentIndex = 0;

// Crear indicadores
function createIndicators() {
    images.forEach((_, i) => {
        const indicator = document.createElement("div");
        indicator.classList.add("indicator");
        if (i === 0) indicator.classList.add("active");
        indicator.addEventListener("click", () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    });
}

function updateIndicators() {
    document.querySelectorAll(".indicator").forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
    });
}

// Mostrar la diapositiva actual
function showSlide(index) {
    const slideWidth = images[0].clientWidth;
    carouselSlide.style.transform = `translateX(${-slideWidth * index}px)`;
    updateIndicators();
}

// Avanzar a la siguiente diapositiva
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

// Retroceder a la diapositiva anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

// Ir a una diapositiva específica
function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

// Inicializar el carrusel
createIndicators();
