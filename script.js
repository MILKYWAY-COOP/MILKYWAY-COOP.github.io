const navLinks = document.querySelector('.nav-links');
const navToggle = document.querySelector('.mobile-nav-toggle');
const dropDownToggle = document.querySelectorAll('.drop');

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

function toggleDropDown() {
  let visible = this.getAttribute('data-visible');
  const dropDown = this.parentElement.querySelector('.row')

  if (visible === 'false') {
    dropDown.style.display = 'flex';
    this.setAttribute('data-visible', true);
    
  } else {
    dropDown.style.display = 'none';
    this.setAttribute('data-visible', false);
  }
}

dropDownToggle.forEach((item) => {
  item.addEventListener('click', toggleDropDown);
});
