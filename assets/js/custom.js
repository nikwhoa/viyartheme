"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var navWrapper = document.querySelector('.nav-wrapper');
  window.addEventListener('scroll', function () {
    if (200 < window.pageYOffset
    /* added pageYOffset for ie */
    ) {
      navWrapper.classList.add('sticky-nav');
    } else if (100 > window.pageYOffset) {
      navWrapper.classList.remove('sticky-nav');
    }
  });
});