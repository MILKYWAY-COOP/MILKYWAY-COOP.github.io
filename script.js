const navLinks = document.querySelector('.nav-links');
const navToggle = document.querySelector('.mobile-nav-toggle');
const dropDownToggle = document.querySelectorAll('.drop');
const body = document.querySelector('body');
const inputs = document.querySelectorAll('.input');
const activeInput = document.activeElement.tagName;
const submit = document.querySelector('.submit');
const email = document.querySelector('.email');

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
  this.style.border = '2px solid #040339';
}

function unFocusInput() {
  this.style.border = 'none';
}

function validateInput() {
  let valid = true;
  inputs.forEach((input) => {
    if (input.value === '') {
      input.style.border = '2px solid #ff0505';
      valid = false;
    } else {
      return valid;
    }
  });
}
//check whether the email is valid
function validateEmail() {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(email.value)) {
    email.style.border = '2px solid #040339';
    return true;
  } else {
    return false;
  }
}

function submitForm() {
  if (validateInput() && validateEmail()) {
    // alert('Form submitted');
  } else {
    // alert('Please fill in all fields');
  }
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

submit.addEventListener('click', submitForm);
