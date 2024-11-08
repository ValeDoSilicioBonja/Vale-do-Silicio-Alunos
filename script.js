let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;
    
    // Atualiza o índice da imagem atual
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    
    // Movimenta o carrossel para o slide atual
    const carouselTrack = document.querySelector('.carousel-track');
    const slideWidth = slides[0].clientWidth;
    carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
