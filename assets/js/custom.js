"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var navWrapper = document.querySelector('.nav-wrapper');
  window.addEventListener('scroll', function () {
    console.log(window.scrollY);

    if (200 < window.scrollY) {
      navWrapper.classList.add('sticky-nav');
    } else if (100 > window.scrollY) {
      navWrapper.classList.remove('sticky-nav');
    }
  });
});