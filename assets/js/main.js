const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');
if (menu && links) {
  const setMenuOpen = (open, returnFocus = false) => {
    links.classList.toggle('open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    if (returnFocus) menu.focus();
  };
  menu.addEventListener('click', () => setMenuOpen(!links.classList.contains('open')));
  links.addEventListener('click', event => {
    if (event.target.closest('a')) setMenuOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && links.classList.contains('open')) setMenuOpen(false, true);
  });
  window.matchMedia('(max-width: 820px)').addEventListener('change', () => setMenuOpen(false));
  document.documentElement.classList.add('nav-ready');
}

// Content stays visible even if JavaScript or the animation API is unavailable.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}

document.querySelectorAll('[data-year]').forEach(element => element.textContent = new Date().getFullYear());
