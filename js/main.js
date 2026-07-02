// Evitar que el navegador restaure la posición de scroll al recargar
history.scrollRestoration = 'manual';

// Menú hamburguesa
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

document.querySelectorAll('.header__link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
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

// Slider automático de la comunidad
const slider = document.querySelector('.slider');
if (slider) {
  const images = slider.querySelectorAll('.slider__img');
  let current = 0;
  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 4000);
}

// Scroll al cargar: ir al inicio siempre, excepto si el hash es #contacto
window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash === '#contacto') {
    const contacto = document.getElementById('contacto');
    if (contacto) {
      setTimeout(() => {
        const yOffset = -100;
        const y = contacto.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 100);
    }
  } else {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
});