
  /* --- Navbar scroll effect --- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  /* --- Mobile menu --- */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');

  function openMenu() {
    navLinks.classList.add('open');
    navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    navLinks.classList.remove('open');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  navToggle.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeMenu() : openMenu();
  });
  navOverlay.addEventListener('click', closeMenu);
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  /* --- Scroll reveal --- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* --- Active nav link on scroll --- */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id');
    });
    navAnchors.forEach(a => {
      a.style.color = a.getAttribute('href') === `#${current}`
        ? 'var(--accent)'
        : '';
    });
  });

  /* --- Smooth hero subtitle typing effect --- */
  const roles = ['Full Stack Developer', 'PHP Developer', 'Laravel Expert', 'Web Developer'];
  let ri = 0, ci = 0, deleting = false;
  const heroSubEl = document.querySelector('.hero-subtitle strong');
  if (heroSubEl) {
    function typeRole() {
      const role = roles[ri];
      heroSubEl.textContent = deleting ? role.slice(0, --ci) : role.slice(0, ++ci);
      if (!deleting && ci === role.length) { setTimeout(() => deleting = true, 1800); }
      else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
      setTimeout(typeRole, deleting ? 55 : 95);
    }
    typeRole();
  }
