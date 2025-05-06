// JS ReciTech - Funcionalidades básicas

// Scroll suave a secciones
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Validación de formulario (ejemplo básico)
  const form = document.querySelector('#contact-form'); // Asegúrate de que tu formulario tenga ese id
  if (form) {
    form.addEventListener('submit', function (e) {
      const nombre = document.querySelector('#nombre');
      const email = document.querySelector('#email');
      const mensaje = document.querySelector('#mensaje');
  
      if (!nombre.value || !email.value || !mensaje.value) {
        e.preventDefault();
        alert('Por favor, completa todos los campos.');
      }
    });
  }
  
  // Botón "Volver arriba"
  const backToTop = document.querySelector('#back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      emailjs.sendForm('service_1tjj6dr', 'template_31cq83t', this)
        .then(() => {
          alert('¡Mensaje enviado con éxito! 🌱');
          form.reset();
        }, (error) => {
          alert('Error al enviar el mensaje: ' + error.text);
        });
    });
  });