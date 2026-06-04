// Academic Brutalism — Portfolio Interactivity
// ENL1W Grade 9 Academic Portfolio

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollReveal();
});

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const menuOverlay = document.getElementById('menuOverlay');

  if (menuToggle && menuOverlay) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      menuOverlay.style.display = menuOverlay.style.display === 'flex'
                       ? 'none' : 'flex';
    });

    menuOverlay.querySelectorAll('.overlay-link').forEach(link => {
      link.addEventListener('click', () => {
        menuOverlay.style.display = 'none';
        menuToggle.classList.remove('active');
      });
    });
  }
}

// ============================================
// SCROLL REVEAL
// ============================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}
