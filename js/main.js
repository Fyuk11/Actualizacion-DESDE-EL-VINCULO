// =============================================
//  MENÚ HAMBURGUESA (MOBILE)
// =============================================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Al tocar el botón hamburguesa
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  // Bloqueamos el scroll del body mientras el menú está abierto
  if (navMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflowX = 'hidden'; // previene scroll horizontal
  } else {
    document.body.style.overflow = '';
    document.documentElement.style.overflowX = '';
  }
});

// Cerrar el menú al hacer clic en cualquier enlace del menú
document.querySelectorAll('.header__link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
    document.documentElement.style.overflowX = '';
  });
});

// Cerrar el menú al hacer clic fuera del panel del menú o del botón toggle
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
    document.documentElement.style.overflowX = '';
  }
});

// =============================================
//  FORMULARIO NEWSLETTER (SIMULACIÓN)
// =============================================
const formNewsletter = document.getElementById('form-newsletter');
const mensajeNewsletter = document.getElementById('newsletter-mensaje');

if (formNewsletter) {
  formNewsletter.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita el envío real (luego conectaremos MailerLite)
    mensajeNewsletter.style.display = 'block';
    formNewsletter.reset();
    setTimeout(() => {
      mensajeNewsletter.style.display = 'none';
    }, 5000);
  });
}

// =============================================
//  ANIMACIÓN FADE-IN AL HACER SCROLL
// =============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

// Elementos que queremos animar al aparecer
document.querySelectorAll('.section, .producto-card, .testimonio, .beneficio-item').forEach(el => {
  observer.observe(el);
});

// =============================================
//  SLIDER AUTOMÁTICO DE LA COMUNIDAD
// =============================================
const slider = document.querySelector('.slider');
if (slider) {
  const images = slider.querySelectorAll('.slider__img');
  let current = 0;

  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 4000); // cambia cada 4 segundos
}

// =============================================
//  SCROLL AL CARGAR LA PÁGINA
//  Si la URL tiene #contacto → va al footer
//  Si no tiene hash → va al inicio (hero)
// =============================================
history.scrollRestoration = 'manual'; // evita que el navegador recuerde la posición de scroll

window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash === '#contacto') {
    const contacto = document.getElementById('contacto');
    if (contacto) {
      setTimeout(() => {
        const yOffset = -100; // compensación por el header fijo
        const y = contacto.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 100);
    }
  } else {
    // Si no hay ancla, forzamos ir al inicio
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
});