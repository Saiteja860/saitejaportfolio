// One orchestrated entrance on page load for the hero content
document.addEventListener('DOMContentLoaded', () => {
  const heroEls = document.querySelectorAll('.hero-kicker, .hero-name, .hero-role, .hero-line, .hero-cta');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    heroEls.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 120 * i);
    });
  }
});
