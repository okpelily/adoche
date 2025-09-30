// Select elements
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle menu on click
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active'); // add/remove 'active' class
  menuIcon.classList.toggle('bx-x'); // change icon from menu to "X"
});

// Close menu when scrolling
window.addEventListener('scroll', () => {
  navbar.classList.remove('active');
  menuIcon.classList.remove('bx-x');
});
