const navLinks = document.querySelector('.nav-links');
const navToggle = document.querySelector('.mobile-nav-toggle');
const body = document.querySelector('body');
const dropDownToggle = document.querySelectorAll('.drop');
const cover = document.querySelector('.cover');
const scrollButton = document.querySelectorAll('.scroll-button');
const leftScroller = document.querySelector('[data-scroll="left"]');
const rightScroller = document.querySelector('[data-scroll="right"]');
const inputs = document.querySelectorAll('.input');
const activeInput = document.activeElement.tagName;
const submit = document.querySelector('.submit');
const email = document.querySelector('.email');
const navItems = document.querySelectorAll('.nav-items');
const copyright = document.querySelector('.copyright');

// let resObject = {};
// const express = require('express');

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

function toggleDropDown() {
  console.log('clicked');
  let visible = this.getAttribute('data-visible');
  let dropDown = this.parentElement.querySelector('.down');

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

function scroll() {
  if (cover.offsetWidth + cover.scrollLeft >= cover.scrollWidth - 2) {
    leftScroller.style.display = 'none';
  } else {
    leftScroller.style.display = 'block';
  }

  if (cover.scrollLeft <= 0) {
    rightScroller.style.display = 'none';
  } else {
    rightScroller.style.display = 'block';
  }

  if (this.getAttribute('data-scroll') == 'left') {
    cover.scrollBy(350, 0);
  }

  if (this.getAttribute('data-scroll') == 'right') {
    cover.scrollBy(-350, 0);
  }
}

function validateInput() {
  let valid = true;
  inputs.forEach((input) => {
    if (input.value === '') {
      input.style.border = '2px solid #ff0505';
      valid = false;
    }
  });
  return valid;
}

function validateEmail() {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(email.value)) {
    return true;
  } else {
    email.style.border = '2px solid #ff0505';
    return false;
  }
}

function submitForm() {
  if (validateInput() && validateEmail()) {
    inputs.forEach((input) => {
      resObject = { ...resObject, [input.name]: input.value };
      input.style.border = '2px solid #ffffff';
      input.value = '';
    });
  }
  console.log(resObject);
}

function setYear() {
  const date = new Date();
  const year = date.getFullYear();
  // get the children of the element with the class of .copyright
  const children = copyright.children;
  children[1].innerHTML = year;
}

setYear();

//listeners
navToggle.addEventListener('click', toggleNav);

dropDownToggle.forEach((item) => {
  item.addEventListener('click', toggleDropDown);
});

scrollButton.forEach((item) => {
  item.addEventListener('click', scroll);
});

submit.addEventListener('click', submitForm);

navItems.forEach((item) => {
  item.addEventListener('click', closeNav);
});
