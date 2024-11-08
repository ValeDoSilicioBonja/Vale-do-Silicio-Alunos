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


document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        // Verifica se o FAQ já está aberto
        if (answer.style.maxHeight) {
            // Fecha o FAQ
            answer.style.maxHeight = null;
        } else {
            // Fecha todos os FAQs abertos
            document.querySelectorAll('.faq-answer').forEach(answer => {
                answer.style.maxHeight = null;
            });
            // Abre o FAQ clicado
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});
