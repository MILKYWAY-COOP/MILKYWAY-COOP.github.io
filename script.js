const navLinks = document.querySelector('.nav-links');
const navToggle = document.querySelector('.mobile-nav-toggle');
const dropDownToggle = document.querySelectorAll('.drop');
const body = document.querySelector('body');
const inputs = document.querySelectorAll('.input');
const activeInput = document.activeElement.tagName;
const submit = document.querySelector('.submit');

//function
function toggleNav() {
  const visible = navLinks.getAttribute('data-visible');

  if (visible === 'false') {
    navLinks.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    body.style.overflow = 'hidden';
  } else {
    navLinks.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    body.style.overflow = null;
  }
}

function toggleDropDown() {
  let visible = this.getAttribute('data-visible');
  let dropDown = this.parentElement.querySelector('.row');

  dropDown === null
    ? (dropDown = this.parentElement.querySelector('.contact-form'))
    : null;

  if (visible === 'false') {
    dropDown.style.display = 'flex';
    this.setAttribute('data-visible', true);
  } else {
    dropDown.style.display = 'none';
    this.setAttribute('data-visible', false);
  }
}

function focusInput() {
  console.log(this)
  this.style.border = '2px solid #040339';
}

function unFocusInput() {
  this.style.border = 'none';
}

//validate that each input is filled out
function validateInput() {
  let valid = true;
  inputs.forEach(input => {
    if (input.value === '') {
      input.style.border = '2px solid #ff0505';
      valid = false;
    } else {
      input.style.border = '2px solid #040339';
    }
  });
  return valid;
}

//Event listeners
dropDownToggle.forEach((item) => {
  item.addEventListener('click', toggleDropDown);
});

navToggle.addEventListener('click', toggleNav);

inputs.forEach((item) => {
  item.addEventListener('focus', focusInput);
});

inputs.forEach((item) => {
  item.addEventListener('blur', unFocusInput);
});

//listen for validation
submit.addEventListener('click', validateInput);
