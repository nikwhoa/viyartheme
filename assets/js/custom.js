"use strict";

/* eslint-disable no-trailing-spaces */
window.addEventListener('DOMContentLoaded', function () {
  var navWrapper = document.querySelector('.nav-wrapper'),
      hamburgerButton = document.querySelector(' .navigation__mobile-menu'),
      navigation = navWrapper.querySelector('.navigation__nav');
  window.addEventListener('scroll', function () {
    if (200 < window.pageYOffset
    /* added pageYOffset for ie */
    ) {
      navWrapper.classList.add('sticky-nav');
    } else if (100 > window.pageYOffset) {
      navWrapper.classList.remove('sticky-nav');
    }
  }); // eslint-disable-next-line yoda

  if (window.outerWidth <= 794) {
    navigation.classList.remove('flex-container');
  }

  hamburgerButton.addEventListener('click', function () {
    navigation.classList.toggle('hamburger-navigation');
    var hamburgerLine = document.createElement('div');
    hamburgerLine.style.cssText = "\n        width: 64px;\n        height: 1px;\n        background: #30A0F0;\n        margin: 1rem auto;\n        ";
    navigation.appendChild(hamburgerLine);
    var hamburgerPhone = document.createElement('div');
    hamburgerPhone.innerHTML = "\n        <a class=\"phone__link\" href=\"tel:+380999999999\">\n        <div class=\"phone-icon flex-item\">\n            \n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path id=\"phone-icon\" d=\"M17.4912 13.2102L14.9792 10.6982C14.0821 9.80111 12.557 10.16 12.1981 11.3262C11.929 12.1337 11.0319 12.5822 10.2245 12.4028C8.43021 11.9542 6.00797 9.62168 5.55941 7.73772C5.29027 6.93027 5.82855 6.03314 6.63596 5.76404C7.80222 5.40519 8.16108 3.88007 7.26395 2.98295L4.752 0.470991C4.03429 -0.156997 2.95774 -0.156997 2.32975 0.470991L0.625214 2.17553C-1.07933 3.96978 0.804639 8.72455 5.02113 12.941C9.23763 17.1575 13.9924 19.1313 15.7866 17.337L17.4912 15.6324C18.1192 14.9147 18.1192 13.8382 17.4912 13.2102Z\" fill=\"white\" />\n            </svg>\n\n        </div>\n        <div class=\"phone-number flex-item\">\n            +380 (99) 99 99 999\n        </div>\n    </a>\n        ";
    navigation.appendChild(hamburgerPhone);
  });
});