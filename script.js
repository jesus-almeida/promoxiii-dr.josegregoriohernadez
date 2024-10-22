const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const images = document.querySelectorAll('.galeria-grid img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');

// Toggle del menú
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Muestra la imagen en un modal al hacer clic
images.forEach(image => {
    image.addEventListener('click', () => {
        modalImage.src = image.src; // Asigna la fuente de la imagen al modal
        modal.style.display = 'flex'; // Muestra el modal
    });
});

// Cierra el modal al hacer clic en él o fuera de la imagen
modal.addEventListener('click', () => {
    modal.style.display = 'none'; // Oculta el modal
});


const countdownElement = document.getElementById('countdown-timer');
const targetDate = new Date('2025-07-15T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
        <div>${days}<span> Día${days === 1 ? '' : 's'}</span></div>
        <div>${hours}<span> Hora${hours === 1 ? '' : 's'}</span></div>
        <div>${minutes}<span> Minuto${minutes === 1 ? '' : 's'}</span></div>
        <div>${seconds}<span> Segundo${seconds === 1 ? '' : 's'}</span></div>
    `;

    if (distance < 0) {
        countdownElement.innerHTML = "¡Ya es el día!";
    }
}

setInterval(updateCountdown, 1000);
