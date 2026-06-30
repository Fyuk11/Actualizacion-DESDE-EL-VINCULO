// Menú hamburguesa
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Cerrar al hacer clic en un enlace
document.querySelectorAll('.header__link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Cerrar al hacer clic fuera del menú
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove('active');
  }
});

// Formulario newsletter (simulación)
const formNewsletter = document.getElementById('form-newsletter');
const mensajeNewsletter = document.getElementById('newsletter-mensaje');
if (formNewsletter) {
  formNewsletter.addEventListener('submit', (e) => {
    e.preventDefault();
    mensajeNewsletter.style.display = 'block';
    formNewsletter.reset();
    setTimeout(() => { mensajeNewsletter.style.display = 'none'; }, 5000);
  });
}

// Animación fade-in al scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section, .producto-card, .testimonio, .beneficio-item').forEach(el => {
  observer.observe(el);
});