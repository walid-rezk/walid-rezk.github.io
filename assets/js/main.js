// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ── Back to top ──
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => backTop.classList.toggle('visible', window.scrollY > 400));
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── Active nav link on scroll ──
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const observer   = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));

// ── Fade-in on scroll ──
const fadeItems = document.querySelectorAll('.timeline-card, .project-card, .skill-category, .info-card, .stat-card');
const fadeObs   = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => {
        e.target.style.opacity   = '1';
        e.target.style.transform = 'translateY(0)';
      }, i * 60);
      fadeObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

fadeItems.forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(18px)';
  el.style.transition = 'opacity .4s ease, transform .4s ease';
  fadeObs.observe(el);
});
