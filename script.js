// JS ReciTech - Funcionalidades básicas

// Scroll suave a secciones
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Validación de formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const nombre = form.querySelector('input[placeholder="Nombre"]');
  const email = form.querySelector('input[placeholder="Correo electrónico"]');
  const mensaje = form.querySelector('textarea[placeholder="Escribe tu mensaje"]');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
    
      if (!nombre.value.trim() || !email.value.trim() || !mensaje.value.trim()) {
        alert('Por favor, completa todos los campos.');
        return;
      }
    
      emailjs.sendForm('service_1tjj6dr', 'template_31cq83t', this)
        .then(() => {
          alert('¡Mensaje enviado con éxito! 🌱');
          form.reset();
        }, (error) => {
          alert('Error al enviar el mensaje: ' + error.text);
        });
    });
  }

  // Botón volver arriba (si existe)
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 300);
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Panel lateral info
  const toggleBtn = document.getElementById('infoToggle');
  const panel = document.getElementById('sidePanel');
  const closeBtn = document.getElementById('closePanel');

  if (toggleBtn && panel && closeBtn) {
    toggleBtn.addEventListener('click', () => {
      panel.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      panel.classList.remove('active');
    });
  }
});