// Menú desplegable para móviles
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Animación de entrada para los elementos de servicio
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Validación del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputs = this.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '#ccc';
        }
    });

    if (isValid) {
        alert('¡Gracias por contactarnos! Nos pondremos en contacto pronto.');
        this.reset();
    }
});

// Scroll suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});