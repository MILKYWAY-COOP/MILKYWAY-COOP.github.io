const navLinks = document.querySelector('.nav-links');
const navToggle = document.querySelector('.mobile-nav-toggle');
const body = document.querySelector('body');

//functions
function toggleNav() {
  const visible = navLinks.getAttribute('data-visible');
  if (visible === 'false') {
    navLinks.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    body.style.overflow = 'hidden';
  } else {
    closeNav();
  }
}

function closeNav() {
  navLinks.setAttribute('data-visible', false);
  navToggle.setAttribute('aria-expanded', false);
  body.style.overflow = null;
}

//listeners
navToggle.addEventListener('click', toggleNav);