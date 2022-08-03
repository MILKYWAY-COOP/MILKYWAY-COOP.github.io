const navLinks = document.querySelector('.nav-links');
const navToggle = document.querySelector('.mobile-nav-toggle');

console.log(navToggle);

navToggle.addEventListener('click', () => {
  const visible = navLinks.getAttribute('data-visible');

  if (visible === 'false') {
    navLinks.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    navLinks.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});
