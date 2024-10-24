// script_about.js

// Função para adicionar efeito fade-in ao rolar a página
window.addEventListener('scroll', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (itemPosition < screenPosition) {
            item.classList.add('is-visible');
        }
    });

    const elements = document.querySelectorAll('.fade-in');
    const scrollPosition = window.scrollY + window.innerHeight;
    elements.forEach((element) => {
        const elementPosition = element.offsetTop;
        if (scrollPosition > elementPosition) {
            element.style.opacity = 1;
        }
    });
});

// Função para expandir a imagem na linha do tempo ao passar o mouse
function expandImage(element) {
    element.querySelector('img').style.transform = "scale(1.5)";
}

// Função para reduzir a imagem ao tirar o mouse
function shrinkImage(element) {
    element.querySelector('img').style.transform = "scale(1)";
}

// script.js

// Seleciona os elementos necessários para o carrossel
const carousel = document.querySelector('.carousel');
const employees = document.querySelectorAll('.employee');
const totalEmployees = employees.length;

let currentIndex = 0;

// Função que move o carrossel para o funcionário com base no índice atual
function showEmployee(index) {
    carousel.style.transform = `translateX(${-index * 100}%)`; // Aplica a transformação
}

// Event listeners para navegação manual
document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalEmployees - 1; // Volta ao último se estiver no primeiro
    showEmployee(currentIndex);
});

document.querySelector('.carousel-control.next').addEventListener('click', () => {
    currentIndex = (currentIndex < totalEmployees - 1) ? currentIndex + 1 : 0; // Volta ao primeiro se estiver no último
    showEmployee(currentIndex);
});

// Mostra o primeiro funcionário ao carregar a página
showEmployee(currentIndex);



